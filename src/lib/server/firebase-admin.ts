import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

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

try {
  const serviceAccount = getServiceAccount();
  if (serviceAccount) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log('Firebase Admin SDK initialized successfully.');
    }
    db = admin.firestore();
  } else {
    db = {} as admin.firestore.Firestore;
    console.log('Using dummy Firestore object because service account is not available.');
  }
} catch (e) {
    console.error('Critical error initializing Firebase Admin SDK:', e);
    db = {} as admin.firestore.Firestore;
}


export {db};
