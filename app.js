const { log } = require('console');

const express = require('express');

const app = express();

const path = require('path');

const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.get('/header', (req, res) => res.sendFile(path.join(__dirname, 'views', 'header.html')));

app.get('/footer', (req, res) => res.sendFile(path.join(__dirname, 'views', 'footer.html')));

app.listen(PORT, () => log('Servidor corriendo en http://localhost:' + PORT));