const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const blocklistService = require('./services/blocklistService')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(routes)

// Initializers
blocklistService.init()

app.listen(3333, () => console.log('App started on port 3333.'))
