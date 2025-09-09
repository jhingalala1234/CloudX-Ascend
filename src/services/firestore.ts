
'use server';

import { db } from '@/lib/server/firebase-admin';

export async function saveRegistration(formData: {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  upiRefId: string;
  paymentScreenshot: string; // This will be a base64 string
}) {
  try {
    if (!db) {
        throw new Error('Firestore database is not initialized.');
    }

    const { paymentScreenshot, ...registrationData } = formData;
    
    // For now, we will just save the base64 string length.
    // In a real app, you would upload this to Firebase Storage and save the URL.
    const docRef = await db.collection('registrations').add({
      ...registrationData,
      paymentScreenshotInfo: `data:image/png;base64,... (length: ${paymentScreenshot.length})`,
      status: 'pending',
      createdAt: new Date(),
    });
    
    console.log('Registration saved with ID:', docRef.id);

  } catch (error) {
    console.error('Error saving registration to Firestore:', error);
    // In a real app, you would redirect to an error page or show a toast
    throw new Error('Failed to save registration.');
  }

  // No redirect here, it will be handled on the client
}
