const mongo = require('./mongo')
const command = require('./command')
const mutlistSchema = require('./schemas/mutlist-schema')

module.exports = (client) => {

  command(client, 'addmut', async (message) => {
    const {member, channel, content, guild} = message;

    let text = content;

    const split = text.split('-')

    let typee = split[0].split(' ');

    if (split.length < 3){
      message.channel.send('**Enter as:** MINI - Koi - 3 Marking Vouchers (Koi spots)')
      return
    }

    split.shift()
    text = split.join(' ')

    await mongo().then(async (mongoose) => {
      try{
        await mutlistSchema.findOneAndUpdate({
          type: typee[1].toUpperCase(),
          name: split[0],
        },{
          type: typee[1].toUpperCase(),
          name: split[0],
          desc: split[1]
        }, {
          upsert: true,
        })
      }finally {
        message.channel.send('ok')
        mongoose.connection.close()
      }
    })
  })

  command(client, ['minimutation', 'minimut', 'mutmini', 'mini'], async (message) => {
    const {member, channel, content, guild} = message;





    await mongo().then(async (mongoose) => {
      try {

        var n = await mutlistSchema.countDocuments({type: "MINI"});

        var r = Math.floor(Math.random() * n);

        var result = await mutlistSchema.findOne({type: "MINI"}).skip(r);


        message.channel.send(result.type + " -" + result.name + "-" + result.desc)
      } finally {
        mongoose.connection.close()
      }
    })
  })

  command(client, ['massivemutation', 'massivemut', 'mutmassive', 'mass', 'massive'], async (message) => {
    const {member, channel, content, guild} = message;

    await mongo().then(async (mongoose) => {
      try {
        var n = await mutlistSchema.countDocuments({type: "MASSIVE"});

        var r = Math.floor(Math.random() * n);

        var result = await mutlistSchema.findOne({type: "MASSIVE"}).skip(r);
        message.channel.send(result.type + " -" + result.name + "-" + result.desc)
      } finally {
        mongoose.connection.close()
      }
    })
  })

  command(client, ['marvelousmutation', 'marvelousmut', 'mutmarvelous', 'marv', 'marvelous'], async (message) => {
    const {member, channel, content, guild} = message;

    await mongo().then(async (mongoose) => {
      try {
        var n = await mutlistSchema.countDocuments({type: "MARVELOUS"});

        var r = Math.floor(Math.random() * n);

        var result = await mutlistSchema.findOne({type: "MARVELOUS"}).skip(r);
        message.channel.send(result.type + " -" + result.name + "-" + result.desc)
      } finally {
        mongoose.connection.close()
      }
    })
  })




}
