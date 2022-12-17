const fs = require('fs')
// reading files
fs.readFile('./blog.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})

// writing files
fs.writeFile('./blog.txt', 'hello world', () => {
  console.log('files was written')
})

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}

// deleting files
if (fs.existsSync('./deleteme.txt')) {
  fs.unlink('./deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}
