import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { schemaVisualizer } from 'sanity-plugin-schema-visualizer'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '../schemas'
import { config } from './client'

export default defineConfig({
	basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

	...config,

	plugins: [
		deskTool(),
		visionTool(),
		codeInput(),
		schemaVisualizer({
			defaultSchemaTypes: ['course', 'lesson', 'teacher']
		})
	],

	schema: {
		types: schemaTypes
	}
})
