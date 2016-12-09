#!/usr/bin/env node --harmony-async-await
const path = require('path')

const portalFile = path.resolve(process.cwd(), process.argv[2] || '')

// 载入同步模块支持
require('../lib/console')

const portalMain = require(portalFile)

const main = async function () {
  await portalMain(process.argv.slice(3))
  process.exit()
}

main()
