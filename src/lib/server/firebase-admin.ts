
import admin from 'firebase-admin';
import serviceAccount from './google-credentials.json';

let app: admin.app.App;

if (!admin.apps.length) {
  try {
    const privateKey = (serviceAccount as any).private_key.replace(/\\n/g, '\n');

    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey,
      }),
      storageBucket: `${serviceAccount.project_id}.appspot.com`,
    });
  } catch (e: any) {
    console.error('Firebase admin initialization error', e.stack);
    throw new Error('Failed to initialize Firebase Admin SDK.');
  }
} else {
  app = admin.app();
}

const firestore = admin.firestore(app);
const auth = admin.auth(app);
const storage = admin.storage(app).bucket();

export { app, firestore, auth, storage };
