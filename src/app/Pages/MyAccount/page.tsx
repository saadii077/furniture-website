'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, useUser } from "@clerk/nextjs";

function MyAccount() {
  const { isSignedIn, user } = useUser();

  return (
    <>
      {/* Main Section */}
      <section className="bg-[#F6F5FF] h-[200px] md:h-[286px] flex items-center justify-center flex-col gap-2">
        <h1 className="text-[#101750] text-4xl font-bold">My Account</h1>
        <div className="flex items-center gap-1 text-sm font-medium">
          <Link href="/">Home</Link>
          <p>.</p>
          <p>Pages</p>
          <p>.</p>
          <p className="text-[#FB2E86]">My Account</p>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="bg-white flex items-center justify-center px-4 py-8">
        <div className="bg-white w-full max-w-md p-6 rounded-md shadow-md border border-gray-200 hover:shadow-blue-400">
          <h2 className="text-2xl font-bold text-[#151875] text-center mb-3">Login</h2>
          <p className="text-sm text-gray-400 text-center mb-4">
            Please login using account details below.
          </p>

          {isSignedIn ? (
            <p className="text-center text-lg font-semibold text-green-500">
              Welcome, {user?.firstName}!
            </p>
          ) : (
            <SignInButton mode="modal">
              <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition-colors">
                <Image src="/pages-images/google icon.png" alt="Google" width={20} height={20} className="mr-2" />
                Sign in with Google
              </button>
            </SignInButton>
          )}

          <div className="text-center mt-6 text-sm text-gray-500">
            Don’t have an Account?{' '}
            <Link href="/sign-up" className="text-[#FB2E86] hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
