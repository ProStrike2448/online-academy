import { type Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { type UrlObject } from 'url'

interface CourseCardProps {
	title: string
	slug: string
	image: UrlObject & string
	price: number
}

const CourseCard: React.FC<CourseCardProps> = ({ title, slug, image, price }) => {
	return (
		<div className='relative flex-col rounded-3xl border border-gray-200 shadow drop-shadow-2xl dark:border-gray-700 dark:bg-gray-800'>
			<Link href={`/courses/${slug}` as Route}>
				<div className='relative aspect-video w-full md:shrink-0'>
					<Image
						src={image}
						alt={`${title} image`}
						fill={true}
						className='rounded-t-3xl'
					/>
				</div>
			</Link>
			<div className='mt-4 px-5 pb-5'>
				<Link href={`/courses/${slug}` as Route}>
					<h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
				</Link>

				<div className='flex items-center justify-between pt-8'>
					<span className='text-3xl font-bold text-gray-900 dark:text-white'>
						{price} ₴
					</span>
					{price > 0 ? (
						<Link
							href='#'
							className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg hover:bg-blue-800 hover:delay-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Buy
						</Link>
					) : null}
				</div>
			</div>
		</div>
	)
}
export default CourseCard
