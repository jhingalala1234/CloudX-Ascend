
'use server';

import { firestore, storage } from '@/lib/server/firebase-admin';

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
    // 1. Upload the image to Firebase Storage
    const { base64, contentType, fileName } = data.paymentScreenshot;
    
    // Remove the data URI prefix (e.g., 'data:image/jpeg;base64,')
    const base64Data = base64.split(';base64,').pop();
    if (!base64Data) {
      throw new Error('Invalid Base64 data for screenshot.');
    }

    const buffer = Buffer.from(base64Data, 'base64');
    const bucketName = `${process.env.FIREBASE_PROJECT_ID}.appspot.com`;
    const filePath = `screenshots/${Date.now()}-${data.registrationNumber}-${fileName}`;
    const file = storage.file(filePath);

    // Correctly await the file save operation
    await file.save(buffer, {
      metadata: {
        contentType: contentType,
      },
      public: true, // Make the file public upon upload
    });
    
    // Get the public URL
    const screenshotUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

    // 2. Save registration data to Firestore
    const registrationDoc = {
      name: data.name,
      registrationNumber: data.registrationNumber,
      email: data.email,
      phoneNumber: data.phoneNumber,
      upiId: data.upiId,
      screenshotUrl: screenshotUrl,
      createdAt: new Date(),
      status: 'pending_verification',
    };

    const docRef = await firestore.collection('registrations').add(registrationDoc);

    return { success: true, insertedId: docRef.id };
  } catch (error) {
    console.error('Error saving registration to Firebase:', error);
    // It's better to throw a more specific error or handle it,
    // but for now, we re-throw to let the client know something went wrong.
    throw new Error('Failed to save registration.');
  }
}
