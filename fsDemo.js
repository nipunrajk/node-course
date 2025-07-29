// import fs from 'fs';
import { read } from 'fs';
import fs from 'fs/promises';

// asynchronous readfile
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// synchronous readfile
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);

// readFile() - promise.then()
// fs.readFile('./text.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./text.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// readFile();

//writeFile
const writeFile = async () => {
  try {
    await fs.writeFile('./text.txt', 'Hello, I am writing to this file');
    console.log('file written to');
  } catch (err) {
    console.log(err);
  }
};

//appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./text.txt', '\n this is a appended text');
    console.log('file appended too');
  } catch (err) {
    console.log(err);
  }
};

// writeFile();
appendFile();
readFile();
