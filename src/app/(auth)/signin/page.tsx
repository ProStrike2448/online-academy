"use client";

import { signIn } from "next-auth/react";

export default function SignInPage(){
  return (<button onClick={() => void signIn("discord", { callbackUrl: 'http://localhost:3000/'})}>Sign in with Discord</button>)
}