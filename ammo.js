const mongo = require('./mongo')
const command = require('./command')

module.exports = (client) => {

  const cache = {}

  command(client, 'ammo', async (message) => {
    message.channel.send('What caliber would you like to use today? Tokarev or Makarov')

            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1, time: 60000}).then(collected => {
                    // only accept messages by the user who sent the command
                      // accept only 1 message, and return the promise after 60s

                      // first (and, in this case, only) message of the collection
                      var cal = collected.first().content;
                      if (cal === 'Tokarev') {
                          message.reply('big ol tokarev yeet');
                        }
                        else if (cal === 'Makarov') {
                            message.reply('big ol mmakamakov yeet');
                          }

                          //continue 1

                          else

                          message.reply('pls makororv or tokarev');
                          message.channel.send('thank')
                        }).catch(() => {
                              message.reply('no response after one minute, i cancel.');
                          });
                  })









    }
