import AdmZip from 'adm-zip'
import util from 'util'

const exec = util.promisify(require('child_process').exec)

export const generateSourcePackage = async () => {
  const zip = new AdmZip()
  const { stdout, stderr }: { stdout: string; stderr: any } = await exec(
    'git ls-files --exclude-standard'
  )
  if (stderr) {
    console.error(`error: ${stderr}`)
  }
  const files = stdout.trim().split('\n')
  const paths = files.map(file => file.split('/').slice(0, -1).join('/') || undefined)
  console.log({
    files,
    files1: files.map(file => file.split('/').slice(0, -1).join('/') || undefined)
  })

  files.forEach((file, index) => {
    zip.addLocalFile(file, paths[index])
  })
  zip.writeZip('./dist/source.zip')
}
