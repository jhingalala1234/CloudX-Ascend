'use server';

import * as admin from 'firebase-admin';

// This function ensures that the environment variable is loaded.
function getServiceAccount() {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccount) {
    console.warn(
      'Firebase Admin SDK not initialized. Missing FIREBASE_SERVICE_ACCOUNT environment variable.'
    );
    return null;
  }
  try {
    return JSON.parse(serviceAccount);
  } catch (e) {
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', e);
    return null;
  }
}

let db: admin.firestore.Firestore;

const serviceAccountConfig = getServiceAccount();

if (serviceAccountConfig) {
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountConfig),
      });
      console.log('Firebase Admin SDK initialized successfully.');
    } catch (e) {
      console.error('Error initializing Firebase Admin SDK:', e);
    }
  }
  db = admin.firestore();
} else {
  // This is a dummy object to avoid crashing the app when db is used.
  // Functions will fail, but the app will run.
  db = {} as admin.firestore.Firestore;
  console.log('Using dummy Firestore object.');
}


export {db};