import { getServerAuthSession } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export default async function SignIn() {
	const session = await getServerAuthSession()

	if (session) {
		return (
			<div className='relative'>
				{/* Avatar */}
				<div className='focus:ring-primary-500 flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50'>
					<span className='sr-only'>Open user menu</span>
					<div className='relative aspect-square h-12'>
						<Link href='/profile'>
							<Image
								src={session.user.image || ''}
								alt='Profile Picture'
								fill={true}
								priority={true}
								className='rounded-full object-cover'
							/>
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return (
		<Link className='btn-primary btn rounded-xl' href='/signin'>
			Sign in
		</Link>
	)
}
