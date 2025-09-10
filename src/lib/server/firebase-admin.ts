
import * as admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

let firebaseAdmin: admin.app.App | null = null;

function initializeFirebaseAdmin() {
  if (firebaseAdmin) {
    return firebaseAdmin;
  }

  try {
    // The service account is imported directly from the JSON file.
    // The `privateKey` needs to have its newlines properly escaped.
    const privateKey = serviceAccount.private_key.replace(/\\n/g, '\n');

    const credential = admin.credential.cert({
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      privateKey: privateKey,
    });
    
    // Check if the app is already initialized
    if (admin.apps.length === 0) {
      firebaseAdmin = admin.initializeApp({
        credential,
        storageBucket: `${serviceAccount.project_id}.appspot.com`,
      });
    } else {
      firebaseAdmin = admin.app();
    }
    
    return firebaseAdmin;
  } catch (e: any) {
    console.error('CRITICAL: Failed to initialize Firebase Admin SDK.', e.stack);
    throw new Error(
      'Could not initialize Firebase Admin SDK. The server cannot function without it.'
    );
  }
}

// Initialize and export services
const app = initializeFirebaseAdmin();
const firestore = app.firestore();
const auth = app.auth();
const storage = app.storage();

export function getFirebaseAdmin() {
    return { app, firestore, auth, storage };
}
