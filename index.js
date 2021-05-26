const express = require('express');
const { json } = require('body-parser');

const app = express()
const port = 3000

// User

// Monster

// World

// Battle

app.get('/', json(), (req, res) => {
  res.json({boss: 'fvhog'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})