
'use server';

import { randomUUID } from 'crypto';
import { getFirebaseAdmin } from '@/lib/server/firebase-admin';

interface RegistrationData {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  upiId: string;
  paymentScreenshot: {
    fileName: string;
    contentType: string;
    base64: string;
  };
}

export async function saveRegistration(data: RegistrationData) {
  try {
    const { firestore, storage } = getFirebaseAdmin();
    const bucket = storage.bucket();

    // 1. Upload the image to Firebase Storage
    const uniqueFileName = `${randomUUID()}-${data.paymentScreenshot.fileName}`;
    const file = bucket.file(`payment-screenshots/${uniqueFileName}`);
    
    const buffer = Buffer.from(data.paymentScreenshot.base64.split(',')[1], 'base64');

    await file.save(buffer, {
      metadata: {
        contentType: data.paymentScreenshot.contentType,
      },
    });
    
    // Make the file public and get its URL
    await file.makePublic();
    const publicUrl = file.publicUrl();

    // 2. Save the registration data to Firestore
    const registrationDoc = {
      name: data.name,
      registrationNumber: data.registrationNumber,
      email: data.email,
      phoneNumber: data.phoneNumber,
      upiId: data.upiId,
      paymentScreenshotUrl: publicUrl,
      status: 'pending_verification',
      createdAt: new Date(),
    };

    const docRef = await firestore.collection('registrations').add(registrationDoc);

    return { success: true, insertedId: docRef.id };
  } catch (e: any) {
    console.error('Detailed error saving to Firebase:', e);
    // Log the stack for more details
    if (e.stack) {
      console.error(e.stack);
    }
    throw new Error('Failed to save registration to Firebase.');
  }
}
