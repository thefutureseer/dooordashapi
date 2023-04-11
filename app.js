import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url'
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(PORT, (err) => {
  if(err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port: ${PORT}`)
} );