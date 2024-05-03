// pages/signup.js
"use client";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignupDesin = () => {
  return (
     <div className=" overflow-auto  flex items-center justify-center h-full">
      <div className="border rounded-xl ">

        <form className="    w-96  mx-10 my-4 ">
          <div className="mb-3">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Create Account
            </h2>
            <label htmlFor="email" className=" font-semibold  text-black">
              Name
            </label>
            <input
              type="text"
              id="firstname"
              className="leading-9
               w-full border  rounded  shadow-sm focus:border-blue-900	 focus:outline-none "
              placeholder=" First and Last name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="font-semibold  text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="leading-9
               w-full border  rounded  shadow-sm focus:border-blue-900	 focus:outline-none "
              placeholder=" Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-semibold  text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="leading-9
               w-full border  rounded  shadow-sm focus:border-blue-900 	 focus:outline-none "
              placeholder=" Password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-semibold  text-black">
              Re-enter Password
            </label>
            <input
              type="password"
              id="password"
              className="leading-9
               w-full border  rounded  shadow-sm focus:border-blue-900	 focus:outline-none "
              placeholder=" Re-enter Password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="font-semibold  text-black">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              placeholder=" Phone"
              className="leading-9
               w-full border  rounded  shadow-sm focus:border-blue-900	 focus:outline-none "
              required
            />
          </div>
          <button
            type="button"
            className=" mt-4  mb-1 font-semibold
            w-full   cursor-pointer bg-gradient-to-r border bg-red-500  rounded-xl text-white  px-2 py-2 "
          >
            Sign Up
          </button>
          <div className="mt-4 flex justify-center items-center align-middle">
            <span className="text-sm">or sign in using</span>
          </div>

          <button
            type="button"
            className=" mt-4  mb-1  flex justify-center items-center font-semibold
            w-full   bg-gradient-to-r border  rounded-xl text-black  px-2 py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-lg" />
            {"  "} <span className="">Continue with Google </span>
          </button>
          <button
            type="button"
            className=" mt-4 mb-4 flex justify-center items-center  font-semibold
            w-full  bg-gradient-to-r border  rounded-xl text-black  px-2 py-2 hover:bg-gray-100"
          >
            <FaFacebook className="text-blue-800 mr-2 text-lg" />{" "}
            <span className=""> Continue with Facebook</span>
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
