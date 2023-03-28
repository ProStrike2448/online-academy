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
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] flex items-center">
        <div className="container mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8">
          <section className="space-y-6">
            {Object.values(providers ? providers : {}).map((provider) => (
              <div key={provider.name}>
                <button
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          </section>
        </div>
      </div>
    </>
  );
}
