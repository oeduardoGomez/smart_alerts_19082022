const mongoose = require('mongoose')



const schema = mongoose.Schema({
    identificador:{
      type: Number,
      required:true
    },
    mensaje:{
      type:String,
      required:true
    },
    relacionador:{
      type: Number,
      required:false
    }
})



module.exports = mongoose.model('mantenimiento', schema)