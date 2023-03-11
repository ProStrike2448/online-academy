"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <button onClick={() => void signOut()}>Sign Out</button>
      </>
    );
  }

  return <button onClick={() => void signIn()}>Sign in</button>;
}
