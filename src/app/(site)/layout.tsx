import AuthProvider from './AuthProvider'

import '@/styles/globals.css'
import Header from './Header'

interface RootLayoutProps {
	children: React.ReactNode
	modal: React.ReactNode
}

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
	modal
}: RootLayoutProps) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body>
					<Header />
					{modal}
					{children}
				</body>
			</AuthProvider>
		</html>
	)
}
