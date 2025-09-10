
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
    const { base64, contentType, fileName } = data.paymentScreenshot;
    
    const base64Data = base64.split(';base64,').pop();
    if (!base64Data) {
      throw new Error('Invalid Base64 data for screenshot.');
    }

    const buffer = Buffer.from(base64Data, 'base64');
    const filePath = `screenshots/${Date.now()}-${data.registrationNumber}-${fileName}`;
    const file = storage.file(filePath);

    await file.save(buffer, {
      metadata: {
        contentType: contentType,
      },
      public: true,
    });
    
    const screenshotUrl = `https://storage.googleapis.com/${storage.name}/${filePath}`;

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
    throw new Error('Failed to save registration.');
  }
}
