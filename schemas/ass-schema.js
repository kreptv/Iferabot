const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const assSchema = mongoose.Schema({
  userId: reqString,
  nick: {
    type: String,
    default: "Undefined"
  },
  aliases: {
    type: [String],
    default: []
  },
  asscount: {
    type: Number,
    default: 0
  },
  patcount: {
    type: Number,
    default: 0
  },
})



module.exports = mongoose.model('ass', assSchema)
