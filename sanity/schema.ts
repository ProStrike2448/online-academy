import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import author from './schemas/author'
import lesson from './schemas/lesson'
import course from './schemas/course'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blockContent, lesson, course],
}
