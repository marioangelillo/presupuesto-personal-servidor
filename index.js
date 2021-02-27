const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json({ limit : '10mb'}));// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

app.listen(4000, () => {
  console.log('Aplicación ejemplo, escuchando el puerto 4000!');
});