import { type Lesson } from '@/../typings'
// import { portableTextComponents } from '@/components/portableTextComponents'
import { clientFetch } from '@/sanity/lib/client'
// import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'

interface LessonsProps {
	params: { lessonSlug: string }
}

export default async function Lessons({
	params: { lessonSlug }
}: LessonsProps) {
	const query = groq`
  *[_type == "lesson" && slug.current == $slug] | order(_createdAt desc) {
    title, summary, content
  }[0]`

	const lesson: Lesson = await clientFetch(query, { slug: lessonSlug })

	// return <PortableText value={lesson.content} onMissingComponent={false} components={portableTextComponents} />
	return <pre>{JSON.stringify(lesson, null, 4)}</pre>
}
