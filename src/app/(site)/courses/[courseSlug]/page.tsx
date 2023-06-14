import { type Course } from '@/../typings'
import LessonsList from '@/components/LessonsList'
import { clientFetch } from '@/sanity/lib/client'
import { type Route } from 'next'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

interface CourseProps {
	params: { courseSlug: string }
}

export default async function Course({ params: { courseSlug } }: CourseProps) {
	const query = groq`
  *[_type == "course" && slug.current == $slug] | order(_createdAt desc) {
    title,
    "image": image.asset->url,
    description,
    lessons[]->{_id, title, "slug": slug.current},
    teachers[]->{_id, name, "slug": slug.current, "photo": photo.asset->url},
  }[0]`

	const course: Course = await clientFetch(query, { slug: courseSlug })

	console.log(course)

	return (
		<div className='mt-16 px-16'>
			<div className='mt-14 flex w-full justify-between bg-black/25 px-8 py-4'>
				<div className='relative h-48 w-96'>
					<Image
						className='object-cover'
						src={course?.image}
						alt='Photo of cource'
						fill
					/>
				</div>
				<div className='w-[60%] bg-white/10'>
					<p className='text-2xl font-bold text-white'>{course?.title}</p>
					<p className='mt-2 text-base text-white'>
						{course.description ??
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
					</p>
          <div className='justify-evenly -space-x-2 overflow-hidden'>
				{course.teachers.map(({ _id, photo, slug, name }) => (
					<div className='w-60 mt-8 justify-center bg-black' key={_id}>
						<Link
							className='absolute h-10 w-10'
							key={_id}
							href={`/teachers/${slug}` as Route}
						>
							<Image
								className='inline-block rounded-full object-cover ring-2 ring-white'
								src={photo}
								fill
								alt={`Photo of ${name}`}
							/>
						</Link>
					</div>
				))}
			</div>
				</div>
			</div>
        <LessonsList lessons={course.lessons}/>
			{/* <aside className='h-full w-[1fr]'></aside> */}
			{/* <LessonsSidebar lessons={course.lessons} /> */}
		</div>
	)
}
