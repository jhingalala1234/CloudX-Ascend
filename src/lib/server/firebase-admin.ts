
'use server';
import * as admin from 'firebase-admin';

// This function ensures that Firebase Admin is initialized, but only once.
function initializeFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return;
  }

  try {
    const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountString) {
      throw new Error(
        'Firebase Admin SDK not initialized. Missing FIREBASE_SERVICE_ACCOUNT environment variable.'
      );
    }
    const serviceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (e: any) {
    console.error('Critical error initializing Firebase Admin SDK:', e.message);
    // We throw an error to make it clear that the server cannot function without this.
    throw new Error('Could not initialize Firebase Admin SDK. The server cannot start.');
  }
}

// Initialize the app immediately
initializeFirebaseAdmin();

// Export the initialized firestore instance
const db = admin.firestore();
export { db };
