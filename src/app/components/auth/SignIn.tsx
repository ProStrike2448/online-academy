"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="relative">
        {/* Avatar */}
        <div className="focus:ring-primary-500 flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="sr-only">Open user menu</span>
          <div className="relative aspect-square h-12">
            <Link href="/profile">
              <Image
                src={session.user.image || ""}
                alt="Profile Picture"
                fill={true}
                priority={true}
                className="rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button className="btn-primary btn" onClick={() => void signIn()}>
      Sign in
    </button>
  );
}
