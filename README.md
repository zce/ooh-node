# ooh-node

Ooh node~

> No callback in node

## Console Patchs

- `console.read()`
- `console.readline()`
- `console.write()`
- `console.writeline()`
- `console.clear()`
- `console.colors`

## Requirement

node >=7.6.0

## Installation

```shell
$ yarn global add ooh-node
# or npm
$ npm i ooh-node -g
```

## Usage

```javascript
// example.js
module.exports = async function (args) {
  while (true) {
    console.clear()
    console.write(console.colors.gray('Input your age: '))

    const res = await console.readline()
    console.log(res)

    if (res === 'q' || res === 'quit' || res === 'exit') {
      console.writeline(console.colors.green('Bye bye!'))
      break
    }

    const age = parseInt(res)
    if (age) {
      if (age < 18) {
        console.writeline(console.colors.blue('You are just too young!'))
      } else {
        console.writeline(console.colors.bgYellow('Ooooooooook!'))
      }
    } else {
      console.writeline(console.colors.red('Input is invalidated.'))
    }
    console.write(console.colors.gray('Press any key to continue.'))

    await console.read()
  }
}

```

```shell
$ ooh-node example.js
```
