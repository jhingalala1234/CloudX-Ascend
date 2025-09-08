'use server';

import {db} from '@/lib/server/firebase-admin';
import {redirect} from 'next/navigation';

export async function saveRegistration(formData: {
  name: string;
  email: string;
}) {
  try {
    await db.collection('registrations').add({
      ...formData,
      status: 'pending',
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error saving registration to Firestore:', error);
    // Optionally, you can re-throw the error or handle it as needed
    throw new Error('Failed to save registration.');
  }

  redirect('https://razorpay.me/pl/M2FFrP5P7l9KxN/view');
}
