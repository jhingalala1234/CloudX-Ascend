
import admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

// This check prevents the app from being initialized multiple times
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // We pass the entire service account object to `cert`.
      // The `private_key` is explicitly corrected to handle the newline characters.
      credential: admin.credential.cert({
        ...serviceAccount,
        private_key: serviceAccount.private_key.replace(/\\n/g, '\n'),
      }),
      storageBucket: `${serviceAccount.project_id}.appspot.com`,
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error', error.stack);
    throw new Error('Failed to initialize Firebase Admin SDK.');
  }
}

// Export the initialized services
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage().bucket();

export { firestore, auth, storage };
