// IMPORTS
const express = require('express')
// const routes = require('./routes/api')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')

// VARIABLES
const PORT = 3000;

// MIDDLEWARE
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))

app.listen(process.env.port || PORT, () => console.log('Server na porta: ' + PORT))
