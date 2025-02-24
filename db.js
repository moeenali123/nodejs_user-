const mongoose = require('mongoose')

const Url = 'mongodb://localhost:27017/newDB'

mongoose.connect(Url,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.on('connected',()=>{
    console.log("Connected To MongoDB")
})

db.on('disconnected',()=>{
    console.log("Disconnected To MongoDB")
})

db.on('error',(err)=>{
    console.log("Error Occur :",err)
})

module.exports = db;
