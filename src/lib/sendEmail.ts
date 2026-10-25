import nodemailer from "nodemailer";

export interface ContactNotificationData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

/**
 * Generates an elegant, warm HTML greeting email sent to the user
 * from the CrestSoft team (rajeev04632@gmail.com).
 */
export function generateUserGreetingHtml(data: ContactNotificationData): string {
  const { name, service, budget, phone } = data;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warm Greetings from the CrestSoft Family</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fcfaf6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #151515;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fcfaf6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e7ded3; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #151515 0%, #22222b 100%); padding: 36px 32px; text-align: left;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">CrestSoft</span>
                    <span style="display: block; font-size: 11px; color: #e85d3f; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">Studio • Gurugram, Haryana</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; font-size: 11px; background-color: rgba(232, 93, 63, 0.18); border: 1px solid rgba(232, 93, 63, 0.35); color: #f79a83; padding: 4px 10px; border-radius: 99px; font-weight: 600;">Founded 2026</span>
                  </td>
                </tr>
              </table>
              <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 24px 0 8px 0; line-height: 1.2; letter-spacing: -0.5px;">
                Warm Greetings from the CrestSoft Family! ✨
              </h1>
              <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 0; line-height: 1.5;">
                Thank you for choosing CrestSoft as your digital engineering partner.
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 36px 32px;">
              <p style="font-size: 16px; line-height: 1.6; color: #151515; margin: 0 0 18px 0;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="font-size: 15px; line-height: 1.65; color: #4a4642; margin: 0 0 20px 0;">
                On behalf of the entire <strong>CrestSoft family</strong>, we want to extend our heartfelt greetings and gratitude! Thank you for trusting CrestSoft to be your software development studio. We are thrilled at the prospect of bringing your vision to life.
              </p>
              
              <!-- Project Summary Box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fbf8f3; border: 1px solid #e7ded3; border-radius: 14px; padding: 18px 20px; margin: 24px 0;">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 700; color: #e85d3f; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Your Project Details</span>
                    <table width="100%" cellpadding="4" cellspacing="0" border="0" style="font-size: 13px; color: #4a4642;">
                      <tr>
                        <td width="35%" style="color: #8c827a; font-weight: 600;">Service:</td>
                        <td style="color: #151515; font-weight: 700;">${service || "Software Development"}</td>
                      </tr>
                      <tr>
                        <td style="color: #8c827a; font-weight: 600;">Budget Tier:</td>
                        <td style="color: #151515; font-weight: 700;">${budget || "Discussing"}</td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="color: #8c827a; font-weight: 600;">Contact Phone:</td>
                        <td style="color: #151515; font-weight: 700;">${phone}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next -->
              <h2 style="font-size: 16px; font-weight: 700; color: #151515; margin: 28px 0 12px 0;">
                What Happens Next?
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 14px; line-height: 1.6; color: #4a4642;">
                <tr>
                  <td width="28" valign="top" style="padding-bottom: 12px;">
                    <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #e85d3f; color: #ffffff; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">1</div>
                  </td>
                  <td style="padding-bottom: 12px; padding-left: 8px;">
                    <strong>Prompt Review:</strong> Our engineering desk is currently analyzing your project specifications.
                  </td>
                </tr>
                <tr>
                  <td width="28" valign="top" style="padding-bottom: 12px;">
                    <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #e85d3f; color: #ffffff; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">2</div>
                  </td>
                  <td style="padding-bottom: 12px; padding-left: 8px;">
                    <strong>Preliminary Architecture Brief:</strong> You will receive an initial proposal and recommended technology stack within <strong>4 hours</strong>.
                  </td>
                </tr>
                <tr>
                  <td width="28" valign="top">
                    <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #e85d3f; color: #ffffff; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">3</div>
                  </td>
                  <td style="padding-left: 8px;">
                    <strong>Direct Connection:</strong> We can schedule a short 15-minute technical discovery call or chat directly via WhatsApp.
                  </td>
                </tr>
              </table>

              <!-- Direct Contact Box -->
              <div style="margin-top: 32px; padding: 20px; background-color: #ffffff; border: 1.5px dashed #e7ded3; border-radius: 14px; text-align: left;">
                <span style="font-size: 12px; font-weight: 700; color: #151515; display: block; margin-bottom: 8px;">
                  Need immediate assistance? Feel free to contact us anytime:
                </span>
                <p style="font-size: 13px; color: #4a4642; margin: 4px 0; line-height: 1.6;">
                  📞 <strong>Direct Call:</strong> <a href="tel:8521982915" style="color: #e85d3f; text-decoration: none; font-weight: 600;">+91 8521982915</a> / <a href="tel:8581982915" style="color: #e85d3f; text-decoration: none; font-weight: 600;">+91 8581982915</a><br>
                  💬 <strong>WhatsApp:</strong> <a href="https://wa.me/918521982915" style="color: #10b981; text-decoration: none; font-weight: 600;">+91 8521982915</a><br>
                  ✉️ <strong>Email:</strong> <a href="mailto:rajeev04632@gmail.com" style="color: #e85d3f; text-decoration: none; font-weight: 600;">rajeev04632@gmail.com</a><br>
                  📍 <strong>Studio Address:</strong> Sector 55, Phase 2, Gurugram, Haryana, India
                </p>
              </div>

              <!-- Signoff -->
              <p style="font-size: 15px; line-height: 1.6; color: #151515; margin: 32px 0 0 0;">
                Once again, thank you for choosing CrestSoft.<br>
                <strong>Welcome to the CrestSoft family!</strong>
              </p>
              <p style="font-size: 14px; color: #68645f; margin: 12px 0 0 0; line-height: 1.5;">
                Warmest regards,<br>
                <strong style="color: #151515;">The CrestSoft Team</strong><br>
                <span style="font-size: 12px; color: #a89a8a;">Sector 55, Phase 2, Gurugram, Haryana</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f0e8; padding: 20px 32px; border-top: 1px solid #e7ded3; text-align: center;">
              <p style="font-size: 11px; color: #8c827a; margin: 0; line-height: 1.5;">
                &copy; 2026 CrestSoft. All rights reserved.<br>
                Technology Built to Move You Forward. Sector 55, Phase 2, Gurugram, Haryana.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export interface JobApplicationData {
  name: string;
  email: string;
  phone?: string;
  role: string;
  experience?: string;
  portfolio?: string;
  linkedin?: string;
  coverNote?: string;
}

/**
 * Creates an authenticated Nodemailer transporter using GMAIL_APP_PASSWORD
 */
function getTransporter() {
  const rawPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || "";
  const gmailAppPass = rawPass.trim().replace(/\s+/g, "");

  if (!gmailAppPass) return null;

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rajeev04632@gmail.com",
      pass: gmailAppPass,
    },
  });
}

