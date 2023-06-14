import { FiAward } from 'react-icons/fi'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'lesson',
	title: 'Lessons',
	icon: FiAward,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				slugify: input => input.toLowerCase().replace(/\s+/g, '-')
			},
			validation: Rule =>
				Rule.required().error(
					'A slug is required to generate a page on the website!'
				)
		}),
		defineField({
			name: 'summary',
			title: 'Summary',
			type: 'text',
			rows: 3,
			validation: Rule =>
				Rule.max(200).warning('Summary should be less than 200 characters')
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'portableText'
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})
