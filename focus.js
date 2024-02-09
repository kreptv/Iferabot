const mongo = require('./mongo')
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const command = require('./command')

module.exports = (client) => {


  command(client, 'focus', async (message) => {

    message.channel.send('How many fockin babies?')

            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1, time: 60000}).then(collected => {
                    // only accept messages by the user who sent the command
                      // accept only 1 message, and return the promise after 60s

                      // first (and, in this case, only) message of the collection
                      var babnum = collected.first().content;
                      var stringy = "";
                      var guarantee = (Math.floor(Math.random(1) * babnum));

                      for (var i=0; i<babnum; i++){
                        var prob = ((Math.floor(Math.random(1) * (2))))
                        if (guarantee == i){
                          stringy = stringy + "\n" + (i+1) +": yes (guarantee)";
                        }
                        else if (prob==1){
                          stringy = stringy + "\n" + (i+1) +": yes";
                        }
                        else {
                          stringy = stringy + "\n" + (i+1) +": no"
                        }
                      }

                      message.channel.send(stringy);




  })
  })








}
