import Image from 'next/image'
import AuthProvider from './AuthProvider'

import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from './Header'

interface RootLayoutProps {
	children: React.ReactNode
	modal: React.ReactNode
}

export const metadata: Metadata = {
	title: { template: '%s | SEMI Academy', default: 'SEMI Academy' },
	description: 'Online Courses for the Modern Developer',
	generator: 'Next.js',
	applicationName: 'SEMI Academy',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Next.js',
		'React',
		'TypeScript',
		'NextAuth.js',
		'Supabase',
		'Prisma',
		'Tailwind CSS',
		'Sanity'
	],
	authors: [
		{ name: 'Valerii' },
		{ name: 'Andrii', url: 'https://github.com/ProStrike2448' }
	],
	colorScheme: 'dark',
	creator: 'Andrii Ostapenko',
	publisher: 'Andrii Ostapenko',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	metadataBase: new URL('https://semi-academy.vercel.app'),
	alternates: {
		canonical: '/'
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'purple' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1
	},
	category: 'technology'
}

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
	modal
}: RootLayoutProps) {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>
					<div className='fixed -z-10 h-screen w-screen'>
						<Image
							src={'/stacked-waves-haikei.svg'}
							fill
							quality={100}
							alt='flatbg'
							className='object-cover brightness-[.75]'
						/>
					</div>
					<Header />
					{modal}
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}
