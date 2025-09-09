
'use server';

import {db} from '@/lib/server/firebase-admin';
import {redirect} from 'next/navigation';

export async function saveRegistration(formData: {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  paymentScreenshot: string; // This will be a base64 string
}) {
  try {
    const { paymentScreenshot, ...registrationData } = formData;
    
    // For now, we will just save the base64 string length.
    // In a real app, you would upload this to Firebase Storage and save the URL.
    const docRef = await db.collection('registrations').add({
      ...registrationData,
      paymentScreenshotInfo: `data:image/png;base64,... (length: ${paymentScreenshot.length})`,
      status: 'pending',
      createdAt: new Date(),
    });
    
    // You could store the image in a subcollection if needed
    // await docRef.collection('uploads').add({
    //   paymentScreenshot,
    // });

  } catch (error) {
    console.error('Error saving registration to Firestore:', error);
    // In a real app, you would redirect to an error page or show a toast
    throw new Error('Failed to save registration.');
  }

  // Redirect to a success page after registration
  redirect('/success');
}
