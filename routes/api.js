const express = require('express');
const router = express.Router();

const authors = [];
let nextAuthorId = 1;

const posts = [];
let nextPostId = 1;

// Criar autor
router.post('/authors', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name e email obrigatórios' });
  const author = { id: nextAuthorId++, name, email };
  authors.push(author);
  res.status(201).json(author);
});

// Listar autores
router.get('/authors', (req, res) => {
  res.json(authors);
});

// Criar post
router.post('/posts', (req, res) => {
  const { authorId, title, content } = req.body;
  if (!authorId || !title || !content) return res.status(400).json({ error: 'Campos obrigatórios' });
  const post = { id: nextPostId++, authorId: Number(authorId), title, content };
  posts.push(post);
  res.status(201).json(post);
});

// Listar posts (com filtro por autorId)
router.get('/posts', (req, res) => {
  const { authorId } = req.query;
  let result = posts;
  if (authorId) result = result.filter(p => p.authorId === Number(authorId));
  res.json(result);
});

module.exports = router;