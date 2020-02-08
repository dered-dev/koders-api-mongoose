const express = require('express')
const kodersRouters = require('./routes/koders')

const app = express()

app.use(express.json())

app.use('/koders', kodersRouters)

module.exports = app
