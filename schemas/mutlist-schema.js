const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const mutlistSchema = mongoose.Schema({
  type: reqString,
  name: reqString,
  desc: reqString
})

module.exports = mongoose.model('mutlist', mutlistSchema)
