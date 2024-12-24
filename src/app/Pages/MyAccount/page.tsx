'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function MyAccount() {
  return (
    <>
      {/* Main Section */}
<section className="bg-[#F6F5FF] h-[200px] md:h-[286px]">
  <div className="container h-full items-center md:items-start flex justify-center gap-4 flex-col">
    <h1 className="text-[#101750] text-4xl font-bold">My Account</h1>
    <div className="flex items-center gap-1 font-medium">
      <Link href="/">Home</Link>
      <p>.</p>
      <p>Pages</p>
      <p>.</p>
      <p className="text-[#FB2E86]">My Account</p>
    </div>
  </div>
</section>

{/* Login Form Section */}
<section className="min-h-screen flex items-center justify-center bg-white px-4">
  <div className="bg-white w-full max-w-md mt-2 p-8 rounded-md shadow-md border border-slate-100 hover:shadow-blue-400">
    <h2 className="text-2xl font-bold text-[#151875] mb-3 text-center">Login</h2>
    <p className="text-slate-400 mb-4 text-center">
      Please login using account details below.
    </p>

    {/* Form */}
    <form>
      {/* Email Address */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-blue-900 mb-2"
        >
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-blue-900 mb-2"
        >
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
        />
      </div>

      {/* Forgot Password */}
      <div className="mb-4 text-left text-slate-400">
          Forgot your password?
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Sign In
      </button>
    </form>

    {/* Create Account */}
    <div className="text-center mt-6 text-slate-500">
      Don’t have an Account?{' '}
      <Link href="/Pages/MyAccount" className="text-[#FB2E86] hover:underline">
        Create account
      </Link>
    </div>
  </div>
</section>

      {/* Tagpic */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src="/tagpic.png"
          alt="tagpic"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default MyAccount;
