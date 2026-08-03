import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, fullName, email, message, company, selectedService, budget, timeline, details } = data;

    // Validate required fields based on type
    if (type === 'contact') {
      if (!fullName || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
    } else if (type === 'hire') {
      if (!fullName || !email || !details) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Configure nodemailer with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions;

    if (type === 'contact') {
      mailOptions = {
        from: `"${fullName}" <${process.env.SMTP_USER}>`, 
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Portfolio] New Contact Message from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      };
    } else {
      mailOptions = {
        from: `"${fullName}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Portfolio] New Project Inquiry from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${selectedService}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject Details:\n${details}`,
        html: `
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service Requested:</strong> ${selectedService}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Project Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</p>
        `,
      };
    }

    // Gửi email 
    // Comment giải thích: transporter.sendMail sẽ dùng thông tin SMTP config bên trên để gửi mail đi. Hàm này chạy bất đồng bộ (async).
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
