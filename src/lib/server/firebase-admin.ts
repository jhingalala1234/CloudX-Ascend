
import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountString) {
      console.error('FIREBASE_SERVICE_ACCOUNT environment variable is not set.');
      throw new Error('Firebase Admin SDK not initialized.');
    }

    // The environment variable should be a JSON string. We parse it here.
    const serviceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    console.log('Firebase Admin SDK initialized successfully.');
    db = admin.firestore();

  } catch (e: any) {
    console.error('CRITICAL: Failed to initialize Firebase Admin SDK.', e.stack);
    // In a real production environment, you might want to have a fallback or a more graceful shutdown.
    // For this context, we will throw to make it clear initialization failed.
    throw new Error('Could not initialize Firebase Admin SDK. The server cannot function without it.');
  }
}

// Initialize the app
initializeFirebaseAdmin();

// Export the initialized firestore instance
export { db };
