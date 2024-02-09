const mongo = require('./mongo')
const command = require('./command')
const blobSchema = require('./schemas/blob-schema')
const assSchema = require('./schemas/ass-schema')

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = (client) => {

  function getUserFromMention(mention) {

    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);
      if (mention.startsWith('!')){
        mention = mention.slice(1);
      }

      return mention;
    }
  }

  command(client, ['addalias'], async message => {
    if (message.member.roles.cache.find(role => role.name === "Art Mods")){

      const {member, channel, content, guild} = message
      let text = content.toLowerCase()

      const split = text.split(' ');
      if (split.length < 3){
        message.channel.send("&addalias <discord id> <nickname> OR &addalias <ping> <nickname>")
        return
      }

      var userId = ""

        userId = getUserFromMention(split[1])

      await mongo().then(async (mongoose) => {
        try{
          await assSchema.findOneAndUpdate({
            userId: userId,
          },{
            userId: userId,
            $push: {
              aliases: split[2].toLowerCase(),
            },
          },{
            upsert: true
          })
        }finally {
            message.channel.send("updated ee")
        }
      })




    }
  })













}
