import Profile from '@/components/header/Profile'
import Modal from '@/components/modals/modal'

export default function ProfileModal() {
	return (
		<Modal>
			<div className='flex justify-center items-center w-48 h-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
				<Profile />
			</div>
		</Modal>
	)
}
