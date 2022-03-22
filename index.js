const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/', function (req, res) {
  res.send('Tudo OK com a aplicação');
});

app.get('/paletas', function (req, res) {
  res.send(paletas);
});

app.get('/paletas/:id', function (req, res) {
  const idParam = req.params.id;
  const paletaUni = paletas.find((paleta) => paleta.id == idParam);
  res.send(paletaUni);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
