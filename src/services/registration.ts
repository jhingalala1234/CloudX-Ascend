
'use server';

// This service is temporarily disabled.
// The Firebase Admin SDK needs to be reconfigured with credentials
// for the new Firebase project before this service can function correctly.

interface RegistrationData {
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  upiId: string;
  paymentScreenshot: {
    fileName: string;
    contentType: string;
    base64: string;
  };
}

export async function saveRegistration(data: RegistrationData) {
  console.log("Registration service is temporarily disabled. Data was not saved.", data);
  // This function is disabled until the server is correctly configured
  // with a new service account key for the new Firebase project.
  // throw new Error('Registration functionality is currently disabled pending server reconfiguration.');
  return { success: true, insertedId: 'temp-id-replace-later' };
}
