//cd Documents
//cd bloblot
//node index.js

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const command = require('./command')
const mongo = require('./mongo')
const backlog = require('./backlog')
const random = require('./random')
const bleed = require('./bleed2')
const ammo = require('./ammo')
const addlink = require('./addlink')
const hug = require('./hug')
const debugbleed = require('./debugbleed')
const focus = require('./focus')
const say = require('./say')
const help = require('./help')
const mutate = require('./mutate')
const mutlist = require('./mutlist')
const mutlistSchema = require('./schemas/mutlist-schema')
const hexblend = require('./hexblend')
const teach = require('./teach')
const coin = require('./coin')
const assSchema = require('./schemas/ass-schema')
const coinSchema = require('./schemas/coin-schema')
const timerSchema = require('./schemas/timer-schema')
const retrievecoins = require('./retrievecoins')
const bleed3 = require('./bleed3')
const dieroll = require('./dieroll')
const pat = require('./pat')
const dex = require('./dex')
const addblob = require('./addblob')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const blobprofiles= require('./blobprofiles')

client.on('ready', async (message) => {
      console.log('BLOBBOT IN THE HOOUUUSEEE')

      await mongo().then(mongoose => {
        try {
          console.log('Connected to mongo!')
        } finally {
          mongoose.connection.close()
        }
      })
      var lastAss = 0;
      var lastAssObtainer;
      var cooldown = 86400000;

      //welcome(client)
      backlog(client)
      //mutlist(client)
      pat(client);
      blobprofiles(client);
      dex(client);
      retrievecoins(client);
      bleed3(client);

      client.on('messageCreate', async(message) => {
        var { content } = message;
          const cache = {}
          content = content.toLowerCase();

          if (content.includes('&date.now()')){
            message.channel.send("test: " +Date.now());
          }


        if (content.includes('ass') && (!message.author.bot)) {


          await mongo().then(async (mongoose) => { // retrieve lastass
            try {

              var doc = await timerSchema.findOne();

              lastAss = doc.timer;
              lastAssObtainer = doc.id;


            } finally {
              mongoose.connection.close()
            }
          }) // end lastass

          var indexofass = content.indexOf('ass');
          var iass2 = indexofass + 3;
          var iass3 = indexofass - 1;
          if ( (content.charAt(iass2) == ' ' || iass2 == content.length) && (content.charAt(iass3) == ' ' || iass3 == -1) ){ //if letter after and before ass is not a letter

            if ((Date.now() - lastAss) > cooldown) {
              message.channel.send('https://images-ext-2.discordapp.net/external/vBrB-yXWtmnNL7mNFVB33GtJWCGmf7OgaG0iDz-z_X8/https/media.discordapp.net/attachments/306626070084452353/832137312505823282/assa.png');
              message.channel.send('WINNER WINNER WINNER! CONGRATS, YOU ARE THE OFFICIAL ASS OF THE DAY :heart:');
              lastAss = Date.now();
              var assRole = message.guild.roles.cache.find(role => role.name === "Assa's Blessing");


              message.guild.members.cache.forEach(member => { // remove previous assrole
                if (member.roles.cache.find(role => role.name === "Assa's Blessing")){
                member.roles.remove(assRole);
              }
            })

            let player = await message.guild.members.fetch(lastAssObtainer);
            player.roles.remove(assRole);

              message.member.roles.add(assRole); // give ass role

              await mongo().then(async (mongoose) => { // Add to timerSchema
                try{
                  await timerSchema.findOneAndUpdate({
                  },{
                    timer: Date.now(),
                    id: message.member.id
                  }, {
                    upsert: true
                  })
                }finally {
                  mongoose.connection.close()
                }
              })

              await mongo().then(async (mongoose) => { // Add to user's asscount
                try{
                  await assSchema.findOneAndUpdate({
                    userId: message.member.id
                  },{
                    nick: message.member.displayName.toLowerCase(),
                    $inc: {
                      asscount: 1,
                    },
                  }, {
                    upsert: true
                  })
                }finally {
                  mongoose.connection.close()
                }
              })
          } // END NORMAL ASS

            /*else {
              message.channel.send('No ass 4 u yet, '+ (Date.now() - lastAss));
            }*/
          }
          //var cooldown = 86400000; // 24 hours in ms
        }



    })

    command(client, ['assking', 'assqueen', 'asscount', 'assleaderboard'], async(message) => {
      await mongo().then(async (mongoose) => {
        try {

          const result = await assSchema.find().sort({ asscount: -1 });

          var allthings = "";

          if (result) {

            result.forEach(element => allthings = allthings + "\n**" + element.nick + ": **" + element.asscount);
            message.channel.send(allthings);
          }

        } finally {
          mongoose.connection.close()
        }

      })
    })

    command(client, ['patking', 'patqueen', 'patcount', 'patleaderboard'], async(message) => {
      await mongo().then(async (mongoose) => {
        try {

          const result = await assSchema.find().sort({ patcount: -1 });

          var allthings = "";

          if (result) {

            result.forEach(element => allthings = allthings + "\n**" + element.nick + ": **" + element.patcount);
            message.channel.send(allthings);
          }

        } finally {
          mongoose.connection.close()
        }

      })
    })


    command(client, ['bleedsheet'], message => {
      if (message.member.roles.cache.find(role => role.name === "Art Mods")){
          message.channel.send('bleedsheetlinkhere');
      }
    })
    command(client, ['assreset'], message => {

      var ms = (cooldown - (Date.now()-lastAss))
      var seconds = Math.floor((ms / 1000) % 60);
      var minutes = Math.floor((ms / 1000 / 60) % 60);
      var hours = Math.floor((ms  / 1000 / 3600 ) % 24)

      var print = '';

      if (ms >= 0){
        print = 'time until next ass: ' + hours + ':' + minutes + ':' + seconds
      }
      else{
        print = "THE ASS IS READY FOR ITS NEXT TAKER."
      }



          message.channel.send(print);
    })




        coin(client); addlink(client); focus(client); mutate(client); hexblend(client);

        //teach(client);

        command(client, ['resetasstimer'], async message => {
          await mongo().then(async (mongoose) => { // Add to timerSchema
            try{
              await timerSchema.findOneAndUpdate({
              },{
                timer: 0
              }, {
                upsert: true
              })
            }finally {
              mongoose.connection.close()
            }
          })
          message.channel.send('ass timer reset!');

        })

        command(client, ['coinflip'], message => {
          var prob = (Math.floor(Math.random(1) * (2)));
          if (prob == 0) {
            message.channel.send('heads!');
          }
          else if (prob == 1) {
            message.channel.send('tails!');
          }
        })

        command(client, 'ifera', message => {
          message.channel.send('THATS ME! :D');
        })

        addblob(client)

        random(client)

        dieroll(client)
        mutlist(client)

        //PING PONG
        /*command(client, ['ping me harder', 'test'], (message) => {
          message.channel.send('https://i.imgur.com/kRkvc1b.jpg')
        })*/

        /*command(client, ['penis'], (message) => {
          message.channel.send('PENIS')
        })*/

        /*command(client, ['s'], (message) => {
          client.channels.cache.get('672619007442026526').send('👁️ 👄 👁️')
        })

        command(client, ['g'], (message) => {
          client.channels.cache.get('796545920149880892').send('gimme ur dolla')
        })*/

        /*command(client, ['DMDottie'], (message) => {
          client.users.cache.get('431925519978725378').send('gay');
        }); command(client, ['DMMe'], (message) => {
          client.users.cache.get('192453379816030208').send('https://images-na.ssl-images-amazon.com/images/I/4188hmJmDXL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFIVE%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg');
        }); command(client, ['DMAsha'], (message) => {
          client.users.cache.get('542060726353657866').send('gay');
        }); command(client, ['DMSae'], (message) => {
          client.users.cache.get('253024338960318466').send('gay');
        });*/

        //BLEEDS
        bleed(client); debugbleed(client);

        help(client); say(client);

        hug(client);

        /*command(client, ['test'], async(message) => {
          const test = new MessageActionRow()
          			.addComponents(
          				new MessageButton()
          					.setCustomId('primary')
          					.setLabel('Primary')
          					.setStyle('PRIMARY'),
          			);

          const embed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Some title')
          .setURL('https://discord.js.org')
          .setDescription('Some description here');;

          await message.reply({ content: 'Pong!', embeds: [embed], components: [test] });

          const filter = i => i.member.id === member.id;

          const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

          collector.on('collect', async i => {
           if (i.customId === 'test') {
             await i.update({ content: 'A button was clicked!', components: [] });
           }
          });

          collector.on('end', collected => console.log(`Collected ${collected.size} items`));
        });*/






      })




    client.login(config.token)
