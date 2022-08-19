const mongoose = require('mongoose')



const schema = mongoose.Schema({
    ip:{
      type: String,
      required:true
    },
    api:{
      type: String,
      required:true
    },
})



module.exports = mongoose.model('configuracion', schema)