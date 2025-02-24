const express = require('express')
const app = express()
// const body_parser = require
// app.use()

app.use(express.json())
const db = require('./db')

require('dotenv').config() 

const UserRouter = require('./Routes/UserRoutes')
app.use('/user', UserRouter)



app.get('/',async (req,res) => {
    res.send("Hello World")
    
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("Srver is Running At 3000 Port No.")
})

// comment added to testing purpose 