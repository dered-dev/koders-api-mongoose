
const express = require('express')
const mentor = require('../usecases/mentor')
const router = express.Router()

// /mentors -> getAll()
router.get('/', async (request, response) => {
  try {
    const mentors = await mentor.getAll()
    response.json({
      success: true,
      message: 'All mentors',
      data: {
        mentors
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
// /mentors -> create()
router.post('/create', async (request, response) => {
  try {
    var {
      name,
      gender,
      email,
      birthDate
    } = request.query
    console.log(request.body.courses)
    var courses = request.body.courses
    const newMentor = await mentor.create({ name, gender, email, birthDate, courses })
    response.json({
      success: true,
      message: 'New mentor',
      data: {
        newMentor
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
// /mentors -> updateById()
router.post('/update/:id', async (request, response) => {
  try {
    var idKoder = request.params.id
    var {
      name,
      gender,
      email,
      birthDate
    } = request.query
    var courses = request.body.courses
    const mentorUpdated = await mentor.updateById(idKoder, { name, gender, email, birthDate, courses })
    response.json({
      success: true,
      message: 'Mentor Updated',
      data: {
        mentorUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
// /mentors -> getById()
router.get('/getById/:id', async (request, response) => {
  try {
    var { id } = request.params
    const findedMentor = await mentor.getById(id)
    response.json({
      success: true,
      message: ' koder Data',
      data: {
        findedMentor
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
// /mentors -> deleteByid()
router.delete('/deleteById/:id', async (request, response) => {
  try {
    var { id } = request.params
    const koderDeleted = await mentor.deleteByid(id)
    response.json({
      success: true,
      message: 'koder Deleted',
      data: {
        koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
