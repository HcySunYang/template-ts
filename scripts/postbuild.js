const fse = require('fs-extra')
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const pkg = require('../package.json')

const resolveRoot = (...p) => resolve(__dirname, '../', ...p)

async function run() {
  await fse.remove(resolveRoot('./dist/src'))
  await fse.remove(resolveRoot('./dist/test-dts'))

  const existing = readFileSync(resolveRoot(pkg.types), 'utf-8')
  writeFileSync(resolveRoot(pkg.types), existing, 'utf-8')

  console.info('dts file writing completed!')
}

run()
