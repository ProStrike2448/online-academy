import SignIn from '@/components/auth/SignIn'
import Nav, { type NavLink } from '@/components/header/Nav'

export default function Header() {
	const links: NavLink[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Courses', url: '/courses' }
	]
	return (
		<header className="relative top-2 mx-4 lg:mx-8 z-10 flex h-14 items-center justify-around rounded-3xl bg-black">
			<Nav links={links} />
			<SignIn />
		</header>
	)
}
