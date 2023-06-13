import { clientFetch } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { type Lesson } from '@/../typings'

interface LessonsProps {
	params: { lessonSlug: string }
}

export default async function Lessons({
	params: { lessonSlug }
}: LessonsProps) {
	const query = groq`
  *[_type == "lesson" && slug.current == $slug] | order(_createdAt desc) {
    title, content
  }[0]`

	const lesson: Lesson = await clientFetch(query, { slug: lessonSlug })
  
	return <pre>{JSON.stringify(lesson, null, 4)}</pre>
}
