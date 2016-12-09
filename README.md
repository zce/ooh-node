# ooh-node

Ooh node~

> No callback in node

## Features

- `console.read()`
- `console.readline()`
- `console.write()`
- `console.writeline()`
- `console.clear()`
- `console.colors`

## Installation

```bash
$ npm i ooh-node -g
```

## Usage

```javascript
// example.js
module.exports = async function (args) {
  while (true) {
    console.clear()
    console.write('Input your age: ')
    const res = await console.readline()
    if (res === 'q' || res === 'quit' || res === 'exit') {
      console.writeline('Bye bye!')
      process.exit()
      break;
    }
    const age = parseInt(res)
    if (age) {
      if (age < 18) {
        console.writeline('You are just too young!')
      } else {
        console.writeline('Ooooooooook!')
      }
    } else {
      console.writeline('Input is invalidated.')
    }
    console.write('Press any key to continue.')
    await console.read()
  }
}
```

```bash
$ ooh-node example.js
```
