
import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  // The GOOGLE_APPLICATION_CREDENTIALS environment variable is the standard way
  // to provide credentials to Google Cloud services. The Firebase Admin SDK
  // automatically detects and uses it.
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    // This will automatically use the credentials from the path specified
    // in the GOOGLE_APPLICATION_CREDENTIALS environment variable.
    admin.initializeApp();
    
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
