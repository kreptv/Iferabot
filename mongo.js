const mongoose = require('mongoose')
//const {mongoPath} = require('./config.json')

const mongoPath = 'mongodb+srv://krepta:Krepta0308YC@iferabot.iexmd.mongodb.net/blobbot?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  return mongoose
}
