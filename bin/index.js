#!/usr/bin/env node

const path = require('path')

// resolve portal file path
const portalFile = path.resolve(process.cwd(), process.argv[2] || '')

// patch console
const { console } = require('../lib')
Object.assign(global.console, console)

// require portal file
const portalMain = require(portalFile)

// wrap portal main function
const main = async () => {
  try {
    await portalMain(process.argv.slice(3))
    process.exit(0) // success
  } catch (e) {
    process.exit(1) // failure
  }
}

// run main function
main()
