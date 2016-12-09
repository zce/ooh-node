module.exports = async function (args) {
  while (true) {
    console.clear()
    console.write('Input your age: ')
    const res = await console.readline()
    console.log(res)
    if (res === 'q' || res === 'quit' || res === 'exit') {
      console.writeline('Bye bye！')
      process.exit()
      break;
    }
    const age = parseInt(res)
    if (age) {
      if (age < 18) {
        console.writeline('太小了，不能看')
      } else {
        console.writeline('快看快看')
      }
    } else {
      console.writeline('Input is invalidated.')
    }
    console.write(`Put enter to continue.`)
    await console.read()
  }
}
