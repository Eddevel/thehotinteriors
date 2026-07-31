import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await addDoc(collection(db, 'inquiries'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
  }
}