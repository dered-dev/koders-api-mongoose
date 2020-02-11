const mongoose = require('mongoose')

// create schema
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  email: {
    type: String,
    minlength: 6,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
    toLowerCase: true,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  },
  courses: {
    type: Array,
    required: true
  }
})

// create model
module.exports = mongoose.model('mentors', mentorSchema)
