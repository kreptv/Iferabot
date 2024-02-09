const mongo = require('./mongo')
const command = require('./command')
const blobSchema = require('./schemas/blob-schema')

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');


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


    command(client, ['stealblob','blobsteal'], async (message) => {
      const {member, channel, content, guild} = message;

      let text = content;
      const split = text.split('//');

      if ((message.member.roles.cache.find(role => role.name === "Art Mods"))||(message.member.roles.cache.find(role => role.name === "ADMIMODS"))||(message.member.roles.cache.find(role => role.name === "Combat Mod"))||(message.member.roles.cache.find(role => role.name === "Meow Mod"))){

      if (split.length < 7){
        message.channel.send('enter as &stealblob //<ping user>//<blobname>//<image link>//<borntypes>//<voucherlist>!')
        return
      }

      split.shift()
      text = split.join(' ')

      await mongo().then(async (mongoose) => {
        try{
          await blobSchema.findOneAndUpdate({
            userId: getUserFromMention(split[0]),
            blobName: split[1].toLowerCase(),
          },{
            userId: getUserFromMention(split[0]),
            blobName: split[1].toLowerCase(),
            blobHandle: split[1],
            npc: false,
            artprompts: false,
            abridged: true,
            desc: 'No description provided.',
            voucherlist: split[4],
            borntypes: split[3],
            image: split[2],
            icon: split[2],
            str: 0,
            hea: 0,
            acc: 0,
            agi: 0,
            def: 0,
            mov: 0,
            end: 0,
          }, {
            upsert: true
          })
        }finally {
          mongoose.connection.close()
        }
        message.channel.send(split[0] + ' added/updated!');
      })
    }
    })

  command(client, 'addblob', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('enter as &addblob <blob name> <blobhandle>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          blobHandle: split[1],
          friendzy: 'No friendzy provided.',
          npc: false,
          artprompts: false,
          abridged: true,
          desc: 'No description provided.',
          voucherlist: 'N/A',
          borntypes: 'N/A',
          image: 'https://media.discordapp.net/attachments/629864359836778516/753724610964488333/150holder.png',
          icon: 'https://media.discordapp.net/attachments/629864359836778516/753724610964488333/150holder.png',
          str: 0,
          hea: 0,
          acc: 0,
          agi: 0,
          def: 0,
          mov: 0,
          end: 0,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })
  })

  command(client, 'addblobfull', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;
    const split = text.split(' ');

    if (split.length < 7){
      channel.send('enter as &addblobfull <blobname> <blobhandle> <icon link> <image link> <alignment> <friendzy>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          blobHandle: split[1],
          friendzy: split[5],
          alignment: split[4],
          npc: false,
          artprompts: false,
          abridged: true,
          desc: 'No description provided.',
          voucherlist: 'N/A',
          borntypes: 'N/A',
          image: split[3],
          icon: split[2],
          str: 0,
          hea: 0,
          acc: 0,
          agi: 0,
          def: 0,
          mov: 0,
          end: 0,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })
  })





  command(client, 'addfriendzy', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('enter as &addfriendzy <blob name> <friendzy name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          friendzy: split[1],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

      command(client, 'addborntypes', async (message) => {
        const {member, channel, content, guild} = message;
        let text = content;
        const split = text.split(' ');
        if (split.length != 2){
          channel.send('enter as &addborntypes <blob name>! the borntypes will appear as buttons!')
          return
        }
        split.shift()
        text = split.join(' ')


        const row = new MessageActionRow()
              .addComponents(
                new MessageButton()
                  .setCustomId('base')
                  .setLabel('Base')
                  .setStyle('SECONDARY'),
              )
              const row2 = new MessageActionRow()
                    .addComponents(
                      new MessageButton()
                        .setCustomId('water')
                        .setLabel('Water')
                        .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('rainbow')
                        .setLabel('Rainbow')
                        .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('snekkit')
                        .setLabel('Snekkit')
                        .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('plant')
                        .setLabel('Plant')
                        .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('battle')
                        .setLabel('Battle')
                        .setStyle('PRIMARY'),
                    )

        var collector
        const borntypemessage = await message.channel.send({content: "Select your blobling's borntypes!", components: [row, row2]})
        var borntypesstring = ""
        collector = borntypemessage.channel.createMessageComponentCollector({ time: 60000 });
        collector.on('collect', async i => {

          if (i.customId === 'water'){
            borntypesstring = borntypesstring + "\n Waterborn"
            await i.update({content: "Selected waterborn!", components: [row, row2]})
          }else if (i.customId === 'rainbow'){
            borntypesstring = borntypesstring + "\n Rainbowborn"
            await i.update({content: "Selected rainbowborn!", components: [row, row2]})
          }else if (i.customId === 'snekkit'){
            borntypesstring = borntypesstring + "\n Snekkitborn"
            await i.update({content: "Selected snekkitborn!", components: [row, row2]})
          }else if (i.customId === 'plant'){
            borntypesstring = borntypesstring + "\n Plantborn"
            await i.update({content: "Selected plantborn!", components: [row, row2]})
          }else if (i.customId === 'battle'){
            borntypesstring = borntypesstring + "\n Battleborn"
            await i.update({content: "Selected battleborn!", components: [row, row2]})
          }else if (i.customId === 'base'){
            borntypesstring = "\n Base"
            await i.update({content: "Selected base!", components: [row, row2]})
          }
          if (borntypesstring.startsWith("\n")){
            borntypesstring = borntypesstring.substring(2)
          }

          await mongo().then(async (mongoose) => {
                try{
                  await blobSchema.findOneAndUpdate({
                    userId: message.member.id,
                    blobName: split[0].toLowerCase(),
                  },{
                    userId: message.member.id,
                    blobName: split[0].toLowerCase(),
                    borntypes: borntypesstring,
                  }, {
                    upsert: true
                  })
                }finally {
                }
              })
            });
            client.on('messageCreate', async(message) => {
              if (message.author.id ===borntypemessage.author.id){
                collector.stop()
              }
            })
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
      })



      command(client, 'addmutations', async (message) => {
        const {member, channel, content, guild} = message;
        let text = content;
        const split = text.split(' ');
        if (split.length != 2){
          channel.send('enter as &addvoucherlist <blob name>! You will then be prompted to enter the mutations in a list!')
          return
        }
        split.shift()
        text = split.join(' ')

        message.channel.send("Please send the mutations in one of these formats: \n" +
        "Many Legs, Sparkle blood \n" +
        "- OR -\n"+
        "Many Legs (Leg 3), Sparkle blood (Othersparkleblood 1, Gradient 1)\n"+
        "If there are no mutations, write *none*!")

        const filter = m => m.author.id == message.author.id;
        var collector = channel.createMessageCollector({ filter, max: 1, time: 60000 });
        collector.on('collect', async collected => {

        var orig = collected.content.toLowerCase()


          await mongo().then(async (mongoose) => {
                try{
                  await blobSchema.findOneAndUpdate({
                    userId: message.member.id,
                    blobName: split[0].toLowerCase(),
                  },{
                    userId: message.member.id,
                    blobName: split[0].toLowerCase(),
                    mutations: orig,
                  }, {
                    upsert: true
                  })
                }finally {
                  mongoose.connection.close()
                }
                message.channel.send(split[0] + ' added/updated!');
              })
            });
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    })








  command(client, 'addvoucherlist', async (message) => {
    const {member, channel, content, guild} = message;
    let text = content;
    const split = text.split(' ');
    if (split.length != 2){
      channel.send('enter as &addvoucherlist <blob name>! You will then be prompted to enter the voucherlist!')
      return
    }
    split.shift()
    text = split.join(' ')

    message.channel.send("Please send the voucherlist in this format: \n" +
    "head 1, teeth 1, shapechange 4, eye 1, wing 2, frills 2, ear 1, tail 2, leg 12, marking 8, othertentacletail 1, otherscythelegs 1 ")

    const filter = m => m.author.id == message.author.id;
    var collector = channel.createMessageCollector({ filter, max: 1, time: 60000 });
    collector.on('collect', async collected => {

    var orig = collected.content.toLowerCase()
    var voucherlist1 = orig.split(',');
    var voucherlist1strings = []
    var voucherlist1vals = []

    var printstring = ""

    for (i = 0; i < voucherlist1.length; i++) {
      voucherlist1[i] = voucherlist1[i].trim();
    }
    voucherlist1 = voucherlist1.sort();
    for (i = 0; i < voucherlist1.length; i++) {
      voucherlist1[i] = voucherlist1[i].trim();
      printstring = printstring + " // " + voucherlist1[i];
    }
    printstring = printstring.substring(3)
    message.channel.send('Voucherlist: ' + printstring);

    for (i = 0; i < (2 * voucherlist1.length); i++) {
      var temp1 = voucherlist1.toString().split(" ");
      temp1 = temp1.toString().split(",");
      if (isNaN(temp1[i])){
      voucherlist1strings[i] = temp1[i].toLowerCase();
      }
      else {
        message.channel.send("I can't parse the voucherlist. Please re-enter or ping Krepta if I'm broken again.");
        return;
      }
      if (!(isNaN(temp1[i+1]))){
      voucherlist1vals[i] = temp1[i + 1];
      }
      else {
        message.channel.send("I can't parse the voucherlist. Please re-enter or ping Krepta if I'm broken again.");
        return;
      }
      i++
    }

      await mongo().then(async (mongoose) => {
            try{
              await blobSchema.findOneAndUpdate({
                userId: message.member.id,
                blobName: split[0].toLowerCase(),
              },{
                userId: message.member.id,
                blobName: split[0].toLowerCase(),
                voucherlist: orig,
              }, {
                upsert: true
              })
            }finally {
              mongoose.connection.close()
            }
            message.channel.send(split[0] + ' added/updated!');
          })
        });
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
})






  command(client, ['addbleedstatus', 'addbleed', 'addbleedavailability'], async (message) => {
    const {member, channel, content, guild} = message;
    let text = content;
    const split = text.split(' ');
    if (split.length != 2){
      channel.send('enter as &addbleedstatus <blob name>! You will then have an option to select bleed status!')
      return
    }
    split.shift()
    text = split.join(' ')


    const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setCustomId('open')
              .setLabel('Open!')
              .setStyle('SUCCESS'),
            new MessageButton()
              .setCustomId('closed')
              .setLabel('Closed!')
              .setStyle('DANGER'),
            new MessageButton()
              .setCustomId('ask')
              .setLabel('Ask me!')
              .setStyle('PRIMARY'),
            new MessageButton()
              .setCustomId('ic')
              .setLabel('IC Bleeds only!')
              .setStyle('PRIMARY'),
          )

    var collector
    const sentmessage = await message.channel.send({content: "Bleed availability?", components: [row]})
    var responsestring = ""
    collector = sentmessage.channel.createMessageComponentCollector({ time: 60000 });


    collector.on('collect', async i => {

    if (i.customId === 'open'){
      responsestring = "Open!"
    await i.update({content: split[0] + " is open for bleedings!", components: []})
    }else if (i.customId === 'closed'){
      responsestring = "Closed!"
    await i.update({content: split[0] + " is closed for bleedings!", components: []})
  }else if (i.customId === 'ask'){
      responsestring = "Ask me!"
    await i.update({content: split[0] + " is possibly open for bleedings!", components: []})
  }else if (i.customId === 'ic'){
      responsestring = "IC bleeds only!"
    await i.update({content: split[0] + " is only open for in-character bleedings!", components: []})
  }

  await mongo().then(async (mongoose) => {
        try{
          await blobSchema.findOneAndUpdate({
            userId: message.member.id,
            blobName: split[0].toLowerCase(),
          },{
            userId: message.member.id,
            blobName: split[0].toLowerCase(),
            bleedavailability: responsestring,
          }, {
            upsert: true
          })
        }finally {
        }
      })



  })
  client.on('messageCreate', async(message) => {
    if (message.author.id === sentmessage.author.id){
      collector.stop()
    }
  })

})



  command(client, ['adddesc', 'adddescription'], async (message) => {
    const {member, channel, content, guild} = message;
    let text = content;
    const split = text.split(' ');
    if (split.length != 2){
      channel.send('enter as &adddesc <blob name>! You will then be prompted to enter the description!')
      return
    }
    split.shift()
    text = split.join(' ')

    message.channel.send('Description in plain text?')

    const filter = m => m.author.id == message.author.id;
    var collector = channel.createMessageCollector({ filter, max: 1, time: 60000 });
    collector.on('collect', async collected => {

    var desc = collected.content;

      await mongo().then(async (mongoose) => {
            try{
              await blobSchema.findOneAndUpdate({
                userId: message.member.id,
                blobName: split[0].toLowerCase(),
              },{
                userId: message.member.id,
                blobName: split[0].toLowerCase(),
                desc: desc,
              }, {
                upsert: true
              })
            }finally {
              mongoose.connection.close()
            }
            message.channel.send(split[0] + ' added/updated!');
          })
        });
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  })

  command(client, 'addicon', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('enter as &addicon <blob name> <icon link>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          icon: split[1],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'addimage', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('enter as &addimage <blob name> <image link>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          image: split[1],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'addstats', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 9){
      channel.send('enter as &addstats <blob name> <STR> <HEA> <ACC> <AGI> <DEF> <MOV> <END>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          str: split[1],
          hea: split[2],
          acc: split[3],
          agi: split[4],
          def: split[5],
          mov: split[6],
          end: split[7],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'blobhandle', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('&blobhandle <blob name> <blobhandle>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          blobHandle: split[1],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'addartprompts', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('&addartprompts <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          artprompts: true,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'removeartprompts', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('&removeartprompts <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          artprompts: false,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'addalignment', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 3){
      channel.send('enter as &addalignment <blob name> <alignment>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          alignment: split[1],
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'deleteblob', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('enter as &deleteblob <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        const result = await blobSchema.findOne({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        })

        //message.channel.send(result.blobName);
        if (result){
            message.channel.send(split[0] + ' deleted!');
            await blobSchema.deleteOne({
              userId: message.member.id,
              blobName: split[0].toLowerCase(),
            });
        }

      }finally {
        mongoose.connection.close()
      }
    })

  })

  command(client, 'setnpc', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('enter as &setnpc <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          npc: true,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'unsetnpc', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('enter as &unsetnpc <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          npc: false,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })


  command(client, 'setfriendzyasname', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('enter as &setfriendzyasname <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          friendzyasname: true,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

  command(client, 'unsetfriendzyasname', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split(' ');

    if (split.length < 2){
      channel.send('enter as &unsetfriendzyasname <blob name>!')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await blobSchema.findOneAndUpdate({
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
        },{
          userId: message.member.id,
          blobName: split[0].toLowerCase(),
          friendzyasname: false,
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
      message.channel.send(split[0] + ' added/updated!');
    })

  })

}
