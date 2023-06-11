import SignIn from '@/components/auth/SignIn'
import Nav, { type NavLink } from '@/components/header/Nav'

export default function Header() {
	const links: NavLink[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Courses', url: '/courses' }
	]
	return (
		<header className='sticky inset-x-0 top-2 z-50 mx-2 mb-2 flex h-14 items-center justify-around rounded-3xl bg-black'>
			<Nav links={links} />
			<SignIn />
		</header>
	)
}
