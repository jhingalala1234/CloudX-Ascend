
import {initializeApp, getApps} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4y4gnUu2S8E76I_rX5Vw2klU19ZXTzJ8",
  authDomain: "cloudx-workshop-hub.firebaseapp.com",
  projectId: "cloudx-workshop-hub",
  storageBucket: "cloudx-workshop-hub.firebasestorage.app",
  messagingSenderId: "221735051368",
  appId: "1:221735051368:web:7e09bfd51b6f917cc15bdd"
};


// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export {app, db};
