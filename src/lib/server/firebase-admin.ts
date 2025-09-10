
'use server';

import * as admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

let db: admin.firestore.Firestore;

function initializeFirebaseAdmin() {
  // If the app is already initialized, don't do it again
  if (admin.apps.length > 0) {
    if (!db) {
      db = admin.firestore();
    }
    return;
  }

  try {
    // Correctly format the private key by replacing the literal `\n` with actual newlines.
    // This is the most common cause of initialization failures.
    const privateKey = serviceAccount.private_key.replace(/\\n/g, '\n');

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: privateKey,
      }),
    });

    db = admin.firestore();
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (e: any) {
    console.error(
      'CRITICAL: Failed to initialize Firebase Admin SDK.',
      e.stack
    );
    // Throw to make it clear initialization failed.
    throw new Error(
      'Could not initialize Firebase Admin SDK. The server cannot function without it.'
    );
  }
}

// Initialize the app when this module is first loaded
initializeFirebaseAdmin();

// Export the initialized firestore instance
export { db };
