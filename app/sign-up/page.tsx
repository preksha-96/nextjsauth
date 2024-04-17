// pages/signup.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useSession } from "next-auth/react";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { data: session } = useSession(); // Get session data from NextAuth.js
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrmsg, setEmailErrmsg] = useState("");

  const [password, setPassword] = useState("");
  const [createUserWithEmailpwd] = useCreateUserWithEmailAndPassword(auth);
  const handleSignup = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      router.push("/dashboard"); // Redirect to dashboard on successful signup
    } else {
      const data = await response.json();
      console.log(data);
      setEmailErrmsg(data.error); // Set error message received from API response
    }
  };

  if (session) {
    router.push("/");
    return null;
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center bg-gray-900 ">
      <form className="bg-gradient-to-r to-purple-500 from-pink-500 p-10 rounded-lg shadow-xl w-96">
        <div className="mb-4">
          <h2 className="text-2xl text-white font-semibold mb-4">Sign Up</h2>

          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" leading-9 
            mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 leading-9  block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={() => {
            handleSignup(email, password);
          }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
        {emailErrmsg ?? (
          <div
            role="alert"
            className="alert alert-error mt-2 text-white
"
          >
            {emailErrmsg}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
