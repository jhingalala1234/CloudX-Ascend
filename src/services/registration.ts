
'use server';

import { firestore } from '@/lib/server/firebase-admin';

interface RegistrationData {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  upiId: string;
  screenshotUrl: string;
}

export async function saveRegistration(data: RegistrationData) {
  try {
    const registrationDoc = {
      name: data.name,
      registrationNumber: data.registrationNumber,
      email: data.email,
      phoneNumber: data.phoneNumber,
      upiId: data.upiId,
      screenshotUrl: data.screenshotUrl, // We now receive the direct download URL
      createdAt: new Date(),
      status: 'pending_verification',
    };

    const docRef = await firestore.collection('registrations').add(registrationDoc);

    return { success: true, insertedId: docRef.id };
  } catch (error) {
    console.error('Error saving registration to Firebase:', error);
    // Re-throw the original error to get a detailed stack trace on the client.
    throw error;
  }
}
