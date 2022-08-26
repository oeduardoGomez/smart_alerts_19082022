const express = require('express')
const router = express.Router()
const lines = require('../models/lines')
const chart = require('../models/charts')
//GET-----------------------------------------------------------------
router.get('/', async (req, res)=>{
    const allData = await lines.find()
    res.json(allData)
})

router.get('/charts', async (req, res)=>{
    const allData = await chart.find()
    res.json(allData)
})


//POST----------------------------------------------------------------
router.post('/', async (req, res)=>{

    let newLine = new lines({
      line: req.body.line,
    })
    const savedPost = await newLine.save()
      res.json(savedPost)
})


router.post('/charts', async (req, res)=>{

    const {line, machine, month, year, date, category} = req.body

    let newChart = new chart({
        line,
        machine,
        month,
        year,
        date,
        category
    })
    const savedPost = await newChart.save()
      res.json(savedPost)
})

//DELETE----------------------------------------------------------------
router.delete('/', async (req, res)=>{
    
    const {line} = req.body
    const deletePost = await lines.findOneAndDelete({line})
      res.json(deletePost)

})


module.exports= router