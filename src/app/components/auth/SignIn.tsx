"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="relative">
        {/* Avatar */}
        <button className="focus:ring-primary-500 flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="sr-only">Open user menu</span>
          <div className="relative aspect-square h-12">
            <Image
              src={session.user.image || ""}
              alt="Profile Picture"
              fill={true}
              priority={true}
              className="rounded-full object-cover"
            />
          </div>
        </button>

        {/* User Dropdown List */}
        <div className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {session.user.name || ""}
            </div>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => void signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <button className="btn btn-primary" onClick={() => void signIn()}>Sign in</button>;
}
