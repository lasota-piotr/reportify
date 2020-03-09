require('dotenv').config({ debug: Boolean(process.env.DEBUG) })
import { start } from './server'
start()
