// implement your API here

const express = require('express');

const postsRouter = require('./routing/posts-router.js');

const port = 8000;

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.status(200).send('working');
})

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
