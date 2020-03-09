import AdmZip from 'adm-zip'
import fs from 'fs'
import path from 'path'

const ignoreFiles = [
  '.env',
  'node_modules',
  'yarn',
  'WEB_CONCURRENCY.sh',
  'node',
  'heroku-nodejs-plugin',
  'configstore'
]

export const generateSourcePackage = async () => {
  const zip = new AdmZip()

  const directoryPath = path.join(__dirname, '../..')

  const files: string[] = fs
    .readdirSync(directoryPath)
    .filter(file => !ignoreFiles.includes(file))
  files.forEach(function(file) {
    console.log({file})
    const filePath = path.join(directoryPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      zip.addLocalFolder(file, file)
    } else {
      zip.addLocalFile(file)
    }
  })
  zip.writeZip('./dist/source.zip')
}
