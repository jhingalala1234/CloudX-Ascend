
'use server';

import { createMongoClient } from '@/lib/server/mongodb';
import { randomUUID } from 'crypto';

interface RegistrationData {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  upiId: string;
  paymentScreenshot: {
    fileName: string;
    fileType: string;
    fileSize: number;
    fileContent: string; // Base64 encoded file content
  };
}

export async function saveRegistration(data: RegistrationData) {
  const client = createMongoClient();
  
  try {
    await client.connect();
    const db = client.db(); 
    const collection = db.collection('registrations');

    // Do not save the large base64 content to MongoDB.
    // This can exceed the 16MB document limit.
    const { fileContent, ...screenshotMetadata } = data.paymentScreenshot;

    const registrationDocument = {
      _id: randomUUID(),
      status: 'pending_verification',
      createdAt: new Date(),
      name: data.name,
      registrationNumber: data.registrationNumber,
      email: data.email,
      phoneNumber: data.phoneNumber,
      upiId: data.upiId,
      paymentScreenshot: screenshotMetadata, // Save only metadata
    };

    const result = await collection.insertOne(registrationDocument);

    return { success: true, insertedId: result.insertedId };
  } catch (e: any) {
    console.error('Detailed error saving to MongoDB:', e);
    throw new Error('Failed to save registration.');
  } finally {
    // Ensure the client is closed after the operation is complete.
    await client.close();
  }
}
