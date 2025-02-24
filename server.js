const express = require('express')
const app = express()
// const body_parser = require
// app.use()
app.use(express.json())
const db = require('./db')

const UserRouter = require('./Routes/UserRoutes')
app.use('/user', UserRouter)




app.listen(3000, () => {
    console.log("Srver is Running At 3000 Port No.")
})