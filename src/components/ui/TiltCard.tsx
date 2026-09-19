"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 8)
  glareOpacity?: number; // Glare opacity (default: 0.15)
  scaleOnHover?: number; // Scale on hover (default: 1.02)
  liftY?: number; // Hover lift in px (default: -6)
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.14,
  scaleOnHover = 1.015,
  liftY = -6,
  style = {},
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Raw mouse coordinates relative to card center (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spot/glare position in pixels relative to card
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  // Responsive spring physics
  const springCfg = { damping: 24, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [maxTilt, -maxTilt]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-maxTilt, maxTilt]), springCfg);
  const scale = useSpring(isHovered ? scaleOnHover : 1, springCfg);
  const y = useSpring(isHovered ? liftY : 0, springCfg);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Center-relative normalized coords (-1 to 1)
      const normX = (clientX / rect.width) * 2 - 1;
      const normY = (clientY / rect.height) * 2 - 1;

      mouseX.set(normX);
      mouseY.set(normY);
      glareX.set(clientX);
      glareY.set(clientY);
    },
    [isMobile, mouseX, mouseY, glareX, glareY]
  );

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isMobile ? 1 : scale,
          y: isMobile ? 0 : y,
          transformStyle: "preserve-3d",
          ...style,
        }}
        className={`relative h-full transition-shadow duration-300 ${className}`}
      >
        {/* Specular Glare Follower Overlay */}
        {glareOpacity > 0 && !isMobile && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${glareX.get()}px ${glareY.get()}px, rgba(255, 255, 255, ${glareOpacity}), rgba(232, 93, 63, ${
                glareOpacity * 0.4
              }) 35%, transparent 70%)`,
            }}
          />
        )}

        {/* Card Content with 3D depth preserve */}
        <div style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }} className="h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
