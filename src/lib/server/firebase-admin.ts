
import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  // If the app is already initialized, don't do it again
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    // The GOOGLE_APPLICATION_CREDENTIALS env var will be picked up automatically.
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
