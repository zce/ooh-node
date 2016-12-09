// const readline = require('readline')
const colors = require('colors/safe')
const keypress = require('keypress')
// const tty = require('tty')

const { stdin, stdout } = process

keypress(process.stdin)
keypress.enableMouse(process.stdout)

const console = global.console

console.read = () => new Promise(resolve => {
  stdin.setRawMode(true)
  stdin.resume()
  stdin.once('keypress', (chunk, key) => resolve({ chunk, key }))
})

console.readline = () => new Promise(resolve => {
  stdin.setRawMode(false)
  stdin.resume()
  stdin.once('data', data => resolve(data.toString().trim()))
})

console.write = (...params) => stdout.write(...params)

console.writeline = (...params) => stdout.write(...params) && stdout.write('\n')

console.clear = () => stdout.write('\u001b[2J\u001b[0;0H')

console.colors = colors
