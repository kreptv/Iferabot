const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const dexSchema = mongoose.Schema({
  name: reqString,
  link: reqString,
  desc: reqString,
  image: reqString
})

module.exports = mongoose.model('dex', dexSchema)
