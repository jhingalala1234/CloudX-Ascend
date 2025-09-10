'use server';

import clientPromise from '@/lib/server/mongodb';
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
  try {
    const client = await clientPromise;
    const db = client.db('cloudx-events');
    const collection = db.collection('registrations');

    const result = await collection.insertOne({
      ...data,
      _id: randomUUID(),
      status: 'pending_verification',
      createdAt: new Date(),
    });

    return { success: true, insertedId: result.insertedId };
  } catch (e) {
    console.error('Failed to save registration:', e);
    // Throwing a generic error to the client to avoid leaking implementation details
    throw new Error('Failed to save registration.');
  }
}
