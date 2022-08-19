const express = require('express')
const router = express.Router()
const configuracion = require('../models/configuracion')

//GET-----------------------------------------------------------------
router.get('/', async (req, res)=>{
    const allData = await configuracion.find()
    res.json(allData)
})

//POST---------------------------------------------------------------
router.post('/', async (req, res)=>{
  let post = new configuracion({
    ip: req.body.ip,
    api: req.body.api
  })
  const savedPost = await post.save()
    res.json(savedPost)
})


//UPDATE---------------------------------------------------------------
router.patch('/', async (req, res)=>{
    const updatePost = await configuracion.updateOne(
      {$set: {ip:req.body.ip,
              api:req.body.api}
          })
    res.json(updatePost)
  })

module.exports= router