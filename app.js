const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req,res)=>res.sendFile(path.resolve(__dirname, 'views', 'index.html')));

app.listen(port, ()=> 'servidor funcionando en http://localhost:$(port)');