const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const linkSchema = mongoose.Schema({
  linkcall: reqString,
  link: reqString
})

module.exports = mongoose.model('link', linkSchema)
