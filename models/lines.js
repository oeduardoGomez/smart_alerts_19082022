const mongoose = require('mongoose')



const schema = mongoose.Schema({
    line:{
      type: String,
      required:true
    },
    
})





module.exports = mongoose.model('lines', schema)