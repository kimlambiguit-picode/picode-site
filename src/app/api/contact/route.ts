import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the payload for now
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company,
      type: body.type,
      message: body.message,
    });

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Send to a CRM
    // 4. Trigger a Slack/Teams notification

    return NextResponse.json(
      { success: true, message: 'Message received' },
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
