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

/**
 * Sends the personalized greeting email directly to the user
 * from rajeev04632@gmail.com.
 * Uses Nodemailer if GMAIL_APP_PASSWORD is set, or returns graceful status.
 */
export async function sendUserGreetingEmail(data: ContactNotificationData): Promise<boolean> {
  const gmailAppPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

  if (gmailAppPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "rajeev04632@gmail.com",
          pass: gmailAppPass,
        },
      });

      const mailOptions = {
        from: '"CrestSoft Team" <rajeev04632@gmail.com>',
        to: data.email,
        replyTo: "rajeev04632@gmail.com",
        subject: `Warm Greetings from the CrestSoft Family! Thank you for choosing CrestSoft, ${data.name} ✨`,
        html: generateUserGreetingHtml(data),
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Greeting email successfully sent via Gmail SMTP:", info.messageId);
      return true;
    } catch (smtpErr) {
      console.error("Nodemailer Gmail SMTP error:", smtpErr);
      return false;
    }
  } else {
    console.log(
      "GMAIL_APP_PASSWORD not set. Greeting email rendered and prepared for user:",
      data.email
    );
    return false;
  }
}
