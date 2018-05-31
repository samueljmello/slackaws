// jshint ignore: start
'use strict'

const express = require('express')
const app = express()
const path = require('path')

// set app constants
const PORT = 8080
const HOST = '0.0.0.0'

// create new instance of express


// set up template renderer
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// set base response
app.get('/', (req, res) => {
  res.render('index', { })
})

// start listening
app.listen(PORT, HOST)

// output for Docker
console.log(`Running on http://${HOST}:${PORT}`)
