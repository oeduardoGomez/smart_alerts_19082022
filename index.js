//Load app dependencies  
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//Routes------------------------------------------------------------------
const mantenimiento = require('./routes/mantenimiento.routes')
const calidad = require('./routes/calidad.routes')
const logistica = require('./routes/logistica.routes')
const configuracion = require('./routes/configuracion.routes')
const lines = require('./routes/lines.routes')
const morgan = require('morgan')

//Variables de entorno

let port = process.env.PORT,
    host = process.env.HOST,
    db   = process.env.DB

// Middlewares-------------------------------------------------------------

app.use(morgan('dev'))
app.use(express.json())
app.use('/mantenimiento', mantenimiento)
app.use('/logistica', logistica)
app.use('/calidad', calidad)
app.use('/configuracion', configuracion)
app.use('/lines', lines)
app.use(cors())

// static Files------------------------------------------------------------
app.use(express.static('public'))

//DB Connection------------------------------------------------------------
mongoose.connect(db,()=>{
  console.log('DB connected')
})

//Server Connection---------------------------------------------------------
app.listen(3000, "0.0.0.0", ()=>{
  console.log(`Server running on ${host}:${port}`)
})

