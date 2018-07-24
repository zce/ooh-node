const colors = require('colors/safe')
const keypress = require('keypress')

const { stdin, stdout } = process

keypress(process.stdin)
keypress.enableMouse(process.stdout)

const console = {}

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

console.write = (...params) => stdout.write(params.join(' '))

console.writeline = (...params) => stdout.write(params.join(' ') + '\n')

console.clear = () => stdout.write('\u001b[2J\u001b[0;0H')

console.colors = colors

module.exports = console