/**
 * Sends:
 * 1. Branded luxury greeting to the client (data.email)
 * 2. Instant lead notification to rajeev04632@gmail.com
 */
export async function sendUserGreetingEmail(data: ContactNotificationData): Promise<boolean> {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      "[EMAIL NOTICE] GMAIL_APP_PASSWORD is empty in .env.local. Direct Gmail SMTP skipped."
    );
    return false;
  }

  try {
    // 1. Send personalized greeting to the client
    const userMail = await transporter.sendMail({
      from: '"CrestSoft Team" <rajeev04632@gmail.com>',
      to: data.email,
      replyTo: "rajeev04632@gmail.com",
      subject: `Warm Greetings from the CrestSoft Family! Thank you for choosing CrestSoft, ${data.name} ✨`,
      html: generateUserGreetingHtml(data),
    });
    console.log("Customer greeting email sent successfully:", userMail.messageId);

    // 2. Also send an instant alert email to rajeev04632@gmail.com
    await transporter.sendMail({
      from: '"CrestSoft Web Inquiries" <rajeev04632@gmail.com>',
      to: "rajeev04632@gmail.com",
      subject: `🔥 [New Inquiry] ${data.name} - ${data.service || "Project"} (${data.budget || "Budget"})`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #FCFAF6; color: #151515;">
          <h2 style="color: #E85D3F; margin-top: 0;">New Project Inquiry on CrestSoft</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Client Name:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Email Address:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.service || "Web Development"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Budget Range:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><strong>${data.budget || "Not specified"}</strong></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Message:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.message}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Studio:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">Sector 55, Phase 2, Gurugram, Haryana</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Submitted:</td><td style="padding: 8px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>
          </table>
        </div>
      `,
    });
    console.log("Admin lead notification dispatched to rajeev04632@gmail.com");

    return true;
  } catch (smtpErr) {
    console.error("Nodemailer Gmail SMTP error:", smtpErr);
    return false;
  }
}

/**
 * Sends career job application alerts directly to rajeev04632@gmail.com
 * and an acknowledgment email to the applicant.
 */
export async function sendJobApplicationEmail(data: JobApplicationData): Promise<boolean> {
  const transporter = getTransporter();

  if (!transporter) {
    return false;
  }

  try {
    // 1. Send alert to rajeev04632@gmail.com
    await transporter.sendMail({
      from: '"CrestSoft Careers" <rajeev04632@gmail.com>',
      to: "rajeev04632@gmail.com",
      subject: `💼 [Job Application] ${data.name} - ${data.role} (${data.experience || "Fresher - 4 Yrs"})`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #FCFAF6; color: #151515;">
          <h2 style="color: #E85D3F; margin-top: 0;">New Job Application Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Candidate Name:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Role:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><strong>${data.role}</strong></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Experience:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.experience || "0–1 Year"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Portfolio / GitHub:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><a href="${data.portfolio}">${data.portfolio || "Not provided"}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">LinkedIn:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;"><a href="${data.linkedin}">${data.linkedin || "Not provided"}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #E7DED3;">Cover Note:</td><td style="padding: 8px; border-bottom: 1px solid #E7DED3;">${data.coverNote || "None"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Submitted:</td><td style="padding: 8px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>
          </table>
        </div>
      `,
    });

    // 2. Acknowledge applicant
    await transporter.sendMail({
      from: '"CrestSoft Talent Team" <rajeev04632@gmail.com>',
      to: data.email,
      replyTo: "rajeev04632@gmail.com",
      subject: `Application Received: ${data.role} at CrestSoft`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #FCFAF6; color: #151515; max-width: 600px; margin: 0 auto; border: 1px solid #E7DED3; border-radius: 16px;">
          <h2 style="color: #151515;">Hi ${data.name},</h2>
          <p style="font-size: 15px; color: #4A4642; line-height: 1.6;">
            Thank you for applying for the <strong>${data.role}</strong> position at CrestSoft! We have received your application and project links.
          </p>
          <p style="font-size: 14px; color: #4A4642; line-height: 1.6;">
            Our engineering team in Sector 55, Phase 2, Gurugram, Haryana is reviewing applications on a rolling basis. If your profile matches our team requirements, our hiring desk will reach out to you within <strong>3-5 business days</strong> for a technical conversation.
          </p>
          <p style="font-size: 14px; color: #68645F; margin-top: 24px;">
            Best regards,<br>
            <strong>The CrestSoft Talent Team</strong><br>
            Sector 55, Phase 2, Gurugram, Haryana
          </p>
        </div>
      `,
    });

    return true;
  } catch (err) {
    console.error("Nodemailer apply email error:", err);
    return false;
  }
}

