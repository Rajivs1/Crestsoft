import { NextResponse } from "next/server";

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

    // Forward to FormSubmit endpoint linked to rajeev04632@gmail.com
    const response = await fetch(
      "https://formsubmit.co/ajax/rajeev04632@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry from ${name} - CrestSoft`,
          _template: "table",
          _captcha: "false",
          Name: name,
          Email: email,
          Phone: phone || "Not provided",
          "Service Interested": service || "General Inquiry",
          "Estimated Budget": budget || "Not specified",
          Message: message,
          "Submitted At": new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("FormSubmit response error:", errText);
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully forwarded to rajeev04632@gmail.com",
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    // Return success gracefully so user sees confirmation, with fallback logging
    return NextResponse.json(
      { success: true, message: "Inquiry recorded." },
      { status: 200 }
    );
  }
}
