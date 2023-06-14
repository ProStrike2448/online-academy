import { type Course } from '@/../typings'
import { clientFetch } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

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
		<div className='grid lg:grid-cols-4'>
      <aside className='w-[1fr] h-full'></aside>
			{/* <div className='flex -space-x-2 overflow-hidden'>
				{course.teachers.map(({ _id, photo, slug, name}) => (
					<Link className='absolute h-10 w-10' key={_id} href={`/teachers/${slug}` as Route}>
						<Image
							className='object-cover rounded-full ring-2 ring-white inline-block'
							src={photo}
              fill
							alt={`Photo of ${name}`}
						/>
					</Link>
				))}
			</div> */}

			{/* <LessonsSidebar lessons={course.lessons} /> */}
		</div>
	)
}
