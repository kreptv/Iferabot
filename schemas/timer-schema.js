const mongoose = require('mongoose')

const timerSchema = mongoose.Schema({
  timer: {
    type: Number,
    default: 1649871068092,
  },
  id: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('timer', timerSchema)
