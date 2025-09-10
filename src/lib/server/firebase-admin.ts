
import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  // If the app is already initialized, don't do it again
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not set.');
    }
    
    const serviceAccount = JSON.parse(serviceAccountJson);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    db = admin.firestore();
    console.log('Firebase Admin SDK initialized successfully.');

  } catch (e: any) {
    console.error('CRITICAL: Failed to initialize Firebase Admin SDK.', e.stack);
    // Throw to make it clear initialization failed.
    throw new Error('Could not initialize Firebase Admin SDK. The server cannot function without it.');
  }
}

// Initialize the app
initializeFirebaseAdmin();

// Export the initialized firestore instance
export { db };
