const express = require('express')
const kodersRouters = require('./routes/koders')
const mentorsRouters = require('./routes/mentors')

const app = express()

app.use(express.json())

app.use('/koders', kodersRouters)
app.use('/mentors', mentorsRouters)

module.exports = app
