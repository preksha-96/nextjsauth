// pages/api/auth/signup.js

import { getSession } from "next-auth/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { auth } from "@/app/firebase/config";

export default async function handler(
  req,
  res
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const session = await getSession({ req });

  if (session) {
    // User is already authenticated, so we redirect them to dashboard
    res.status(403).json({ error: "You are already signed in." });
    return;
  }

  if (req.method !== "POST") {
    // Only allow POST requests
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { email, password,firstname,lastname,phone } = req.body;

  try {
    // Create user account using Firebase Authentication
   const {user}= await createUserWithEmailAndPassword(auth, email, password);
   const db = getFirestore();
    const userRef = collection(db, "users");
    await addDoc(userRef, { uid: user.uid, email, firstname,lastname,phone });

    res.status(200).json({ success: true });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error signing up:', error.message);
    if (error.code === 'auth/email-already-in-use') {
        return res.status(400).json({ error: 'Email is already in use' });
      }
    return res.status(500).json({ error: 'Failed to create user account.' });
  }
}
