import { FiUser } from 'react-icons/fi'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'teacher',
	title: 'Teachers',
	icon: FiUser,
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
				slugify: input => input.toLowerCase().replace(/\s+/g, '-')
			},
			validation: Rule =>
				Rule.required().error(
					'A slug is required to generate a page on the website!'
				)
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
			rows: 3,
			validation: Rule =>
				Rule.max(200).warning('Bio should be less than 200 characters')
		}),
		defineField({
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: { hotspot: true },
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			name: 'name',
			bio: 'bio',
			photo: 'photo'
		}
	}
})
