
const koder = require('../models/mentor')

// Ok
// test on localhost:8080/mentors/create?name=jorge luis&gender=m&email=test@update.com&birthDate=1991-05-12
// body  { "courses": ["front-end", "back-end"] }
function create ({ name, gender, email, birthDate, courses }) {
  const newKoder = new koder({ name, gender, email, birthDate, courses })
  return newKoder.save() // is a promise
}
// ok
// test on localhost:8080/mentors/deleteById/5e41da9a8b235270737fcf28
function deleteByid (id) {
  return koder.findByIdAndDelete(id)
}
// ok localhost:8080/mentors
function getAll () {
  return koder.find({})
}
// ok
// test on localhost:8080/mentors/getById/5e41da9a8b235270737fcf28
function getById (id) {
  return koder.findById(id)
}
// ok
// test on localhost:8080/mentors/update/5e41da9a8b235270737fcf28?name=jorge luis&gender=m&email=test@update.com&birthDate=1991-05-12
function updateById (id, infoToUpdate) {
  return koder.findByIdAndUpdate(id, infoToUpdate)
}

module.exports = {
  create,
  deleteByid,
  getAll,
  getById,
  updateById
}
