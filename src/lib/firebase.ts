// Firebase configuration for AIKYAM 2K26
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_L2WFV1aBUVRPYLegNebeCrARoeIOhdc",
  authDomain: "amego-e1540.firebaseapp.com",
  projectId: "amego-e1540",
  storageBucket: "amego-e1540.firebasestorage.app",
  messagingSenderId: "202062295305",
  appId: "1:202062295305:web:69faa15e8d02b8d198a3d8",
  measurementId: "G-3NRTF5K1RT",
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Analytics (only in browser)
export const analytics =
  typeof window !== "undefined"
    ? isSupported().then((yes) => (yes ? getAnalytics(app) : null))
    : null;

export default app;
