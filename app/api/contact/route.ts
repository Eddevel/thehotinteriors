import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebase'; // keep this if you still want to save to Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, projectType, budget, message } = data;

    // 1. Send Email to your Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"TheHotInterior Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // sends to your Gmail
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. (Optional) Still save to Firestore
    try {
      await addDoc(collection(db, 'inquiries'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'new',
      });
    } catch (firestoreError) {
      console.error('Firestore error:', firestoreError);
      // Don't fail the whole request if email already sent
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}