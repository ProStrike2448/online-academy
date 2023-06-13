import '@/styles/globals.css'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js'
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>

			<body>{children}</body>

		</html>
	)
}
