'use client'

import { type Lesson } from '@/../typings'
import { type Route } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

interface LessonsListProps {
	lessons: Lesson[]
}

const LessonsList: FC<LessonsListProps> = ({ lessons }) => {
	const pathname = usePathname()
	return (
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
	)
}
export default LessonsList
