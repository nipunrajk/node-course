// console.log(global)

setTimeout(() => {
  console.log('Hello there')
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log('this is interval log')
}, 1000)

console.log(__dirname)
console.log(__filename)
