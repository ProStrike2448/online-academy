'use client'

import { signOut, useSession } from 'next-auth/react'
import type { FC } from 'react'


const Profile: FC = ({}) => {
	const { data: session } = useSession()
	if (session)
		return (
			<div className='flex flex-col text-center py-1'>
				<div className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100'>
					{session.user.name || ''}
				</div>
				<button
					className='block px-4 py-2 text-md font-semibold text-red-700 hover:bg-gray-100'
					onClick={() => void signOut()}
				>
					Sign Out
				</button>
			</div>
		)
}
export default Profile
