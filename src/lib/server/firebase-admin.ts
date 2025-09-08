import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore;

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

if (serviceAccount) {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount)),
    });
  }
  db = admin.firestore();
} else {
  console.warn(
    'Firebase Admin SDK not initialized. Missing FIREBASE_SERVICE_ACCOUNT environment variable.'
  );
  // This is a dummy object to avoid crashing the app when db is used.
  // Functions will fail, but the app will run.
  db = {} as admin.firestore.Firestore;
}

export {db};
