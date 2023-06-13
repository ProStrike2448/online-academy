import { createClient } from 'next-sanity'
import { cache } from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'pv8y60vp'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2023-05-03'

export const config = {
	projectId,
	dataset,
	apiVersion
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false
})

export const previewClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	studioUrl: '/studio',
	encodeSourceMap: true, // Optional. Default to: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
	token: process.env.SANITY_API_TOKEN
})

export const clientFetch = cache(client.fetch.bind(client))
// As @sanity/client will only sometimes use fetch under the hood, it depends on the environment, it's best to implement the cache function to ensure reliable caching.
export const previewClientFetch = cache(previewClient.fetch.bind(previewClient))
