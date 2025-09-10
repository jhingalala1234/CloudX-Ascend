
import admin from 'firebase-admin';

// This check prevents the app from being initialized multiple times
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error', error.stack);
    throw new Error('Failed to initialize Firebase Admin SDK.');
  }
}

// Export the initialized services
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage().bucket();

export { firestore, auth, storage };
