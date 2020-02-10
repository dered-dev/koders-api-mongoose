
const express = require('express')
const koder = require('../usecases/koder')
const router = express.Router()

// /koders -> getAll()
router.get('/', async (request, response) => {
  try {
    const koders = await koder.getAll()
    response.json({
      success: true,
      message: 'All koders',
      data: {
        koders
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
router.post('/create', async (request, response) => {
  try {
    var {
      name,
      gender,
      email,
      birthDate
    } = request.query
    const newKoder = await koder.create({ name, gender, email, birthDate })
    response.json({
      success: true,
      message: 'New koder',
      data: {
        newKoder
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
router.post('/update/:id', async (request, response) => {
  try {
    var idKoder = request.params.id
    var {
      name,
      gender,
      email,
      birthDate
    } = request.query
    const koderUpdated = await koder.updateById(idKoder, { name, gender, email, birthDate })
    response.json({
      success: true,
      message: 'koder Updated',
      data: {
        koderUpdated
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
router.get('/getById/:id', async (request, response) => {
  try {
    var { id } = request.params
    const findedKoder = await koder.getById(id)
    response.json({
      success: true,
      message: ' koder Data',
      data: {
        findedKoder
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
router.delete('/deleteById/:id', async (request, response) => {
  try {
    var { id } = request.params
    const koderDeleted = await koder.deleteByid(id)
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
