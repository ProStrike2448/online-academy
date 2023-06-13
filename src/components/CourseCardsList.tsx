import { type Course } from '@/../typings'
import CourseCard from '@/components/CourseCard'

interface CourseCardsListProps {
	cards: Course[]
}

const CourseCardsList: React.FC<CourseCardsListProps> = ({ cards }) => {
	return (
		<div className='mx-4 grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
