const express = require('express')
const router = express.Router()

const {
  createUser,
  getAllUsers,
  getUserById,
} = require('../controller/userController')

router.post('/create', createUser)

router.get('/get-all', getAllUsers)

router.get('/get-user/:id', getUserById)

module.exports = router
