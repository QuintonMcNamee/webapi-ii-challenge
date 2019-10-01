const express = require('express');

const posts = require('../data/db.js');

const router = express.Router();

router.post('/api/posts', (req, res) => {
    const userInfo = req.body;
  
    posts.insert(userInfo)
      .then(result => {
        res.json(result);
        res.status(201);
      })
      .catch(error => {
        res.send(error);
        res.status(500);
    });
});
  
router.post('/api/posts/:id/comments', (req, res) => {
let comment = req.body;
const id = req.params.id;
comment.post_id = id;

posts.insertComment(comment)
    .then(result => {
    res.json(result);
    res.status(201);
    })
    .catch(error => {
    res.send(error);
    res.status(500);
    });
});

router.get('/api/posts', (req, res) => {
    posts.find()
    .then(response => {
    res.json(response);
    res.status(200);
    })
    .then(error => {
    res.send(error);
    res.status(500);
    });
});

router.get('/api/posts/:id', (req, res) => {
const id = req.params.id;

posts.findById(id)
    .then(response => {
    res.json(response);
    res.status(201);
    })
    .catch(error => {
    res.json(error);
    res.status(500);
    });
});

router.get('/api/posts/:id/comments', (req, res) => {
const id = req.params.id;

posts.findPostComments(id)
    .then(response => {
    res.json(response);
    res.status(201);
    })
    .catch(error => {
    res.json(error);
    res.status(500);
    });
});

router.delete('/api/posts/:id', (req, res) => {
const id = req.params.id;

posts.remove(id)
.then(response => {
    res.json(response);
    res.status(201);
})
.catch(error => {
    res.json(error);
    res.status(500);
});
});

router.put('/api/posts/:id', (req, res) => {
const id = req.params.id;
const userInfo = req.body;

posts.update(id, userInfo)
    .then(response => {
    res.json(response);
    res.status(200);
    })
    .catch(error => {
    res.json(error);
    res.status(500);
    });
});

module.exports = router;