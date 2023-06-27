const User = require('../model/user')

const createUser = async (req, res) => {
  const data = req.body
  try {
    const user = await User.create(data)

    res.status(201).json({
      msg: 'Success',
      user: user,
    })
  } catch (error) {
    res.status(500).json({
      msg: 'ERROR',
      error: error,
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})

    res.status(201).json({
      msg: 'Success',
      user: users,
    })
  } catch (error) {
    res.status(500).json({
      msg: 'ERROR',
      error: error,
    })
  }
}

const getUserById = async (req, res) => {
  const id = req.params.id

  const user = await User.findById(id)

  res.status(200).json({ user: user })
}


module.exports = { createUser, getAllUsers, getUserById }