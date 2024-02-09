const mongo = require('./mongo')
const command = require('./command')
const blobSchema = require('./schemas/blob-schema')

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = (client) => {

  const cache = {}

  /*command(client, 'say', async (message) => {
    if(message.member.roles.cache.find(r => r.name === "Art Mods" )) {

        message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
    }
    else if(message.member.roles.cache.find(r => r.name === "Combat Mod" )) {

        message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
    }
    else if(message.member.roles.cache.find(r => r.name === "Administrator" )) {

        message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
    }
    else {
      message.channel.send("I don't take orders from you >:C")
    }





  })*/


  command(client, 'say', async (message) => {

        message.delete();




        var i = message.content.indexOf(':');

        var newmessage = [message.content.slice(0,i), message.content.slice(i+1)];
        var blob = newmessage[0].split(" ")[1];

        try {
          const webhooks = await message.channel.fetchWebhooks();
          const webhook = webhooks.first();


          await mongo().then(async (mongoose) => {
              try {

                var result = await blobSchema.findOne({
                    userId: message.member.id,
                    blobHandle: blob,
                })

                if (result){

                  if (result.friendzyasname == false){
                    await webhook.send({
                      content: newmessage[1],
                      username: result.blobName.charAt(0).toUpperCase() + result.blobName.slice(1),
                      avatarURL: result.icon,
                    });
                  }
                  if (result.friendzyasname == true){
                    await webhook.send({
                      content: newmessage[1],
                      username: result.friendzy,
                      avatarURL: result.icon,
                    });
                  }

                }
                else{
                  result = await blobSchema.findOne({
                      blobHandle: blob,
                  })

                  if ((result.npc == true) && ((message.member.roles.cache.find(r => r.name === "Art Mods" )) || (message.member.roles.cache.find(r => r.name === "Combat Mod" )) || (message.member.roles.cache.find(r => r.name === "ADMIMODS" )) )){

                    if (result.friendzyasname == false){
                      await webhook.send({
                        content: newmessage[1],
                        username: result.blobName.charAt(0).toUpperCase() + result.blobName.slice(1),
                        avatarURL: result.icon,
                      });
                    }
                    if (result.friendzyasname == true){
                      await webhook.send({
                        content: newmessage[1],
                        username: result.friendzy,
                        avatarURL: result.icon,
                      });
                    }

                  }
                  else {
                    message.channel.send("That ain't your blob.");
                  }

                }

              }finally {
                mongoose.connection.close()
              }

            })


        } catch (error) {
          console.error('Error trying to send: ', error);
        }

  })








    }
