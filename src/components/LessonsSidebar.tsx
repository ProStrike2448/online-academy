'use client'
import { type Lesson } from '@/../typings'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { type Route } from 'next'

interface SidebarProps {
	lessons: Lesson[]
	className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ lessons }) => {
  const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	return (
		<nav className='flex flex-wrap items-center justify-between p-6'>
			<div className='flex flex-shrink-0 items-center text-white lg:mr-72'></div>
			<div className='block lg:hidden'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2'
				>
					<FaBars size={27} />
				</button>
			</div>
			<div
				className={`w-screen flex-col items-center justify-center ${
					isOpen ? 'flex' : 'hidden'
				}`}
			>
				<div className='relative block p-4 text-2xl font-semibold'>
					{lessons.map(({ _id, title, slug }) => (
						<Link
							key={_id}
							href={`${pathname}/${slug}` as Route} 
							className='text-white-200 mt-4 block lg:mt-0 lg:inline-block'
						>
							{title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Sidebar
