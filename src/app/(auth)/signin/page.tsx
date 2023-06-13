'use client'

import { getProviders, signIn } from 'next-auth/react'

export default async function SignIn() {
	const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
	const providers = await getProviders()

	return (
		<>
			<div className='flex min-h-screen items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
				<div className='container mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8'>
					<section className='space-y-6'>
						{Object.values(providers ? providers : {}).map(provider => (
							<div key={provider.name}>
								<button
									className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									onClick={() =>
										void signIn(provider.id, { callbackUrl: baseUrl})
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
	)
}
