import Link from 'next/link'
import type { FC } from 'react'
import { type UrlObject } from 'url'

type NavLink = {
	title: string
	url: UrlObject | __next_route_internal_types__.RouteImpl<string>
}

type NavProps = {
	links: NavLink[]
}

const Nav: FC<NavProps> = ({ links }) => (
	<nav className='flex space-x-3'>
		{links.map(({ title, url }) => (
			<Link
				key={title}
				href={url}
				className='rounded-lg p-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900'
			>
				{title}
			</Link>
		))}
	</nav>
)

export type { NavLink }
export default Nav
