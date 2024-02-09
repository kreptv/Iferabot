const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const blobSchema = mongoose.Schema({
  userId: reqString,
  blobName: reqString,
  blobHandle: reqString,
  friendzy: {
    type: String,
    default: 'No friendzy provided.',
  },
  npc: {
    type: Boolean,
    default: false,
  },
  abridged: {
    type: Boolean,
    default: true,
  },
  artprompts: {
    type: Boolean,
    default: false,
  },
  voucherlist: {
    type: String,
    default: "No vouchers applied.",
  },
  borntypes: {
    type: String,
    default: "Base",
  },
  desc: {
    type: String,
    default: 'No description provided.',
  },
  friendzyasname: {
    type: Boolean,
    default: false,
  },
  mutations: {
    type: String,
    default: "none",
  },
  bleedavailability: {
    type: String,
    default: "Not specified.",
  },
  alignment: {
    type: String,
    default: 'Neutral.',
  },
  image: {
    type: String,
    default: 'https://media.discordapp.net/attachments/629864359836778516/753724610964488333/150holder.png',
  },
  icon: {
    type: String,
    default: 'https://media.discordapp.net/attachments/629864359836778516/753724610964488333/150holder.png',
  },

  str: {
    type: Number,
    default: 0
  },
  hea: {
    type: Number,
    default: 0
  },
  acc: {
    type: Number,
    default: 0
  },
  agi: {
    type: Number,
    default: 0
  },
  def: {
    type: Number,
    default: 0
  },
  mov: {
    type: Number,
    default: 0
  },
  end: {
    type: Number,
    default: 0
  },
})



module.exports = mongoose.model('blob', blobSchema)
