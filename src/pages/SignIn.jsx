import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white mt-10  h-[cal(100vh-56px)]">
      <div className="flex flex-col items-center border border-[#373737] rounded-lg py-5 px-[50px] gap-3 bg-[#202020]">
        <h1 className="text-2xl">Sign In</h1>
        <h2 className="font-normal text-xl">To continue to Channel</h2>
        <input
          placeholder="username"
          className="bg-transparent w-full p-[10px] rounded border border-[#373737] outline-none"
        />
        <input
          placeholder="password"
          type="password"
          className="bg-transparent w-full p-[10px] rounded border border-[#373737] outline-none"
        />
        <button className="border-none w-4/5 rounded bg-[#373737] py-[10px] px-5 font-medium text-[#aaaaaa] cursor-pointer ">
          Sign In
        </button>
        <h1>Or</h1>
        <input
          placeholder="username"
          className="bg-transparent w-full p-[10px] rounded border border-[#373737] outline-none"
        />
        <input
          placeholder="email"
          type="email"
          className="bg-transparent w-full p-[10px] rounded border border-[#373737] outline-none"
        />
        <input
          placeholder="password"
          type="password"
          className="bg-transparent w-full p-[10px] rounded border border-[#373737] outline-none"
        />
        <button className="border-none w-4/5 rounded bg-[#373737] py-[10px] px-5 font-medium text-[#aaaaaa] cursor-pointer ">
          Sign up
        </button>
      </div>
      <div className="flex mt-[10px] text-[12px] text-[#aaaaaa]">
        English(USA)
        <div className="flex ml-[50px] gap-2">
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
