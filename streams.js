// Start using data, before it has finished loading.

const fs = require('fs')

const readStream = fs.createReadStream('./blog.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream('./blog2.txt')

// readStream.on('data', (chunk) => {
//   console.log('Added new line')
//   console.log(chunk)
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

// piping
readStream.pipe(writeStream)
