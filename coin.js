const mongo = require('./mongo')
const command = require('./command')
const coinSchema = require('./schemas/coin-schema')

module.exports = (client) => {
  client.on('message', (message) => {
    const { guild, member, channel } = message

    const smileysands = "599395606363897866";
    const tarpits = "599396547427303454";
    const sourglowswamp = "599397522233884682";
    const onyxiasanct = "672891878609387542";
    const onyxiaarena = "774070405165350952";
    const climatecaves = "599398125865533440";
    const colorwavecoast = "700336534066561136";
    const seasphere = "700336163919102002";
    const sakanatemple = "774070635034181653";
    const snekkitty = "704825352270118912";
    const anywhere = "661034391102816264";
    const vermin = "701148121870237767";
    const snekkitty2 = "842435876096704563";
    const coincreation = "859211527125729280";
    const speeddating = "863515342218723328";
    const speeddating2 = "863590326655909968";
    const nsfw = "863515523332702296";



    /*if (message.channel.id == "796545920149880892"){
      addCoin(member.id, message.member.displayName.toLowerCase(), 1000)
    }*/
if (!message.author.bot){
    if ((message.channel.id == smileysands)||(message.channel.id == tarpits)||(message.channel.id == sourglowswamp)||(message.channel.id == onyxiasanct)||(message.channel.id == onyxiaarena)||(message.channel.id == climatecaves)||(message.channel.id == colorwavecoast)||(message.channel.id == seasphere)||(message.channel.id == sakanatemple)||(message.channel.id == snekkitty)||(message.channel.id == anywhere)){
      addCoin(member.id, message.member.displayName.toLowerCase(), 7)
            client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 7 coins!')
    }
    /*if ((message.channel.id == '672619007442026526')){
      addCoin(member.id, message.member.displayName.toLowerCase(), 8000)
      client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 8000 coins!')
    }*/

    if (message.channel.id == coincreation){
      addCoin(member.id, message.member.displayName.toLowerCase(), 5)
      client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 5 coins!')
    }
    if ((message.channel.id == nsfw)||(message.channel.id == speeddating)||(message.channel.id == speeddating2)){
      addCoin(member.id, message.member.displayName.toLowerCase(), 1)
      client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 1 coin!')
    }
    if (message.channel.id == vermin){
      addCoin(member.id, message.member.displayName.toLowerCase(), 10)
      client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 10 coins!')
    }
    if (message.channel.id == snekkitty2){
      addCoin(member.id, message.member.displayName.toLowerCase(), 15)
      client.channels.cache.get('591117553498325044').send(message.member.displayName.toLowerCase() + ' has gained 15 coins!')
    }
}

  })
}

const addCoin = async (userId, nick, coinToAdd) => {
  await mongo().then(async (mongoose) => {
    try {
      const result = await coinSchema.findOneAndUpdate(
        {
          userId,
        },
        {
        nick: nick,
        $inc: {
          cointotal: coinToAdd,
        },
        },
        {
          upsert: true,
          new: true,
        }
      )



    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.addCoin = addCoin
