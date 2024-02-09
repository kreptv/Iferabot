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
        	if (!mention) return null;

        	if (mention.startsWith('<@') && mention.endsWith('>')) {
        		mention = mention.slice(2, -1);

        		return mention;
        	}
        }



        function generateEmbedAllBloblings( allthings ){
            var embedAllBloblings = new MessageEmbed()
            .setColor('#0x863d02')
            .setTitle('All Bloblings')
            .setDescription(allthings);
            return embedAllBloblings;
        }

        function generateEmbedPlayerBloblings( allthings, player){
            var embedAllBloblings = new MessageEmbed()
            .setColor('#0x863d02')
            .setTitle(player+"'s Profile")
            .setDescription(allthings);
            return embedAllBloblings;
        }

        function generateBloblingPage1( blobName, icon, image, owner, blobHandle, alignment, friendzy){
            var embedAllBloblings = new MessageEmbed()
            .setColor('#0x863d02')
            .setTitle(blobName.toUpperCase())
            .setDescription("<@"+owner + ">'s blobling")
            .setThumbnail(icon)
            .setImage(image)
            .addFields(
		            { name: 'Blobhandle', value: "// " + blobHandle},
		            { name: 'Alignment', value: "// " + alignment},
                { name: 'Friendzy', value: "// " + friendzy},
              )
            return embedAllBloblings;
        }

        function generateBloblingPage2( blobName, icon, image, owner, description, bleedavailability){
            var embedAllBloblings = new MessageEmbed()
            .setColor('#0x863d02')
            .setTitle(blobName.toUpperCase())
            .setDescription("<@"+owner + ">'s blobling")
            .setThumbnail(icon)
            .setImage(image)
            .addFields(
		            { name: 'Bleed Availability', value: "// " + bleedavailability},
		            { name: 'Description', value: "// " + description},
              )
            return embedAllBloblings;
        }

        function generateBloblingPage3( blobName, icon, image, owner, borntypes, mutations, voucherlist, acc, agi, def, end, hea, mov, str){
            var embedAllBloblings = new MessageEmbed()
            .setColor('#0x863d02')
            .setTitle(blobName.toUpperCase())
            .setDescription("<@"+owner + ">'s blobling")
            .setThumbnail(icon)
            .setImage(image)
            .addFields(
                { name: 'Borntypes', value: "// " + borntypes},
                { name: 'Mutations', value: "// " + mutations},
		            { name: 'Voucherlist', value: "// " + voucherlist},
                { name: 'ACC', value: "// " +acc, inline: true },
                { name: 'AGI', value: "// " +agi, inline: true },
                { name: 'DEF', value: "// " +def, inline: true },
                { name: 'END', value: "// " +end, inline: true },
                { name: 'HEA', value: "// " +hea, inline: true },
                { name: 'MOV', value: "// " +mov, inline: true },
                { name: 'STR', value: "// " +str, inline: true },
              )
            return embedAllBloblings;
        }


        function generateRows( number ){
          if (number === 1){ // generate row for all bloblings
            const row = new MessageActionRow()
                  .addComponents(
                    new MessageButton()
                      .setCustomId('ppageall')
                      .setLabel('◀️')
                      .setStyle('PRIMARY'),
                    new MessageButton()
                      .setCustomId('npageall')
                      .setLabel('▶️')
                      .setStyle('PRIMARY'),
                  );
                  return row;
          }
          if (number === 2){ // generate row for all player bloblings
            const row = new MessageActionRow()
                  .addComponents(
                    new MessageButton()
                      .setCustomId('ppageplayer')
                      .setLabel('◀️')
                      .setStyle('PRIMARY'),
                    new MessageButton()
                      .setCustomId('npageplayer')
                      .setLabel('▶️')
                      .setStyle('PRIMARY'),
                        new MessageButton()
                          .setCustomId('firstblobplayer')
                          .setLabel('⏺️')
                          .setStyle('PRIMARY'),
                  );
                  return row;
          }
          if (number === 3){ // generate row for a player's blobling
            const row = new MessageActionRow()
                  .addComponents(
                    new MessageButton()
                      .setCustomId('ppageblob')
                      .setLabel('◀️')
                      .setStyle('PRIMARY'),
                    new MessageButton()
                      .setCustomId('npageblob')
                      .setLabel('▶️')
                      .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('pblob')
                        .setLabel('⏪')
                        .setStyle('PRIMARY'),
                      new MessageButton()
                        .setCustomId('nblob')
                        .setLabel('⏩')
                        .setStyle('PRIMARY'),
                        new MessageButton()
                          .setCustomId('home')
                          .setLabel('⏹️')
                          .setStyle('PRIMARY'),
                  );
                  return row;
          }
          if (number === 4){ // generate row for an unsorted blobling
            const row = new MessageActionRow()
                  .addComponents(
                    new MessageButton()
                      .setCustomId('ppageblob1')
                      .setLabel('◀️')
                      .setStyle('PRIMARY'),
                    new MessageButton()
                      .setCustomId('npageblob2')
                      .setLabel('▶️')
                      .setStyle('PRIMARY'),
                  );
                  return row;
          }

        }


        function generateButtonResponses(smallindex, largeindex, collector, sentembed, split, result, nick){

          collector.on('collect', async i => {

            await mongo().then(async (mongoose) => {
              try{

                //1
                var fullmaxindex = await blobSchema.countDocuments()
                if ((i.customId === 'ppageall')) {
                  if (largeindex > 20){ // works
                    largeindex = largeindex - 20; allthings = "";
                    await mongo().then(async (mongoose) => {
                      result = await blobSchema.find().sort({ blobName: 1 }).limit(20).skip(largeindex);
                        if (result){
                          result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1)+ " --- <@" + element.userId+">");
                        await i.update({content: 'Searching...', embeds: [generateEmbedAllBloblings(allthings)], components: [generateRows(1)]})
                        }
                      })
                  }
                  else if (largeindex <= 20){ // doesnt work
                    await i.update({ content: 'Nothing before this.', components: [generateRows(1)]})
                }
                }
                else if ((i.customId === 'npageall')) {
                if (largeindex < (fullmaxindex-20)){ // works
                  largeindex = largeindex + 20; allthings = "";
                  await mongo().then(async (mongoose) => {
                    result = await blobSchema.find().sort({ blobName: 1 }).limit(20).skip(largeindex);
                      if (result){
                        result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1)+ " --- <@" + element.userId+">");
                      await i.update({content: 'Searching...', embeds: [generateEmbedAllBloblings(allthings)], components: [generateRows(1)]})
                      }
                    })
                }
                else { // doesnt work
                  await i.update({ content: "That's the end.", components: [generateRows(1)]})
                }
                }

                //2

                split = split.trim()

                var maxindex = await blobSchema.countDocuments({userId: split})
                if ((i.customId === 'ppageplayer')) {
                  if (largeindex > 20){ // works
                    largeindex = largeindex - 20; allthings = "";
                    await mongo().then(async (mongoose) => {
                      result = await blobSchema.find({userId: split}).sort({ blobName: 1 }).limit(20).skip(largeindex-20);
                        if (result){
                          result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1));
                        await i.update({content: 'Searching...', embeds: [generateEmbedPlayerBloblings(allthings, nick)], components: [generateRows(2)]})
                        }
                      })
                  }
                  else if (largeindex <= 20){ // doesnt work
                    await i.update({ content: "This is the first page!", components: [generateRows(2)]})
                }
                }
                else if ((i.customId === 'npageplayer')) {
                if (0 < (maxindex-largeindex)){ // works
                  await mongo().then(async (mongoose) => {
                    largeindex = largeindex + 20; allthings = "";
                    result = await blobSchema.find({userId: split}).sort({ blobName: 1 }).limit(20).skip(largeindex-20);
                      if (result){
                        result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1));
                      await i.update({content: 'Searching...', embeds: [generateEmbedPlayerBloblings(allthings, nick)], components: [generateRows(2)]})
                      }
                    })
                }
                else { // doesnt work
                  await i.update({ content: "Nothing after this.", components: [generateRows(2)]})
                }
                }
                else if ((i.customId === 'firstblobplayer')) {
                  result = await blobSchema.findOne({userId: split}).sort({ blobName: 1 }).skip(largeindex-20);
                    if (result){
                      await i.update({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})
                      collector2 = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                      smallindex = 1; largeindex = 20;
                      generateButtonResponses(smallindex, largeindex, collector2, sentembed, split, result, nick)
                      collector.stop()
                    }
                }

                //3

                if ((i.customId === 'ppageblob')) {

                  if (smallindex === 1){
                    smallindex = 3;
                    await i.update({embeds: [generateBloblingPage3( result.blobName, result.icon, result.image, result.userId, result.borntypes, result.mutations, result.voucherlist, result.acc, result.agi, result.def, result.end, result.hea, result.mov, result.str)], components: [generateRows(3)]})
                  } //
                  else if (smallindex === 2){
                    smallindex = 1;
                    await i.update({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})
                  }
                  else if (smallindex === 3){
                    smallindex = 2;
                    await i.update({embeds: [generateBloblingPage2( result.blobName, result.icon, result.image, result.userId, result.desc, result.bleedavailability)], components: [generateRows(3)]})
                  } //
                }
                else if ((i.customId === 'npageblob')) {

                  if (smallindex === 2){
                    smallindex = 3;
                    await i.update({embeds: [generateBloblingPage3( result.blobName, result.icon, result.image, result.userId, result.borntypes, result.mutations, result.voucherlist, result.acc, result.agi, result.def, result.end, result.hea, result.mov, result.str)], components: [generateRows(3)]})
                  } //
                  else if (smallindex === 3){
                    smallindex = 1;
                    await i.update({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})
                  }
                  else if (smallindex === 1){
                    smallindex = 2;
                    await i.update({embeds: [generateBloblingPage2( result.blobName, result.icon, result.image, result.userId, result.desc, result.bleedavailability)], components: [generateRows(3)]})
                  } //
                }
                else if ((i.customId === 'pblob')) {



                  var result2 = await blobSchema.find({userId: split}).sort({ blobName: 1 });
                    if (result2){
                      var allthings = "";
                      result2.forEach(element => allthings = allthings + "/!/" + element.blobName)
                      allthings = allthings.split("/!/")
                      var currindex = allthings.indexOf(result.blobName)
                    }
                    if ((currindex > 1)){
                      currindex = currindex -2;
                    result = await blobSchema.findOne({userId: split}).sort({ blobName: 1 }).skip((currindex));
                      if (result){
                        await i.update({content: "Searching... Index "+ (currindex +1)+".", embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})
                        collector2 = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                        smallindex = 1;
                        generateButtonResponses(smallindex, largeindex, collector2, sentembed, split, result, nick)
                        collector.stop()
                      }
                    }else {
                      await i.update({content: "That's the first blobling!"})
                    }
                }
                else if ((i.customId === 'nblob')) {


                  var result2 = await blobSchema.find({userId: split}).sort({ blobName: 1 });
                    if (result2){
                      var allthings = "";
                      result2.forEach(element => allthings = allthings + "/!/" + element.blobName)
                      allthings = allthings.split("/!/")
                      var currindex = allthings.indexOf(result.blobName)
                    }
                    if ((currindex < maxindex)){
                    result = await blobSchema.findOne({userId: split}).sort({ blobName: 1 }).skip((currindex));
                      if (result){
                        await i.update({content: "Searching... Index "+ (currindex +1)+".", embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})
                        collector2 = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                        smallindex = 1;
                        generateButtonResponses(smallindex, largeindex, collector2, sentembed, split, result, nick)
                        collector.stop()
                      }
                    }else {
                      await i.update({content: "That's the last blobling!"})
                    }
                }
                else if ((i.customId === 'home')) {
                    smallindex = 0;
                    largeindex = 0;
                        result = await blobSchema.find({userId: split}).sort({ blobName: 1 }).limit(20).skip(largeindex);
                          if (result){
                            var allthings = "";
                            result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1));
                          await i.update({content: 'Searching...', embeds: [generateEmbedPlayerBloblings(allthings, nick)], components: [generateRows(2)]})
                          collector2 = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                      largeindex = 20;
                      generateButtonResponses(smallindex, largeindex, collector2, sentembed, split, result, nick)
                      collector.stop()
                    }
                }

                if ((i.customId === 'ppageblob1')) {

                  if (smallindex === 1){
                    smallindex = 3;
                    await i.update({embeds: [generateBloblingPage3( result.blobName, result.icon, result.image, result.userId, result.borntypes, result.mutations, result.voucherlist, result.acc, result.agi, result.def, result.end, result.hea, result.mov, result.str)], components: [generateRows(4)]})
                  } //
                  else if (smallindex === 2){
                    smallindex = 1;
                    await i.update({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(4)]})
                  }
                  else if (smallindex === 3){
                    smallindex = 2;
                    await i.update({embeds: [generateBloblingPage2( result.blobName, result.icon, result.image, result.userId, result.desc, result.bleedavailability)], components: [generateRows(4)]})
                  } //
                }
                else if ((i.customId === 'npageblob2')) {

                  if (smallindex === 2){
                    smallindex = 3;
                    await i.update({embeds: [generateBloblingPage3( result.blobName, result.icon, result.image, result.userId, result.borntypes, result.mutations, result.voucherlist, result.acc, result.agi, result.def, result.end, result.hea, result.mov, result.str)], components: [generateRows(4)]})
                  } //
                  else if (smallindex === 3){
                    smallindex = 1;
                    await i.update({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(4)]})
                  }
                  else if (smallindex === 1){
                    smallindex = 2;
                    await i.update({embeds: [generateBloblingPage2( result.blobName, result.icon, result.image, result.userId, result.desc, result.bleedavailability)], components: [generateRows(4)]})
                  } //
                }








              }finally{

              }
            })
          })
          client.on('messageCreate', async(message) => {
            if (message.author.id === sentembed.author.id){
              collector.stop()
            }
          })











        }







        command(client, ['bloblist', 'b'], async message => {
          const {member, channel, content, guild} = message
          let text = content.toLowerCase()

      const split = text.split(' ');
        if (split.length < 2){

        await mongo().then(async (mongoose) => {
        try {
          var result = await blobSchema.find().sort({ blobName: 1 }).limit(20);
          var allthings = "";

          if (result) {
            result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1) + " --- <@" + element.userId+">");

            const sentembed = await message.channel.send({embeds: [generateEmbedAllBloblings(allthings)], components: [generateRows(1)]})

            collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
            largeindex = 20; smallindex = 0;
            var name = "all"
            var nick = null;

            generateButtonResponses(smallindex, largeindex, collector, sentembed, name, result, nick)

          }
        } finally {
        }
        })
        }
        else{

          if (message.mentions.users.first()){

              await mongo().then(async (mongoose) => {
                  try {

                    var result = await blobSchema.find({userId: split[1].match(/\d+/)}).sort({ blobName: 1 }).limit(20);
                    var allthings = "";

                    if (result){

                      result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1));


                      var name = result[1].userId
                      generatePlayerProfileResults(name,message,allthings,result)


            }

          } finally {
          }
          })

        }  else{
          await mongo().then(async (mongoose) => {
          var alias = split[1].toLowerCase()
          try{
          var result2 = await assSchema.findOne(  { aliases:  alias  });
        }catch{
          message.channel.send("who dat")
          return
        }

        if (result2){
            var name = result2.userId


            var result = await blobSchema.find({userId: name}).sort({ blobName: 1 }).limit(20);
            var allthings = "";

            if (result){

              result.forEach(element => allthings = allthings + "\n" + element.blobName.charAt(0).toUpperCase() + element.blobName.slice(1));


              generatePlayerProfileResults(name, message,allthings,result)
            }

    }
  })

        }
      }
      })





      async function generatePlayerProfileResults(name, message,allthings,result){

          try {
            var nick = await client.users.fetch(name);
            nick = nick.username;
            const sentembed = await message.channel.send({embeds: [generateEmbedPlayerBloblings(allthings, nick)], components: [generateRows(2)]})
            var collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
            largeindex = 20; smallindex = 0;
            generateButtonResponses(smallindex, largeindex, collector, sentembed, name, result, nick)
          }catch{
          }


      }























          command(client, ['retrieveblob', 'p', 'profile'], async (message) => {
            const {member, channel, content, guild} = message;

            let text = content;

            const split = text.split(' ');

            if (split.length < 2){
              channel.send('enter as &retrieveblob <blob name>!')
              return
            }

            split.shift()
            text = split.join(' ')

            var blob = split[0].toLowerCase();

            await mongo().then(async (mongoose) => {
                try {

                  const result = await blobSchema.findOne({
                    blobName: blob.toLowerCase()
                  })

                  if (result){

                      const sentembed = await message.channel.send({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(3)]})

                      collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                      largeindex = 20; smallindex = 1;
                      var name = result.userId
                      try {
                        var nick = await client.users.fetch(name);
                        nick = nick.username;

                        generateButtonResponses(smallindex, largeindex, collector, sentembed, name, result, nick)
                      }catch{
                      }

                  }
                  else{
                    message.channel.send("No blob indexed under that name.");
                  }

                }finally {
                  mongoose.connection.close()
                }

              })

          })









          command(client, ['artpromptblob'], async (message) => {
            const {member, channel, content, guild} = message;

            let text = content;

            const split = text.split(' ');

            split.shift()
            text = split.join(' ')

            await mongo().then(async (mongoose) => {
                try {

                  var n = await blobSchema.countDocuments({artprompts: true});

                  var r = Math.floor(Math.random() * n);

                  var result = await blobSchema.findOne({artprompts: true}).skip(r);

                  if (result){

                      const sentembed = await message.channel.send({embeds: [generateBloblingPage1( result.blobName, result.icon, result.image, result.userId, result.blobHandle, result.alignment, result.friendzy)], components: [generateRows(4)]})

                      collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
                      largeindex = 20; smallindex = 1;
                      var name = "na"
                      const nick = "na"

                      generateButtonResponses(smallindex, largeindex, collector, sentembed, name, result, nick)

                  }
                  else{
                    message.channel.send("No blob indexed under that name.");
                  }

                }finally {
                  mongoose.connection.close()
                }

              })

          })




      }
