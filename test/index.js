module.exports = async function (args) {
  while (true) {
    console.clear()
    console.write('Input your age: ')
    const res = await console.readline()
    console.log(res)
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
