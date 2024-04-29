// pages/signup.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useSession } from "next-auth/react";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("" || String);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = useSession(); // Get session data from NextAuth.js
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrmsg, setEmailErrmsg] = useState("");

  const [createUserWithEmailpwd] = useCreateUserWithEmailAndPassword(auth);
  const handleSignup = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstname, lastname, phone }),
    });
    if (response.ok) {
      router.push("/dashboard"); // Redirect to dashboard on successful signup
    } else {
      const data = await response.json();
      console.log(data);
      setEmailErrmsg(data.error); // Set error message received from API response
    }
  };
  const handleKiboCall = async (email: "", password: "") => {
    const response = await fetch("/api/auth/customerAccount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstname, lastname, phone }),
    });
    if (response.ok) {
      console.log(response);
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
    <div className="min-h-screen  flex items-center justify-center">
    <div>
    <form className="p-5 rounded-lg shadow-xl w-96 border border-gray-500  ">
        <div className="mb-1">
          <h2 className="text-2xl text-black font-semibold mb-4">
            Create Account
          </h2>
          <label htmlFor="email" className=" font-bold text-sm text-black">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder=" First and Last name"
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="font-bold text-sm text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="font-bold text-sm text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="font-bold text-sm text-black">
            Re-enter Password
          </label>
          <input
            type="password"
            id="password"
            className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
            placeholder=" Re-enter Passwor"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-bold text-sm text-black">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            placeholder=" Phone"
            className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={() => {
            handleKiboCall(email, password);
          }}
          className=" mt-4 
       w-full  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300   px-2 py-1.5 "
        >
          Sign Up
        </button>
        <p className="font-light text-xs	">
          By creating an account, you agree to organization's{" "}
          <span className="text-cyan-600">Conditions of Use</span>
          and <span className="text-cyan-600"> Privacy Notice </span>.
        </p>
      </form>
      <div></div>
    </div>
    </div>
  );
};

export default Signup;
