import AdmZip from 'adm-zip'
import fs from 'fs'
import path from 'path'

export const generateSourcePackage = async () => {
  const zip = new AdmZip()

  const directoryPath = path.join(__dirname, '../..')

  const files: string[] = fs.readdirSync(directoryPath)
  files.forEach(function(file) {
    if (file === 'node_modules' || file === '.env') {
      return
    }
    const filePath = path.join(directoryPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      zip.addLocalFolder(file)
    } else {
      zip.addLocalFile(file)
    }
  })
  zip.writeZip('./dist/source.zip')
}
