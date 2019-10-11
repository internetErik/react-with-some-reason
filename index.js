import express from 'express';

require('dotenv').config();

global.__ENV = process.env.NODE_ENV;

process.on('unhandledRejection', err => console.error('Unhandled rejection:', err))

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React With Reason</title>
  </head>
    <body><div id="app"></div></body>
    <link rel="stylesheet" href="styles.css" />
    <script src="vendor.js" ></script>
    <script src="main.js" ></script>
  </html>
  `)
})

app.listen(port, () => console.log(`listening on port ${port}!`))
