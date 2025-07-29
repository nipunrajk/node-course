import http from 'http';
const PORT = process.env.PORT;
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filepath;
      if (req.url === '/') {
        filepath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not found');
      }

      const data = await fs.readFile(filepath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method not allowed');
    }
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
