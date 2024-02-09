const command = require('./command')
const mongo = require('./mongo')
const coinSchema = require('./schemas/coin-schema')

module.exports = (client) => {

    command(client, 'retrievecoins', async (message) => {

          message.channel.send("Retrieve whose coins? //use server nicknames, all for all");

          message.channel.awaitMessages(m => m.author.id == message.author.id, {
            max: 1,
            time: 60000
          }).then(async collected => {

            var who = collected.first().content;

            if (who.toLowerCase() == "all") {

              await mongo().then(async (mongoose) => {
                try {
                  console.log('retrieving all coins')

                  const result = await coinSchema.find({})

                  var allthings = "";

                  if (result) {

                    result.forEach(element => allthings = allthings + "\n**" + element.nick + " : **" + element.cointotal + " coins");
                    message.channel.send(allthings);
                  }

                } finally {
                  mongoose.connection.close()
                }

              })
            } else {

              await mongo().then(async (mongoose) => {
                  try {
                    console.log("retrieving someone's coins")

                    const result = await coinSchema.findOne({
                      nick: who.toLowerCase()
                    })

                    var allthings = "";

                    if (result) {
                      message.channel.send("**" + result.nick + " : **" + result.cointotal + " coins");
                    }
                    else {
                      message.channel.send("no coins tied to this nickname.");
                    }

                  } finally {
                    mongoose.connection.close()
                  }



                })
              }
              })

          })



          command(client, 'purgecoins', async (message) => {
              if (message.member.roles.cache.find(r => r.name === "ADMIMODS")){
                message.channel.send("Purge whose coins? //use server nicknames, all for all");

                message.channel.awaitMessages(m => m.author.id == message.author.id, {
                  max: 1,
                  time: 60000
                }).then(async collected => {

                  var who = collected.first().content;

                  if (who.toLowerCase() == "all") {

                    await mongo().then(async (mongoose) => {
                      try {
                        console.log('purging all coins')
                        message.channel.send("**Current coin totals:**");

                        const result = await coinSchema.find({})
                        var allthings = "";
                        if (result) {

                          result.forEach(element => allthings = allthings + "\n**" + element.nick + " : **" + element.cointotal + " coins");
                          message.channel.send(allthings);
                        }

                        message.channel.send("All coins erased.");

                        console.log('erasing all coins')

                        await coinSchema.deleteMany()

                      } finally {
                        mongoose.connection.close()
                      }

                    })
                  } else {

                    await mongo().then(async (mongoose) => {
                        try {
                          console.log("purging someone's coins")

                          const result = await coinSchema.findOne({
                            nick: who.toLowerCase()
                          })
                          if (result){
                            message.channel.send(who.toLowerCase() + " got deleted");
                            await coinSchema.deleteOne(result)
                          }
                          else{
                            message.channel.send("cant find that person");
                          }

                        }finally {
                          mongoose.connection.close()
                        }

                      })
                    }
                    })
                  }
                })
        }
