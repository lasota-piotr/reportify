// prettier-ignore
require('dotenv').config()
import { generateSourcePackage } from './utils/generateSourcePackage'
import { start } from './server'

const execApp = async () => {
  await generateSourcePackage()
  await start()
}

execApp().catch(e => console.error(e))
