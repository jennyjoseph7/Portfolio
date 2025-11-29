import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variable
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  // If SendGrid API key is not configured, log and skip sending
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured. Email sending is disabled.');
    return;
  }

  const recipientEmail = process.env.CONTACT_EMAIL || 'jennyjosephksj7@gmail.com';
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@portfolio.com';

  const msg = {
    to: recipientEmail,
    from: fromEmail,
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject}`,
    text: `
New message from your portfolio contact form:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from your portfolio website.
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Message
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
          <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This message was sent from your portfolio website contact form.</p>
          <p>You can reply directly to this email to respond to ${data.name}.</p>
        </div>
      </div>
    `.trim(),
  };

  try {
    await sgMail.send(msg);
    console.log(`Contact email sent successfully to ${recipientEmail}`);
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    throw new Error('Failed to send email');
  }
}

