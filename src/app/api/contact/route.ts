import { NextResponse } from "next/server";
import { sendUserGreetingEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, budget, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const greetingMessage = `Dear ${name},\n\nWarm greetings from the entire CrestSoft family!\n\nThank you for reaching out and choosing CrestSoft to be your technology partner. We are truly honored to have the opportunity to collaborate with you.\n\nWe have received your project details:\n• Service: ${service || "Software Development"}\n• Budget Tier: ${budget || "Discussing"}\n• Contact Phone: ${phone || "Not provided"}\n\nOur engineering and architectural team at our studio (Sector 55, Phase 2, Gurugram, Haryana) is currently reviewing your project. You will receive an initial architecture brief and proposal within 4 hours.\n\nIf you need immediate assistance or wish to speak directly, please contact us:\n📞 Phone: +91 8521982915 / +91 8581982915\n💬 WhatsApp: +91 8521982915\n✉️ Email: rajeev04632@gmail.com\n📍 Address: Sector 55, Phase 2, Gurugram, Haryana, India\n\nOnce again, thank you for choosing CrestSoft. Welcome to the CrestSoft family!\n\nWarmest regards,\nThe CrestSoft Family & Team\nSector 55, Phase 2, Gurugram, Haryana`;

    // 1. Try sending direct personalized HTML greeting from rajeev04632@gmail.com to user's email via Nodemailer
    const directSmtpSent = await sendUserGreetingEmail({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    // 2. Forward inquiry to FormSubmit with Origin & Referer headers and _autoresponse for user
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const referer = req.headers.get("referer") || `${origin}/contact`;

    try {
      const fsRes = await fetch("https://formsubmit.co/ajax/rajeev04632@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          _subject: `[New Inquiry] ${name} (${service}) - CrestSoft`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          _autoresponse: greetingMessage,
          name: name,
          email: email,
          "Phone Number": phone || "Not provided",
          "Service Required": service || "General Inquiry",
          "Selected Budget": budget || "Not specified",
          "Project Message": message,
          "Studio Location": "Sector 55, Phase 2, Gurugram, Haryana",
          "Recipient Inbox": "rajeev04632@gmail.com",
          "Submitted At": new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });

      const fsData = await fsRes.json().catch(() => null);
      console.log("FormSubmit contact response:", fsData);
    } catch (formSubmitErr) {
      console.warn("FormSubmit delivery note:", formSubmitErr);
    }

    return NextResponse.json({
      success: true,
      directSmtpSent,
      message: directSmtpSent
        ? `Inquiry received and branded greeting sent from rajeev04632@gmail.com to ${email}`
        : `Inquiry recorded. Set GMAIL_APP_PASSWORD in .env.local for direct Gmail SMTP to ${email}.`,
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
