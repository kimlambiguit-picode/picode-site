import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function generateEmailHtml({ name, email, company, type, message }: {
  name: string;
  email: string;
  company?: string;
  type?: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f8fafc;">
  <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 24px; margin-bottom: 24px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #0f172a;">New ${type || 'Contact'} Request</h1>
      <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">Submitted via picode.com.au</p>
    </div>
    
    <div style="margin-bottom: 24px;">
      <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Contact Details</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-size: 14px; color: #64748b; width: 120px;">Name</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 14px; color: #64748b;">Email</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 500;">
            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
          </td>
        </tr>
        ${company ? `
        <tr>
          <td style="padding: 8px 0; font-size: 14px; color: #64748b;">Company</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${company}</td>
        </tr>
        ` : ''}
        ${type ? `
        <tr>
          <td style="padding: 8px 0; font-size: 14px; color: #64748b;">Request Type</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${type}</td>
        </tr>
        ` : ''}
      </table>
    </div>
    
    <div>
      <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</h2>
      <div style="background-color: #f8fafc; border-radius: 6px; padding: 16px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
    </div>
    
    <div style="margin-top: 32px; text-align: center;">
      <a href="mailto:${email}?subject=Re: Your inquiry to PiCode" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-size: 14px; font-weight: 500; padding: 12px 24px; border-radius: 6px; text-decoration: none;">Reply to ${name}</a>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 24px;">
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">This email was sent from the contact form at picode.com.au</p>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend lazily to avoid build-time errors
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const contactEmail = process.env.CONTACT_EMAIL || 'hello@picode.com.au';

    const body = await request.json();

    const { name, email, company, type, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use env var for from address, fallback to Resend test domain for development
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'PiCode <onboarding@resend.dev>';

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `New ${type || 'Contact'} Request from ${name}`,
      html: generateEmailHtml({
        name,
        email,
        company,
        type,
        message,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data?.id);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
