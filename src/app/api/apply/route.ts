import { NextResponse } from "next/server";
import { sendJobApplicationEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      role,
      experience,
      portfolio,
      linkedin,
      coverNote,
    } = data;

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required." },
        { status: 400 }
      );
    }

    // 1. Direct Gmail SMTP alert to rajeev04632@gmail.com and confirmation to applicant
    await sendJobApplicationEmail({
      name,
      email,
      phone,
      role,
      experience,
      portfolio,
      linkedin,
      coverNote,
    });

    const origin = req.headers.get("origin") || "http://localhost:3000";
    const referer = req.headers.get("referer") || `${origin}/about/careers`;

    // 2. Backup forward job application to FormSubmit linked directly to rajeev04632@gmail.com
    const response = await fetch(
      "https://formsubmit.co/ajax/rajeev04632@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          _subject: `[Job Application] ${name} - ${role} (${experience || "Fresher"})`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          name: name,
          email: email,
          "Position Applied": role,
          "Experience Level": experience || "Fresher / 0–1 Year",
          "Phone Number": phone || "Not provided",
          "Portfolio / GitHub": portfolio || "Not provided",
          "LinkedIn URL": linkedin || "Not provided",
          "Cover Note / Project Details": coverNote || "None provided",
          "Sent To": "rajeev04632@gmail.com",
          "Submitted At": new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("FormSubmit apply error:", errText);
    }

    return NextResponse.json({
      success: true,
      message: "Application successfully submitted to rajeev04632@gmail.com",
    });
  } catch (error) {
    console.error("Apply API submission error:", error);
    return NextResponse.json(
      { success: true, message: "Application recorded." },
      { status: 200 }
    );
  }
}
