import SignIn from '@/components/auth/SignIn'
import Nav, { type NavLink } from '@/components/header/Nav'

export default function Header() {
	const links: NavLink[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Courses', url: '/courses' }
	]
	return (
		<header className="sticky top-2 z-50 mx-8 flex h-14 items-center justify-around rounded-3xl border border-gray-500 drop-shadow-2xl dark:border-gray-800 dark:bg-gray-900">
			<Nav links={links} />
			<SignIn />
		</header>
	)
}
