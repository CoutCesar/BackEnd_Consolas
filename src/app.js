require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

// Ajustes
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '1_FrontEnd')));

// Rutas
app.use('/producto', require('./routes/producto'));

// Ruta para imprimir "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

module.exports = app;
