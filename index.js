// IMPORTS
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/apidb')
// VARIABLES
const PORT = 3000;

// MIDDLEWARE
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message })
})

app.listen(process.env.port || PORT, () => console.log('Server na porta: ' + PORT))
