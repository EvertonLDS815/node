/* Imports */
require('dotenv').config();
const connetToDb = require('./database/db');
const cors = require('cors');

const express = require('express');
const app = express();
const port = process.env.PORT || 322;

app.use(express.json());
app.use(cors());
// const Agenda = require('./model/scheduling');

connetToDb();

const users = [
  {
    name: 'Pedro',
    age: 32,
  },
  {
    name: 'Joana',
    age: 22,
  },
];
// Open routes
app.get('/', (req, res) => {
  res.json(users);
});

app.listen(port, () => console.log(`🚀 Meu site http://localhost:${port}`));
