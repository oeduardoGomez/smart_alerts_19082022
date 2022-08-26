const express = require('express')
const router = express.Router()
const mantenimiento = require('../models/mantenimiento')

//GET-----------------------------------------------------------------
router.get('/', async (req, res)=>{
    const allData = await mantenimiento.find()
    console.log(allData)
    res.json(allData)
})

router.get('/:relacionador', async (req, res)=>{
  const getOne = await mantenimiento.findOne({relacionador : req.params.relacionador})
  res.json(getOne)
})

//POST----------------------------------------------------------------
router.post('/', async (req, res)=>{
    let post = new mantenimiento({
      identificador: req.body.identificador,
      mensaje: req.body.mensaje,
      relacionador: req.body.relacionador
    })
    const savedPost = await post.save()
      res.json(savedPost)
})

//UPDATE---------------------------------------------------------------

router.patch('/', async (req, res)=>{
  const relacionador = req.body.relacionador
  const updatePost = await mantenimiento.findOneAndUpdate({relacionador},
      {
        identificador:req.body.identificador,
        mensaje:req.body.mensaje,
        relacionador:req.body.relacionador
      }    
  )
  res.json(updatePost)
}) 

module.exports= router