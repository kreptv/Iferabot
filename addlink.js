const mongo = require('./mongo')
const command = require('./command')
const linkSchema = require('./schemas/link-schema')

module.exports = (client) => {

  const cache = {}

  command(client, 'addlink', async (message) => {
    const {member, channel, content, guild} = message

    let text = content

    const split = text.split(' ')

    if (split.length < 3){
      message.channel.send('make sure you enter a link name and link!')
      return
    }

    split.shift()
    text = split.join(' ')

    cache[guild.id] = [channel.id, text]

    await mongo().then(async (mongoose) => {
      try{
        await linkSchema.findOneAndUpdate({
          linkcall: split[0].toLowerCase(),
        },{
          linkcall: split[0].toLowerCase(),
          link: split[1],
        }, {
          upsert: true,
        })
      }finally {
        mongoose.connection.close()
      }
    })
    message.channel.send(split[0] + ' added/updated! if you need to change the link, use the linkadd command again with the same name :3');
  })



  command(client, 'link', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
    const split = text.split(' ')
      console.log('fetching data for link')

      await mongo().then(async (mongoose) => {
        try {
          const result = await linkSchema.findOne({linkcall: split[1]})
          message.channel.send(result.link);
        } finally {
          mongoose.connection.close()
        }
      })


  })



}
