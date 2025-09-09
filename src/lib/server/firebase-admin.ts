
import * as admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    // The type assertion is needed because the imported JSON
    // is not automatically recognized as a ServiceAccount type.
    const serviceAccountInfo = serviceAccount as admin.ServiceAccount;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountInfo),
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
