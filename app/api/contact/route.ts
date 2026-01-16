import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, company, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!BREVO_API_KEY) {
            console.error('BREVO_API_KEY is not defined in environment variables');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        // 1. Send Notification Email to Admin (Lumora Triad)
        const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY as string,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'Lumora Website', email: 'lumoratraid@gmail.com' },
                to: [{ email: 'lumoratraid@gmail.com', name: 'Lumora Triad Team' }],
                subject: `New Inquiry from ${name}`,
                htmlContent: `
          <h1>New Website Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interested:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
            })
        });

        const adminData = await adminResponse.json();
        if (!adminResponse.ok) {
            console.error('Brevo Admin Email Error:', adminData);
            throw new Error(`Admin email failed: ${JSON.stringify(adminData)}`);
        }

        // 2. Send Auto-Reply to User
        const userResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY as string,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'Lumora Triad', email: 'lumoratraid@gmail.com' },
                to: [{ email: email, name: name }],
                subject: 'Thank you for contacting Lumora Triad',
                htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6d28d9;">Hello ${name},</h2>
            <p>Thank you for reaching out to <strong>Lumora Triad</strong>.</p>
            <p>We have received your message regarding <strong>${service}</strong> and our team is already reviewing it.</p>
            <p>We typically reply within 24 hours to schedule a consultation or discuss your project in detail.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>The Lumora Triad Team</strong></p>
            <p><a href="https://www.lumoratriad.in" style="color: #6d28d9;">www.lumoratriad.in</a></p>
          </div>
        `
            })
        });

        const userData = await userResponse.json();
        if (!userResponse.ok) {
            console.error('Brevo User Email Error:', userData);
            // Note: we don't throw here so at least the admin email went through
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
