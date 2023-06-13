import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'
import { config } from './client'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

export default defineCliConfig({ api: { ...config } })
