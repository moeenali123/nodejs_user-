const mongoose = require('mongoose')

require('dotenv').config() 

// const Url = 'mongodb://localhost:27017/newDB'
// const Url = 'mongodb+srv://moeenali0124:moeen5871@cluster0.x1jsf.mongodb.net/'
const Url = process.env.DB_URL;

mongoose.connect(Url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}) 

const db = mongoose.connection

db.on('connected', () => {
    console.log("Connected To MongoDB")
})

db.on('disconnected', () => {
    console.log("Disconnected To MongoDB")
})

db.on('error', (err) => {
    console.log("Error Occur :", err)
})

module.exports = db;
