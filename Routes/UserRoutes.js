const express = require('express')

const router = express.Router()

const User = require('./../models/userSchema')
/
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newData = User(data)
        const response = await newData.save();

        res.status(200).json(response)
        console.log("Data Saved Successfully")
    } catch (err) {
        res.status(500).json({ Massage: 'Internal Server Error' })
        console.error(err)
    }
})


router.get('/', async (req, res) => {
    // res.send("Hii Welcome to Hotels")
    const data = await User.find();

    res.status(200).json(data)
    console.log("Data Fatched Successfully")
})

router.get('/:id', async (req, res) => {

    const singleData = await User.findById(req.params.id)
    
    if(!singleData){
        return res.status(404).send("User Not Found");
    }

    res.send(singleData)
    console.log('SP data Fetched Succcessfully')

})


router.put('/:id', async (req, res) => {
    try{
        const Update_data = await User.findByIdAndUpdate(req.params.id, req.body, {new : true} )

        if(!Update_data){
            return res.status(404).send("User Not Found");
        }
        res.send(Update_data)
        console.log('data Update Succcessfully')
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }

})


router.delete('/:id', async (req,res) => {
    try{
        
    const deleteData = await User.findByIdAndDelete(req.params.id)
    if (!deleteData) {
        return res.status(404).json({ error: 'Customer Not Found' })
    }
    console.log("Data Deleted Successfully")
    res.status(200).json({Massage : 'Data Deleted Successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
    
})

// comment added



module.exports = router;