
'use server';

import { firestore } from '@/lib/server/firebase-admin';

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
  const registrationsRef = firestore.collection('registrations').orderBy('createdAt', 'desc');
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
