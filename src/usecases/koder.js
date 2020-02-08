
const koder = require('../models/koder')

function create ({ name, gender, email, birthDate }) {
  const newKoder = new koder({ name, gender, email, birthDate })
  return newKoder.save() // is a promise
}
function deleteByid (id) {
  // const koderFound = await koder.findById(id)
  // return koderFound.remove()
  return koder.findByIdAndDelete(id)
}
function getAll () {
  return koder.find({})
}
function getById (id) {
  return koder.findById(id)
}
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
