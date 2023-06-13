import { type PortableTextBlock } from 'sanity'
import { type UrlObject } from 'url'


type Base = {
	_createdAt: string
	_id: string
	_rev: string
	_type: string
	_updatedAt: string
}

interface Teacher extends Base {
	name: string
	slug: string
	bio: string
	photo: UrlObject & string
}

interface Lesson extends Base {
	title: string
	slug: string
	summary: string
	content: PortableTextBlock[]
}

interface Block {
	_key: string
	_type: 'block'
	children: Span[]
	markDefs: unknown[]
	style: 'normal' | 'h2' | 'h3'
}

interface Span {
	_key: string
	_type: 'span'
	marks: string[]
	text: string
}

interface Course extends Base {
	title: string
	slug: string
	description: string
	price: number
	teachers: Teacher[]
	lessons: Lesson[]
	image: UrlObject & string
}

interface Title {
	_type: 'string'
	current: string
}

interface Callout {
	_type: 'string'
	content: Block[]
}
