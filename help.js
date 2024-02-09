const mongo = require('./mongo')
const command = require('./command')

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = (client) => {

  function generateRows(){
      const row = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setCustomId('ppage')
                .setLabel('◀️')
                .setStyle('PRIMARY'),
              new MessageButton()
                .setCustomId('npage')
                .setLabel('▶️')
                .setStyle('PRIMARY'),
          );
          return row;
          }

  function generateHelp1(){
      var help1 = new MessageEmbed()
      .setColor('#0x863d02')
      .setTitle("// General Commands //")
      .setThumbnail("https://media.discordapp.net/attachments/672619007442026526/805239978157801522/Birb.png")
      .addFields(
          { name: "Assa's Daily Role Sweepstakes", value: 'First to say ass every 24 hours wins!'},
          { name: '&dex <entry name>', value: 'retrieve an entry from the dex database!'},
          { name: '&npcdex / &floradex / &faunadex / &petdex', value: 'view all entries in a dex database!'},
          { name: '&random', value: 'generate a random blobling!' },
          { name: "&coinflip", value: "heads or tails?"},
          { name: '&roll 6d4', value: "roll 6 4-sided die // replace numbers with whatever numbers desired!" },
          { name: '&roll 6d4s3', value: "roll 6 4-sided die where anything 3 and greater counts as a success!" },
          { name: '&retrievecoins <nickname/all>', value: "get coin count!" },
        )
      return help1;
  }

  function generateHelp2(){
      var help2 = new MessageEmbed()
      .setColor('#0x863d02')
      .setTitle("// Blob Profile //")
      .setThumbnail("https://media.discordapp.net/attachments/672619007442026526/805239978157801522/Birb.png")
      .addFields(
          { name: "&retrieveblob <blob name> / &p <blob name>", value: "Show a blob's profile!"},
          { name: "&bloblist", value: "Show a list of all registered blobs!"},
          { name: "&bloblist <ping user>", value: "Show a list of a user's registered blobs!"},
          { name: '&artpromptblob', value: 'get a random blob to draw!' },
          { name: "&addblob <blob name> <blobhandle>", value: "Add a new blob!" },
          { name: "&addblobfull <blobname> <blobhandle> <icon link> <image link> <alignment> <friendzy>", value: "Add a new blob with most of their profile already filled out!" },
          { name: "&say <blob handle>: <words>", value: "Speak as your blob!"},
          { name: "&deleteblob <blob name>", value: "Delete your blob from the system permanantly!"},
        )
      return help2;
  }

  function generateHelp3(){
      var help3 = new MessageEmbed()
      .setColor('#0x863d02')
      .setTitle("// Blob Maintenance //")
      .setThumbnail("https://media.discordapp.net/attachments/672619007442026526/805239978157801522/Birb.png")
      .addFields(
          { name: "&addblob <blob name> <blobhandle>", value: "Add a new blob!" },
          { name: "&addblobfull <blobname> <blobhandle> <icon link> <image link> <alignment> <friendzy>", value: "Add a new blob with most of their profile already filled out!" },
          { name: "&addicon <blob name> <icon link>", value: "Change your blobling's icon!"},
          { name: "&addimage <blob name> <image link>", value: "Change your blobling's image!"},
          { name: "&addfriendzy <blob name> <friendzy name>", value: "Change your blobling's friendzy name!" },
          { name: "&addalignment <blob name> <alignment>", value: "Change your blobling's alignment!"},
          { name: "&adddesc <blob name>", value: "Change your blobling's description!"},
          { name: "&addborntypes <blob name>", value: "Update your blobling's borntypes!"},
          { name: "&addstats <blob name> <STR> <HEA> <ACC> <AGI> <DEF> <MOV> <END>", value: "Add stats to your blob!"},
          { name: "&addartprompts <blob name>", value: "Add blobling to the art prompts randomizer!"},
          { name: "&removeartprompts <blob name>", value: "Remove blobling from the art prompts randomizer!"},
          { name: "&setfriendzyasname <blob name>", value: "Set your blobling's friendzy name as their friendzy name!" },
          { name: "&unsetfriendzyasname <blob name>", value: "Set your blobling's friendzy name as their username!"},
          { name: "&setnpc <blob name>", value: "Sacrifice your blob to the mods!"},
          { name: "&unsetnpc <blob name>", value: "Save your blob from the mods!"},
        )
      return help3;
  }






  function generateButtonResponses(index, collector, sentembed){

    collector.on('collect', async i => {

          if ((i.customId === 'ppage')) {

            if (index === 1){
              index = 3;
              await i.update({embeds: [generateHelp3()], components: [generateRows()]})
            } //
            else if (index === 2){
              index = 1;
              await i.update({embeds: [generateHelp1()], components: [generateRows()]})
            }
            else if (index === 3){
              index = 2;
              await i.update({embeds: [generateHelp2()], components: [generateRows()]})
            } //
          }
          else if ((i.customId === 'npage')) {

            if (index === 2){
              index = 3;
              await i.update({embeds: [generateHelp3()], components: [generateRows()]})
            } //
            else if (index === 3){
              index = 1;
              await i.update({embeds: [generateHelp1()], components: [generateRows()]})
            }
            else if (index === 1){
              index = 2;
              await i.update({embeds: [generateHelp2()], components: [generateRows()]})
            } //
          }


          client.on('messageCreate', async(message) => {
            if (message.author.id === sentembed.author.id){
              collector.stop()
            }
          })

    })
  }

  command(client, 'help', async (message) => {

    const sentembed = await message.channel.send({embeds: [generateHelp1()], components: [generateRows()]})
    var collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
    var index = 1;
    generateButtonResponses(index, collector, sentembed)
  })

  command(client, ['blobhelp', 'helpblob'], async(message) => {

    const sentembed = await message.channel.send({embeds: [generateHelp2()], components: [generateRows()]})
    var collector = sentembed.channel.createMessageComponentCollector({ time: 60000 });
    var index = 2;
    generateButtonResponses(index, collector, sentembed)
  })

  command(client, ['helpmod', 'modhelp'], async (message) => {

    var helpmod = new MessageEmbed()
    .setColor('#0x863d02')
    .setTitle("Ifera can help!")
    .setDescription("// mod commands //")
    .setThumbnail("https://media.discordapp.net/attachments/672619007442026526/805239978157801522/Birb.png")
    .addFields(
        { name: "&bleed", value: "bleed two bloblings"},
        { name: "&focus", value: "generate focuses for bleeds!"},
        { name: "&mini / &massive / &marvelous", value: "retrieve a random mutation!" },
        { name: "&addmut MINI - Koi - 3 Marking Vouchers (Koi spots)", value: "add a mutation to the database!"},

        { name: "&addentry <entryname>", value: "add an entry to the dex database! have dex name, entry image, and entry description with bold asterisks on hand."},
        { name: "&retrievecoins <nickname/all>", value: "get coin count. &purgecoins to purge"},
        { name: "&addstats <blob name> <STR> <HEA> <ACC> <AGI> <DEF> <MOV> <END>", value: "Add stats to your blob!"},
        { name: "&addartprompts <blob name>", value: "Add blobling to the art prompts randomizer!"},
        { name: "&removeartprompts <blob name>", value: "Remove blobling from the art prompts randomizer!"},
        { name: "&setfriendzyasname <blob name>", value: "Set your blobling's friendzy name as their friendzy name!" },
        { name: "&unsetfriendzyasname <blob name>", value: "Set your blobling's friendzy name as their username!"},
        { name: "setnpc <blob name>", value: "Sacrifice your blob to the mods!"},
        { name: "&unsetnpc <blob name>", value: "Save your blob from the mods!"},
      )
    message.channel.send({embeds: [helpmod]})
  })


}
