"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] =
    useState<Awaited<ReturnType<typeof getProviders>>>(null);

  useEffect(() => {
    async function fetchProviders() {
      const providers = await getProviders();
      setProviders(providers);
    }
    fetchProviders().catch(console.error);
  }, []);

  return (
    <>
      {Object.values(providers ? providers : {}).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              void signIn(provider.id, {
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
