const mongoose = require('mongoose')



const schema = mongoose.Schema({
    line:{
      type: String,
      required:true
    },
    machine:{
      type: String,
      required:true
    },
    month:{
      type: String,
      required:true
    },
    year:{
      type: String,
      required:true
    },
    date:{
      type: String,
      required:true
    },
    category:{
      type: String,
      required:true
    },
})





module.exports = mongoose.model('charts', schema)