const express = require('express')
const router = express.Router()
const logistica = require('../models/logistica')

//GET-----------------------------------------------------------------
router.get('/', async (req, res)=>{
    const allData = await logistica.find()
    res.json(allData)
})

router.get('/:relacionador', async (req, res)=>{
  const getOne = await logistica.findOne({relacionador : req.params.relacionador})
  res.json(getOne)
})

//POST----------------------------------------------------------------
router.post('/', async (req, res)=>{
    let post = new logistica({
      identificador: req.body.Identificador,
      mensaje: req.body.Mensaje,
      relacionador: req.body.Relacionador
    })
    const savedPost = await post.save()
      res.json(savedPost)
})

//UPDATE---------------------------------------------------------------
router.patch('/', async (req, res)=>{
  const relacionador = req.body.relacionador
  const updatePost = await logistica.findOneAndUpdate({relacionador},
      {
        identificador:req.body.identificador,
        mensaje:req.body.mensaje,
        relacionador:req.body.relacionador
      }    
  )
  res.json(updatePost)
}) 

module.exports= router