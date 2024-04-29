// pages/signup.js
"use client";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupDesin = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div>
        <form className="p-5  rounded-lg shadow-xl w-96 border border-gray-200  ">
          <div className="mb-1">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Create Account
            </h2>
            <label htmlFor="email" className=" font-bold text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="firstname"
              className="leading-7
         w-full border border-gray-300 rounded-sm shadow-sm focus:border-blue-500	 focus:outline-none text-sm"
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
              placeholder=" Re-enter Password"
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
              required
            />
          </div>
          <button
            type="button"
            className=" mt-4 
       w-full  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300   px-2 py-1.5 "
          >
            Sign Up
          </button>
          <div className="py-2 flex justify-center items-center align-middle">
            -------------------<span className="text-sm">Or With</span>
            -------------------
          </div>
          <button
            type="button"
            className=" 
       w-full  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300   px-2 py-1.5 "
          >
            <FontAwesomeIcon className="text-blue-800 h-15" icon={faFacebook} />{" "}
            <span className="text-white"> Sign up with Facebook</span>
          </button>
          <button
            type="button"
            className=" mt-4  mb-1
       w-full   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300   px-2 py-1.5 "
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="text h-15 text-yellow-300
            "
            />{" "}
            <span className="text-white">Sign up with Google </span>
          </button>

          <p className="font-light text-xs	text-center mt-2 px-2 mb-4 ">
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
export default SignupDesin;
