import Image from 'next/image'
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
					<div className='fixed -z-10 h-[100vh] w-[100vw] overflow-hidden'>
						<Image
							src={'/stacked-waves-haikei.svg'}
							fill
              quality={100}
							alt='flatbg'
							className='object-cover brightness-50'
						/>
					</div>
					<Header />
					{modal}
					{children}
				</body>
			</AuthProvider>
		</html>
	)
}
