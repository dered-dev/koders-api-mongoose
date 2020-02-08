const mongoose = require('mongoose')
const DB_PASSWORD = 'dered123'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://jorge:${DB_PASSWORD}@sexta-gen-pm0mp.mongodb.net/${DB_NAME}`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
