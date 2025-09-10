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
    const db = client.db(); // dbName is now inferred from the connection options
    const collection = db.collection('registrations');

    const result = await collection.insertOne({
      ...data,
      _id: randomUUID(),
      status: 'pending_verification',
      createdAt: new Date(),
    });

    return { success: true, insertedId: result.insertedId };
  } catch (e: any) {
    // Log the detailed error on the server for diagnostics
    console.error('Detailed error saving to MongoDB:', e);
    // Throw a generic error to the client to avoid leaking implementation details
    throw new Error('Failed to save registration.');
  }
}
