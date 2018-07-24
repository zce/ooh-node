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
