'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import type { FC } from 'react'


const Profile: FC = ({}) => {
	const { data: session } = useSession()
	if (session)
		return (
			<div className='py-1'>
				<div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
					{session.user.name || ''}
				</div>
				<Link
					href='/profile'
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
				>
					Profile
				</Link>
				<button
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
					onClick={() => void signOut()}
				>
					Sign Out
				</button>
			</div>
		)
}
export default Profile
