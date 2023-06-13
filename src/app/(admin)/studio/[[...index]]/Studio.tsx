'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '@/sanity/lib/config'

export function Studio() {
	//  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
	return <NextStudio config={config} />
}
