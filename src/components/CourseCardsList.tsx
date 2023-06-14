import { type Course } from '@/../typings'
import CourseCard from '@/components/CourseCard'

interface CourseCardsListProps {
	cards: Course[]
}

const CourseCardsList: React.FC<CourseCardsListProps> = ({ cards }) => {
	return (
		<div className='m-8 grid grid-flow-row gap-8 text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
			{cards.map(card => (
				<CourseCard
					key={card._id}
					title={card.title}
					slug={card.slug}
					image={card.image}
					price={card.price}
				/>
			))}
		</div>
	)
}

export default CourseCardsList
