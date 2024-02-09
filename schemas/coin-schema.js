const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const coinSchema = mongoose.Schema({
  userId: reqString,
  nick: reqString,
  cointotal: {
    type: Number,
    default: 0
  },
})

module.exports = mongoose.model('coin', coinSchema)
