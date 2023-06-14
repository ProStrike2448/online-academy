import CourseCardsList from '@/components/CourseCardsList'
import PreviewSuspense from '@/components/PreviewSuspense'
import { clientFetch } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { draftMode } from 'next/headers'
import { type Course } from '@/../typings'

const query = groq`
  *[_type == "course"] | order(_createdAt desc) {
    "id": _id,
    title, 
    "slug": slug.current,
    "image": image.asset->url,
    price
  } `

export default async function Courses() {
	if (draftMode().isEnabled) {
		return (
			<PreviewSuspense fallback='Loading...'>
				<div>Prevew Mode</div>
			</PreviewSuspense>
		)
	}
  
	const courses: Course[] = await clientFetch(query)

	return <CourseCardsList cards={courses} />
}
