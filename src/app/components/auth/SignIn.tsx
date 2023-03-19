"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="relative h-12 w-12">
          <Image
            src={session.user.image || ""}
            alt="Profile Picture"
            fill={true}
            priority={true}
            className="rounded-full object-cover"
          />
        </div>
        <h2>{session.user.name || ""}</h2>
        <button onClick={() => void signOut()}>Sign Out</button>
      </>
    );
  }

  return <button onClick={() => void signIn()}>Sign in</button>;
}
