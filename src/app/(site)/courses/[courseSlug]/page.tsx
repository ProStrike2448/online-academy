import { type Course } from '@/../typings'
import LessonsSidebar from '@/components/LessonsSidebar'
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
    lessons[]->{_id, title, "slug": slug.current},
    teachers[]->{_id, name, "slug": slug.current, "photo": photo.asset->url},
  }[0]`

	const course: Course = await clientFetch(query, { slug: courseSlug })

	console.log(course)

	return (
		<>
			<pre>{JSON.stringify(course, null, 4)}</pre>
			<LessonsSidebar lessons={course.lessons} />
		</>
	)
}
