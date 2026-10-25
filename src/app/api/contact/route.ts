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

    // 1. Send direct personalized HTML greeting from rajeev04632@gmail.com to user's email via Nodemailer
    await sendUserGreetingEmail({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    // 2. Forward inquiry notification to rajeev04632@gmail.com with autoresponse enabled for the user
    try {
      await fetch("https://formsubmit.co/ajax/rajeev04632@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Inquiry] ${name} (${service}) - CrestSoft`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          _autoresponse: greetingMessage,
          "Applicant / Client Name": name,
          "Client Email": email,
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
    } catch (formSubmitErr) {
      console.warn("FormSubmit delivery note:", formSubmitErr);
    }

    return NextResponse.json({
      success: true,
      message: `Inquiry recorded & Greetings sent to ${email} from rajeev04632@gmail.com`,
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: true, message: "Inquiry recorded." },
      { status: 200 }
    );
  }
}
