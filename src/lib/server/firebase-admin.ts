
'use server';

import admin from 'firebase-admin';

// This ensures we only initialize the app once
if (!admin.apps.length) {
  try {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (!privateKey) {
        throw new Error('The FIREBASE_PRIVATE_KEY environment variable is not set.');
    }
    
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private key can have newline characters that need to be parsed correctly
        privateKey: privateKey.replace(/\\n/g, '\n'),
      }),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error:', error.message);
    // Throw a more specific error to make debugging easier
    throw new Error('Failed to initialize Firebase Admin SDK. Please check your environment variables.');
  }
}

// Export the initialized services
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { firestore, auth, storage };
