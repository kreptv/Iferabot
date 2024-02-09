const mongo = require('./mongo')
const command = require('./command')
const dexSchema = require('./schemas/dex-schema')

module.exports = (client) => {

  const cache = {}

  async function addentry(name, link, desc, image){
    await mongo().then(async (mongoose) => {
      try{
        await dexSchema.findOneAndUpdate({
          name: name,
        },{
          name: name,
          link: link,
          desc: desc,
          image: image,
        }, {
          upsert: true,
        })
      }finally {
        mongoose.connection.close()
      }
  })
  }

  command(client, 'addentry', async message => {
    if (message.member.roles.cache.find(r => r.name === "Art Mods" )){
    const {member, channel, content, guild} = message

    let text = content

    const split = text.split(' ')

    if (split.length < 2){
      message.channel.send('make sure you enter a name!')
      return
    }
    var name = split[1].toLowerCase();

      message.channel.send('Dex name?\nPlease enter exactly as one of the following: flora, fauna, pet, npc, player items, bleeding items, blobling type')

      message.channel.awaitMessages(m => m.author.id == message.author.id,
          {max: 1, time: 60000}).then(collected => {
              // only accept messages by the user who sent the command
                // accept only 1 message, and return the promise after 60s

                // first (and, in this case, only) message of the collection
                var link = collected.first().content;
                message.channel.send('Image link?')

                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    {max: 1, time: 60000}).then(collected => {
                        // only accept messages by the user who sent the command
                          // accept only 1 message, and return the promise after 60s

                          // first (and, in this case, only) message of the collection
                          var image = collected.first().content;
                          message.channel.send('Description in plain text?')


                          message.channel.awaitMessages(m => m.author.id == message.author.id,
                              {max: 1, time: 60000}).then(collected => {
                                  // only accept messages by the user who sent the command
                                    // accept only 1 message, and return the promise after 60s

                                    // first (and, in this case, only) message of the collection
                                    var desc = collected.first().content;
                                    message.channel.send('Updated! Run &dex <dexname> to ensure it is correct.\nIf something should be changed, run this command again.')

                                    addentry(name, link, desc, image);





                            }).catch(() => {
                                  message.reply('no response after one minute, i cancel.');
                              });

                  }).catch(() => {
                        message.reply('no response after one minute, i cancel.');
                    });

    }).catch(() => {
          message.reply('no response after one minute, i cancel.');
      });

  }
  })

  command(client, 'npcdex', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
  console.log('fetching dex')

  await mongo().then(async (mongoose) => {
  try {
    const result = await dexSchema.find({link: 'npc'}).sort({ name: 1 });

    var allthings = "";

    if (result) {

      result.forEach(element => allthings = allthings + "\n**" + element.name.toUpperCase() + "**");
      var dexlink = 'https://terrea.freeforums.net/thread/1068/npc-dex';

      const dexEmbed = {
        color: 0x863d02,
        title: "NPC DEX",
        url: dexlink,
        description: allthings,
        timestamp: new Date(),
        footer: {
          text: 'This dex was brought to you by &pat.',
        },
      };

      message.channel.send({embed: dexEmbed});
    }

  } finally {
    mongoose.connection.close()
  }
  })
  })

  command(client, 'floradex', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
  console.log('fetching dex')

  await mongo().then(async (mongoose) => {
  try {
    const result = await dexSchema.find({link: 'flora'}).sort({ name: 1 });

    var allthings = "";

    if (result) {

      result.forEach(element => allthings = allthings + "\n**" + element.name.toUpperCase() + "**");
      var dexlink = 'https://terrea.freeforums.net/thread/8/flora-dex';

      const dexEmbed = {
        color: 0x863d02,
        title: "FLORA DEX",
        url: dexlink,
        description: allthings,
        timestamp: new Date(),
        footer: {
          text: 'This dex was brought to you by &pat.',
        },
      };

      message.channel.send({embed: dexEmbed});
    }

  } finally {
    mongoose.connection.close()
  }
  })
  })
  command(client, 'faunadex', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
  console.log('fetching dex')

  await mongo().then(async (mongoose) => {
  try {
    const result = await dexSchema.find({link: 'fauna'}).sort({ name: 1 });

    var allthings = "";

    if (result) {

      result.forEach(element => allthings = allthings + "\n**" + element.name.toUpperCase() + "**");
      var dexlink = 'https://terrea.freeforums.net/thread/9/fauna-dex';

      const dexEmbed = {
        color: 0x863d02,
        title: "FAUNA DEX",
        url: dexlink,
        description: allthings,
        timestamp: new Date(),
        footer: {
          text: 'This dex was brought to you by &pat.',
        },
      };

      message.channel.send({embed: dexEmbed});
    }

  } finally {
    mongoose.connection.close()
  }
  })
  })
  command(client, 'petdex', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
  console.log('fetching dex')

  await mongo().then(async (mongoose) => {
  try {

    const result = await dexSchema.find({link: 'pet'}).sort({ name: 1 });

    var allthings = "";

    if (result) {

      result.forEach(element => allthings = allthings + "\n**" + element.name.toUpperCase() + "**");
      var dexlink = 'https://terrea.freeforums.net/thread/10/pet-dex';

      const dexEmbed = {
        color: 0x863d02,
        title: "PET DEX",
        url: dexlink,
        description: allthings,
        timestamp: new Date(),
        footer: {
          text: 'This dex was brought to you by &pat.',
        },
      };

      message.channel.send({embed: dexEmbed});
    }

  } finally {
    mongoose.connection.close()
  }
  })
  })

  command(client, 'dex', async message => {
    const {member, channel, content, guild} = message
    let text = content.toLowerCase()
    const split = text.split(' ')
      console.log('fetching data from dex')

      await mongo().then(async (mongoose) => {
        try {
          const result = await dexSchema.findOne({name: split[1]})

          var dexlink = '';

          if (result.link.toLowerCase() == 'pet'){
            dexlink = 'https://terrea.freeforums.net/thread/10/pet-dex';
          }
          else if (result.link.toLowerCase() == 'npc'){
            dexlink = 'https://terrea.freeforums.net/thread/1068/npc-dex';
          }
          else if (result.link.toLowerCase() == 'flora'){
            dexlink = 'https://terrea.freeforums.net/thread/8/flora-dex';
          }
          else if (result.link.toLowerCase() == 'fauna'){
            dexlink = 'https://terrea.freeforums.net/thread/9/fauna-dex';
          }
          else if (result.link.toLowerCase() == 'blobling type'){
            dexlink = 'https://terrea.freeforums.net/thread/1295/blobling-type-dex';
          }
          else if (result.link.toLowerCase() == 'bleeding items'){
            dexlink = 'https://terrea.freeforums.net/thread/1075/bleeding-items-dex';
          }
          else if (result.link.toLowerCase() == 'player items'){
            dexlink = 'https://terrea.freeforums.net/thread/1074/player-items-dex';
          }

          const dexEmbed = {
	color: 0x863d02,
	title: result.name.toUpperCase() + ' -- ' + result.link.toUpperCase(),
	url: dexlink,
	description: result.desc,
	image: {
		url: result.image,
	},
	timestamp: new Date(),
	footer: {
		text: 'This dex entry was brought to you by &pat.',
	},
};




          message.channel.send({embed: dexEmbed});
        } finally {
          mongoose.connection.close()
        }
      })


  })



}
