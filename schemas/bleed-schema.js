const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const bleed-schema = mongoose.Schema({
  _id: reqString,
  voucherlist: reqString
})

module.exports = mongoose.model('bleed', bleedSchema)
