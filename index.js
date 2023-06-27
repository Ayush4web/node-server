// common js
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const User = require('./model/user')

// to acces the scerets from env file
require('dotenv').config()


const userRouter = require('./routes/userRoutes')
const port = 5000

// configuration
app.use(express.json())

app.use('/user',userRouter)




const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is runiing on port ${port}.....`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
