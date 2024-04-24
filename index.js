const express = require("express");
const moment = require('moment');
const app = express(); //formato json 
app.use(express.json()); //acceptaci[on de información
app.use(express.urlencoded()); //comunicación

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({fechaDeHoy:moment().format('DD-mm-yyyy hh:mm:ss')}));
});

//servidor 
const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, () => {
    console.log('el servidor está escuchando en http://localhost:3001')
});