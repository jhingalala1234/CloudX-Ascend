
'use server';

import { firestore, storage } from '@/lib/server/firebase-admin';

export async function verifyAdmin({ username, password }: { username: string, password?: string }) {
  if (!password) {
    return { success: false };
  }

  const adminRef = firestore.collection('admins').doc(username);
  const doc = await adminRef.get();

  if (!doc.exists) {
    return { success: false };
  }

  const adminData = doc.data();
  // IMPORTANT: This is a simplified check. In a real-world app,
  // passwords should be hashed and compared securely.
  if (adminData?.password === password) {
    return { success: true };
  }

  return { success: false };
}

export async function getRegistrations() {
  // Removed .orderBy('createdAt', 'desc') to avoid needing a composite index.
  // The data will be unsorted from the server, but this prevents query failures.
  const registrationsRef = firestore.collection('registrations');
  const snapshot = await registrationsRef.get();
  
  if (snapshot.empty) {
    return [];
  }

  const registrations: any[] = [];
  snapshot.forEach(doc => {
    registrations.push({ id: doc.id, ...doc.data() });
  });
  
  return registrations;
}

export async function updateRegistrationStatus({ registrationId, status }: { registrationId: string, status: 'verified' | 'rejected' }) {
    if (!registrationId || !status) {
        throw new Error('Registration ID and status are required.');
    }

    const registrationRef = firestore.collection('registrations').doc(registrationId);

    await registrationRef.update({
        status: status
    });

    return { success: true };
}


export async function getScreenshotUrl({ path }: { path: string }) {
    if (!path) {
        throw new Error('A path is required to generate a signed URL.');
    }
    try {
        const file = storage.bucket().file(path);
        const [url] = await file.getSignedUrl({
            action: 'read',
            // URL expires in 15 minutes
            expires: Date.now() + 15 * 60 * 1000, 
        });
        return url;
    } catch (error) {
        console.error("Error generating signed URL on the server: ", error);
        throw new Error('Could not get screenshot URL.');
    }
}
