import { FiAward, FiImage, FiUsers } from 'react-icons/fi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'course',
	title: 'Courses',
	type: 'document',
	groups: [
		{
			name: 'teachers',
			title: 'Teachers',
			icon: FiUsers
		},
		{
			name: 'lessons',
			title: 'Lessons',
			icon: FiAward
		},
		{
			name: 'media',
			title: 'Media',
			icon: FiImage
		}
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
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
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 6,
			validation: Rule =>
				Rule.max(400).warning('Description should be less than 400 characters')
		}),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required()
    }),
		defineField({
			name: 'teachers',
			group: 'teachers',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'teacher',
					type: 'reference',
					to: [{ type: 'teacher' }]
				})
			],
			validation: Rule => [Rule.required().min(1), Rule.unique()]
		}),
		defineField({
			name: 'lessons',
			group: 'lessons',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'lesson',
					title: 'Lesson',
					type: 'reference',
					to: [{ type: 'lesson' }]
				})
			],
			validation: Rule => [Rule.required().min(1), Rule.unique()]
		}),
		defineField({
			name: 'image',
      title: 'Image',
			type: 'image',
			group: ['media']
		})
	],
	preview: {
		select: {
			title: 'title',
      description: 'description',
      price: 'price',
			lessons: 'lessons',
			teachers: 'teachers',
			image: 'image'
		}
	}
})
