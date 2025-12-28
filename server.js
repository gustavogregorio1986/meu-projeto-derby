const express = require('express');
const path = require('path');
const app = express();

// importa o router que você criou
const apiRoutes = require('./routes/api'); // ajuste o caminho

app.use(express.json());

// ativa as rotas da API
app.use('/api', apiRoutes);

// servir o frontend (index.html dentro da pasta public)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});