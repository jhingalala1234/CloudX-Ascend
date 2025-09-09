import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

function getServiceAccount() {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccount) {
    throw new Error(
      'Firebase Admin SDK not initialized. Missing FIREBASE_SERVICE_ACCOUNT environment variable.'
    );
  }
  try {
    return JSON.parse(serviceAccount);
  } catch (e) {
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', e);
    throw new Error('Could not parse FIREBASE_SERVICE_ACCOUNT.');
  }
}

if (!admin.apps.length) {
  try {
    const serviceAccount = getServiceAccount();
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (e) {
    console.error('Critical error initializing Firebase Admin SDK:', e);
  }
}

const db = admin.firestore();
export { db };
