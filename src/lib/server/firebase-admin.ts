
import * as admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  // If the app is already initialized, don't do it again
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return;
  }

  try {
    // The type assertion is necessary because the JSON import doesn't match the expected type perfectly.
    const serviceAccountParams = {
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key,
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountParams)
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
