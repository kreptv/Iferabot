const mongo = require('./mongo')
const command = require('./command')
const blobSchema = require('./schemas/blob-schema')
var _ = require('lodash');

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = (client) => {

  command(client, 'bleed', async (message) => {
    var err = 0
    var parent = [];

    const {member, channel, content, guild} = message
    const filter = m => m.author.id == message.author.id;

    message.channel.send('Starting bleed simulation...')

    if ((message.member.roles.cache.find(role => role.name === "Art Mods"))||(message.member.roles.cache.find(role => role.name === "ADMIMODS"))||(message.member.roles.cache.find(role => role.name === "Combat Mod"))||(message.member.roles.cache.find(role => role.name === "Meow Mod"))){

    message.reply('How many parents are there?');
    var parentnum
    const parentcollector = await message.channel.createMessageCollector({ filter, max: 1, time: 180000 });
    parentcollector.on('collect', async collected => {
      parentnum = collected.content
    if (isNaN(parentnum) == false) { //if parentnum is a number
        //message.reply(parentnum + ' parents in bleed.');

              message.reply('What bleeding vouchers and add-ons are in use?');

              const voucherRow = new MessageActionRow()
          			.addComponents(
          				new MessageSelectMenu()
          					.setCustomId('voucherRow')
          					.setPlaceholder('Select the bleeding voucher!')
          					.addOptions([
          						{
          							label: 'Basic',
          							description: '2 parents, 2 babs, 10% mutation',
          							value: 'Basic',
          						},
          						{
          							label: 'Intermediate',
          							description: '2 parents, 3 babs, 30% mutation',
          							value: 'Intermediate',
          						},
                      {
                        label: 'Deluxe',
                        description: '2 parents, 4 babs, 50% mutation',
                        value: 'Deluxe',
                      },
                      {
                        label: 'Rainbow Basic',
                        description: '2-5 parents, 2 rainbowborn babs, 10% mutation',
                        value: 'Rainbow Basic',
                      },
                      {
                        label: 'Rainbow Intermediate',
                        description: '2-6 parents, 3 rainbowborn babs, 30% mutation',
                        value: 'Rainbow Intermediate',
                      },
                      {
                        label: 'Rainbow Deluxe',
                        description: '2-7 parents, 4 rainbowborn babs, 50% mutation',
                        value: 'Rainbow Deluxe',
                      },
          					]),
          			);
                const addonRow = new MessageActionRow()
                  .addComponents(
                    new MessageSelectMenu()
                      .setCustomId('addonRow')
                      .setPlaceholder('Select an add-on!')
                      .addOptions([
                        {
                          label: 'None',
                          description: 'No add-on is used!',
                          value: 'none',
                        },
                        {
                          label: '+1 Baby',
                          description: '1 extra bab',
                          value: '+1 Bab',
                        },
                        {
                          label: '+2 Baby',
                          description: '2 extra babs',
                          value: '+2 Babs',
                        },
                        {
                          label: '5% Mutation Chance',
                          description: '5% extra mutation',
                          value: '5% Mutation Chance Addon',
                        },
                        {
                          label: '25% Mutation Chance',
                          description: '25% extra mutation',
                          value: '25% Mutation Chance Addon',
                        },
                        {
                          label: '50% Mutation Chance',
                          description: '50% extra mutation',
                          value: '50% Mutation Chance Addon',
                        },
                        {
                          label: 'Mutation Cap Breaker',
                          description: 'Allows babs to have more than 1 mutation.',
                          value: 'Mutation Cap Breaker',
                        },
                        {
                          label: 'Color Focus',
                          description: 'Focus on a color.',
                          value: 'Color Focus Addon',
                        },
                        {
                          label: 'Parent Focus',
                          description: 'Focus on a parent.',
                          value: 'Parent Focus Addon',
                        },
                        {
                          label: 'Trait Focus',
                          description: 'Focus on a trait.',
                          value: 'Trait Focus Addon',
                        },
                        {
                          label: 'Trait Ignore',
                          description: 'Ignore a trait, guaranted.',
                          value: 'Trait Ignore Addon',
                        },
                        {
                          label: 'Waterborn Addon',
                          description: 'Make some babs waterborn.',
                          value: 'Waterborn Addon',
                        },
                        {
                          label: 'Rainbowborn Addon',
                          description: 'Make some babs rainbowborn.',
                          value: 'Rainbowborn Addon',
                        },
                        {
                          label: 'Snekkitborn Addon',
                          description: 'Make some babs snekkitborn.',
                          value: 'Snekkitborn Addon',
                        },
                        {
                          label: 'Plantborn Addon',
                          description: 'Make some babs plantborn.',
                          value: 'Plantborn Addon',
                        },
                        {
                          label: 'Battleborn Addon',
                          description: 'Make some babs battleborn.',
                          value: 'Battleborn Addon',
                        },
                        {
                          label: 'Tarborn Addon',
                          description: 'Make some babs tarborn.',
                          value: 'Tarborn Addon',
                        },
                        {
                          label: 'Yume Addon',
                          description: 'This bleed is infused with chaos!',
                          value: 'Yume Addon',
                        },
                        {
                          label: 'Reinala Addon',
                          description: 'This bleed is infused with order!',
                          value: 'Reinala Addon',
                        },
                      ]),
                  );

                  const bleedvouchermessage = await message.channel.send({content: generateBleedVoucherMessage(addonRow), components: [voucherRow]})
                  var end = 0;
                    const filter1 = m => m.author.id == interaction.author.id;

                  const collector = bleedvouchermessage.createMessageComponentCollector({filter1, componentType: 'SELECT_MENU', time: 180000});

                  var string = ""
                  collector.on('collect', async i => {

                     const {customId, values, member} = i

                     for (const id of values){

                      if (i.customId === 'voucherRow'){ // define each addon/bleeding voucher
                        string = string + " // " + id
                        await i.update({content: "Registered "+id+".", components: [addonRow]})
                      }else if (i.customId === 'addonRow'){
                        if (id != 'none'){
                          string = string + "// " + id
                          await i.update({content: "Registered "+id+".", components: [addonRow]})
                        }
                        else{
                          var addons = string.split( "// ")
                          var bleedingvoucher = addons[1]
                          addons = addons.slice(2)
                          var tempstring = "And "
                          for (const ey of addons){
                            tempstring = tempstring + ey + " and "
                          }
                          tempstring = tempstring.slice(0, -5)
                          await i.update({content: "Got it, a "+ bleedingvoucher +" bleeding voucher. " + tempstring + ".", components: []})
                          var numberofaddons = addons.length

                          var mutationchance = 0
                          var allrainbow = false
                          var bornchance = [0,0,0,0,0]
                          var mutbreaker = false
                          var babcount = 0

                          if (bleedingvoucher == "Basic"){
                            babcount = 2
                            mutationchance = 10
                          }else if (bleedingvoucher == "Intermediate"){
                            babcount = 3
                            mutationchance = 30
                          }else if (bleedingvoucher == "Deluxe"){
                            babcount = 4
                            mutationchance = 50
                          }else if (bleedingvoucher == "Rainbow Basic"){
                            babcount = 2
                            allrainbow = true
                            mutationchance = 10
                          }else if (bleedingvoucher == "Rainbow Intermediate"){
                            babcount = 3
                            allrainbow = true
                            mutationchance = 30
                          }else if (bleedingvoucher == "Rainbow Deluxe"){
                            babcount = 4
                            allrainbow = true
                            mutationchance = 50
                          }
                          var j = 0

                          for (j = 0; j < addons.length; j++){
                            var curr = addons[j]
                            if (curr == "+1 Bab"){
                              babcount += 1
                            } else if (curr == "+2 Babs"){
                              babcount += 2
                            }else if (curr == "5% Mutation Chance Addon"){
                              mutationchance += 5
                            }else if (curr == "25% Mutation Chance Addon"){
                              mutationchance += 25
                            }else if (curr == "50% Mutation Chance Addon"){
                              mutationchance += 50
                            }else if (curr == "Mutation Cap Breaker"){
                              mutbreaker = true
                            }
                          } // end for number of addons
                            
                          if ((!mutbreaker) && (mutationchance>100)){
                            mutationchance = 100;
                          }

                          var guarantee = []
                          var focusName = Array.apply("", Array(5)).map(function () {})
                          // proceed here
                          for (var l = 0; l < addons.length; l++){
                              guarantee[l] = (Math.floor(Math.random(1) * babcount))+1;
                              if ((addons[l] === "Trait Ignore Addon")||(addons[l] === "Parent Focus Addon")||(addons[l] === "Trait Focus Addon")||(addons[l] === "Color Focus Addon")){
                                focusName[l] = await generateFocusNames(message, addons[l])
                              }
                              //message.channel.send(guarantee[l] + '//')
                          } // end for number of addons

                          // for each parent:
                          var parentName; // string Ifera
                          var parentVoucherList; // string head 1, teeth 1, shapechange 4
                          var parentVoucherListArray = []; // array [head][1][teeth][1][shapechange][4]
                          var parentVoucherListArrayStrings = []; // array [head][teeth][shapechange]
                          var parentVoucherListArrayVals = []; // array [1][1][4]
                          var parentBornTypes; // string Waterborn\n Rainbowborn\n Snekkitborn
                          var parentBornTypesArray = []; // array [Waterborn][Rainbowborn][Snekkitborn]

                          for (var currparentnum = 1; currparentnum <= parentnum; currparentnum++){
                            if (err === 0){

                              var parentName = ""
                              var parentVoucherList = ""
                              var parentVoucherListArray = []
                              var parentVoucherListArrayStrings = []
                              var parentVoucherListArrayVals = []
                              var parentBornTypes = ""
                              var parentBornTypesArray = []

                            message.reply('So, tell me about parent number '+currparentnum+"...\nWhat is their name?");
                            var voucherlistcollector = await message.channel.createMessageCollector({ filter, max: 1, time: 180000 });
                            voucherlistcollector.on('collect', async collected => {
                              parentName = collected.content
                            })
                            await new Promise(resolve => voucherlistcollector.once('collect', async (message) => {
                              resolve(message);
                            }));

                            message.reply(parentName + " is parent number "+ currparentnum+ ".");
                            var foundparent = 0;
                            var usedparent = 0;

                            // is parent registered in the bot?
                            await mongo().then(async (mongoose) => {
                                try {
                                  var result = await blobSchema.findOne({
                                    blobName: parentName.toLowerCase()
                                  })
                                  if (result){ // if yes, retrieve data
                                      message.channel.send("Oh, hey! I know that guy!")
                                      var foundparent = 1;
                                      try {
                                        var result2 = await blobSchema.findOne({
                                          blobName: parentName.toLowerCase(),
                                          'borntypes' : { $exists: true, $ne: null },
                                          'voucherlist' : { $exists: true, $ne: null },
                                        })
                                        if (result2){
                                          const parentdbconfirmembed = await message.channel.send({embeds: [generateParent( result2.blobName, result.image, result2.userId, result2.voucherlist, result2.borntypes)], components: [generateynButtonRow()]})
                                            const filter2 = m => m.author.id == interaction.author.id;
                                          var collector = parentdbconfirmembed.createMessageComponentCollector({ filter2, componentType: 'BUTTON', time: 180000 });

                                          collector.on('collect', async i => {
                                              if (i.customId === 'yes'){
                                                usedparent = 1
                                                parentBornTypes = result2.borntypes
                                                parentVoucherList = result2.voucherlist
                                                await i.update({content: "Cool!", embeds: [generateParent( result2.blobName, result.image, result2.userId, result2.voucherlist, result2.borntypes)], components: []})
                                              } else if (i.customId === 'nope'){
                                                await i.update({content: "Okay, I'll let you enter it manually.", components: []})
                                              }
                                          });
                                          await new Promise(resolve => collector.once('collect', async (interaction) => {
                                            resolve(interaction);
                                          }))

                                        }
                                        else {
                                          message.channel.send("...But I don't know their voucherlist or borntypes. You'll have to input them manually.")
                                        }
                                      }catch{}
                                  }
                                  // if no:
                                  if (usedparent === 0){
                                    const baseOrBorn = new MessageActionRow()
                                			.addComponents(
                                				new MessageSelectMenu()
                                					.setCustomId('baseOrBorn')
                                					.setPlaceholder('Does this blobling have a borntype?')
                                					.addOptions([
                                						{
                                							label: 'Base',
                                							description: 'The blobling is baseborn!',
                                							value: 'Base',
                                						},
                                						{
                                							label: 'Borntypes',
                                							description: 'The blobling has one or more borntype!',
                                							value: 'Borntypes',
                                						},
                                					]),
                                			);
                                      const borntypesSelection = new MessageActionRow()
                                  			.addComponents(
                                  				new MessageSelectMenu()
                                  					.setCustomId('borntypesSelection')
                                  					.setPlaceholder('Select the borntypes!')
                                  					.addOptions([
                                              {
                                                label: 'Done',
                                                description: 'Finish selection!',
                                                value: 'Done',
                                              },
                                              {
                                                label: 'Waterborn',
                                                description: 'The blobling is waterborn!',
                                                value: 'Waterborn',
                                              },
                                              {
                                                label: 'Rainbowborn',
                                                description: 'The blobling is rainbowborn!',
                                                value: 'Rainbowborn',
                                              },
                                              {
                                                label: 'Snekkitborn',
                                                description: 'The blobling is snekkitborn!',
                                                value: 'Snekkitborn',
                                              },
                                              {
                                                label: 'Plantborn',
                                                description: 'The blobling is plantborn!',
                                                value: 'Plantborn',
                                              },
                                              {
                                                label: 'Battleborn',
                                                description: 'The blobling is battleborn!',
                                                value: 'Battleborn',
                                              },
                                              {
                                                label: 'Tarborn',
                                                description: 'The blobling is tarborn!',
                                                value: 'Tarborn',
                                              },
                                  					]),
                                  			);
                                    // input borntypes (button selection, reuse code from &addborntypes)
                                    const inputmessage = await message.channel.send({content: "**I don't have them indexed. Select their borntypes.**", components: [baseOrBorn]});
                                      const filter3 = m => m.author.id == interaction.author.id;
                                    const collectorborntypes = inputmessage.createMessageComponentCollector({filter3, componentType: 'SELECT_MENU', time: 180000});

                                    parentBornTypes = ""

                                    collectorborntypes.on('collect', async i => {

                                       const {customId, values, member} = i

                                       for (const id of values){

                                        if (i.customId === 'baseOrBorn'){ // define each addon/bleeding voucher

                                          if (id === 'Base'){
                                            parentBornTypes = "Base"
                                            await i.update({content: "Registered "+id+" from "+i.customId+".", components: []})
                                          }
                                          else if (id === 'Borntypes'){
                                            await i.update({content: "Registered "+id+" from "+i.customId+".", components: [borntypesSelection]})
                                          }
                                        }else if (i.customId === 'borntypesSelection'){
                                          if (id != 'Done'){
                                            parentBornTypes = parentBornTypes + "\n "+ id
                                            await i.update({content: "Registered "+id+" from "+i.customId+".", components: [borntypesSelection]})
                                          }
                                          else{
                                            if (parentBornTypes.startsWith("\n")){
                                              parentBornTypes = parentBornTypes.substring(2)
                                            }
                                            await i.update({content: parentBornTypes, components: []})
                                            //
                                          }
                                        }
                                      }
                                    }) // collect borntypes
                                    const inputmessage2 = await message.channel.send({content: "**Enter their voucherlist.**\n"+"Please send the voucherlist in this format: \n" +
                                    "head 1, teeth 1, shapechange 4, eye 1, wing 2, frills 2, ear 1, tail 2, leg 12, marking 8, othertentacletail 1, otherscythelegs 1 "});

                                    // input voucherlist (text, reuse code from &addvoucherlist)
                                    const filter = m => m.author.id == message.author.id;
                                    var voucherlist1
                                    var collectorvoucherlist = message.channel.createMessageCollector({ filter, max: 1, time: 180000 });
                                    collectorvoucherlist.on('collect', async collected => {
                                      err = 0;

                                    var orig = collected.content.toLowerCase()
                                    parentVoucherList = orig
                                    voucherlist1 = orig.split(',');
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

                                    for (i = 0; i < (2 * voucherlist1.length); i++) {
                                      var temp1 = voucherlist1.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      if (isNaN(temp1[i])){
                                      voucherlist1strings[i] = temp1[i].toLowerCase();
                                      }
                                      else {
                                        message.channel.send("I can't parse the voucherlist. Please re-try the bleed or ping Krepta if I'm broken again.");
                                        err = 1;
                                      }
                                      if (isNaN(temp1[i])){
                                      if (!(isNaN(temp1[i+1]))){
                                      voucherlist1vals[i] = temp1[i + 1];
                                      }
                                      else {
                                        message.channel.send("I can't parse the voucherlist. Please re-try the bleed or ping Krepta if I'm broken again.");
                                        err = 1;
                                      }
                                    }
                                      i++
                                    }
                                  }) // collectvoucherlist
                                  await new Promise(resolve => collectorvoucherlist.once('collect', async (message) => {
                                    resolve(message);
                                  }))
                                  if (err == 0 ){
                                    if ((parentBornTypes === "")){
                                      parentBornTypes = "Base"
                                    }



                                    if (foundparent == true){
                                      message.channel.send("Since I already have this parent registered, would you like to add their updated voucherlist and borntypes to the register?");

                            await mongo().then(async (mongoose) => {
                                          try {
                                            var result2 = await blobSchema.findOne({
                                              blobName: parentName.toLowerCase(),
                                            })
                                            if (result2){
                                              const parentdbconfirmembed = await message.channel.send({embeds: [generateParent( result2.blobName, result.image, result2.userId, result2.voucherlist, result2.borntypes)], components: [generateynButtonRow()]})
                                                const filter5 = m => m.author.id == message.author.id;
                                              var collectorr = parentdbconfirmembed.createMessageComponentCollector({ filter5, componentType: 'BUTTON', time: 180000 });

                                              collectorr.on('collect', async i => {
                                                  if (i.customId === 'yes'){

                                                    await blobSchema.findOneAndUpdate({
                                                      blobName: parentName.toLowerCase(),
                                                    },{
                                                      borntypes: parentBornTypes,
                                                      voucherlist: parentVoucherList,
                                                    }, {
                                                      upsert: true
                                                    })
                                                    await i.update({content: "Added to database!", embeds: [generateParent( result2.blobName, result.image, result2.userId, result2.voucherlist, result2.borntypes)], components: []})
                                                  } else if (i.customId === 'nope'){
                                                    await i.update({content: "okokok.", components: []})
                                                  }
                                              });
                                              await new Promise(resolve => collectorr.once('collect', async (interaction) => {
                                                resolve(interaction);
                                              }))

                                            }
                                        }finally {
                                        }
                                      })









                                    }

                                  }
                                  if ( err == 1 ){ //error catch
                                  }
                                  } // no
                                  if (err == 0){ //stuff here
                                    var i
                                    var temp1 = []

                                    parentBornTypesArray = parentBornTypes.split("\n ")
                                    parentVoucherListArray = parentVoucherList.split(",")
                                    for (i = 0; i < parentVoucherListArray.length; i++) {
                                      parentVoucherListArray[i] = parentVoucherListArray[i].trim();
                                    }
                                    parentVoucherListArray = parentVoucherListArray.sort()

                                    for (i = 0; i < (2 * parentVoucherListArray.length); i++) {
                                      if (err == 0){
                                      temp1 = parentVoucherListArray.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      if (isNaN(temp1[i])){
                                      parentVoucherListArrayStrings[i] = temp1[i].toLowerCase()
                                      }
                                      else {
                                        message.channel.send("Error in voucherlist plz fix");
                                        err = 1
                                      }
                                      if (!(isNaN(temp1[i+1]))){
                                        parentVoucherListArrayVals[i] = temp1[i+1]
                                      }
                                      else {
                                        message.channel.send("Error in voucherlist plz fix");
                                        err = 1
                                      }
                                      i++
                                    }
                                  } // end for


                                  parentVoucherListArrayVals = parentVoucherListArrayVals.filter(function(element) {
                                    return element !== undefined;
                                  });
                                  parentVoucherListArrayStrings = parentVoucherListArrayStrings.filter(function(element) {
                                    return element !== undefined;
                                  });

                                    parent[currparentnum] = new Parent(parentName, parentBornTypesArray, parentVoucherListArray, parentVoucherListArrayStrings, parentVoucherListArrayVals)
                                }


                                if ( err == 1 ){ //error catch
                                }
                                }finally {
                                }
                              }) // is parent registered in the bot?
                            }
                          } //end for each parent first




                          if (err == 0) {
                            var copyparentnum = parentnum;
                            while (copyparentnum > 0){ // for each parent
                              //message.channel.send(parent[copyparentnum].parentName + " \n " + parent[copyparentnum].parentBornTypesArray+ " \n " + parent[copyparentnum].parentVoucherListArray + " \n")
                              //message.channel.send(parent[copyparentnum].parentVoucherListArrayVals + " \n " + parent[copyparentnum].parentVoucherListArrayStrings + " \n " + " \n //\n")
                              copyparentnum --
                            } // end for each parent second
                            copyparentnum = parentnum;

                            var bornpotential = [0,0,0,0,0,0]
                            while (copyparentnum > 0){ // for each parent
                              if (parent[copyparentnum].parentBornTypesArray.includes("Waterborn")){
                                bornpotential[0] = bornpotential[0] + 1
                              }if (parent[copyparentnum].parentBornTypesArray.includes("Rainbowborn")){
                                bornpotential[1] = bornpotential[1] + 1
                              }if (parent[copyparentnum].parentBornTypesArray.includes("Snekkitborn")){
                                bornpotential[2] = bornpotential[2] + 1
                              }if (parent[copyparentnum].parentBornTypesArray.includes("Plantborn")){
                                bornpotential[3] = bornpotential[3] + 1
                              }if (parent[copyparentnum].parentBornTypesArray.includes("Battleborn")){
                                bornpotential[4] = bornpotential[4] + 1
                              }if (parent[copyparentnum].parentBornTypesArray.includes("Tarborn")){
                                bornpotential[5] = bornpotential[5] + 1
                              }
                              copyparentnum --
                            } // end for each parent bornpotential


                            var voucherlist1strings
                            var voucherlist1vals
                            var voucherlist2strings
                            var voucherlist2vals
                            var parentswithvoucher
                            var vouchertempchance
                            var voucherchance
                            var parent2 = _.cloneDeep(parent);

                            for (j = 1; j <= babcount; j++){

                              var babstring = ""
                              var babborntypes
                              var waterborn = false
                              var rainbowborn = false
                              var snekkitborn = false
                              var plantborn = false
                              var battleborn = false
                              var tarborn = false
                              babstring = "**BABY " + j + ":**\n"

                              for (var l = 0; l < addons.length; l++){
                                //message.channel.send(addons[l])
                                if ((addons[l] == "Waterborn Addon")){
                                  waterborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                } else if ((addons[l] == "Rainbowborn Addon")){
                                  rainbowborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                } else if ((addons[l] == "Snekkitborn Addon")){
                                  snekkitborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                } else if ((addons[l] == "Plantborn Addon")){
                                  plantborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                } else if ((addons[l] == "Battleborn Addon")){
                                  battleborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                } else if ((addons[l] == "Tarborn Addon")){
                                  tarborn = generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                }
                                else {
                                  babstring = babstring + generateFocuses(message, addons[l], babcount, guarantee[l], j, focusName[l])
                                }
                            }


                              var borntemp = 0
                              var waterchance = (parseInt(bornpotential[0]) / parentnum) * 100;
                              var rainbowchance = (parseInt(bornpotential[1]) / parentnum) * 100;
                              var snekkitchance = (parseInt(bornpotential[2]) / parentnum) * 100;
                              var plantchance = (parseInt(bornpotential[3]) / parentnum) * 100;
                              var battlechance = (parseInt(bornpotential[4]) / parentnum) * 100;
                              var tarchance = (parseInt(bornpotential[5]) / parentnum) * 100;
                              borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((waterchance > borntemp)||(waterborn === true)) {
                                babstring = babstring + "**Waterborn** \n"
                              }
                              borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((rainbowchance > borntemp)||(rainbowborn === true)||(allrainbow === true)) {
                                babstring = babstring + "**Rainbowborn** \n"
                              }
                              borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((snekkitchance > borntemp)||(snekkitborn === true)) {
                                babstring = babstring + "**Snekkitborn** \n"
                              }
                              borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((plantchance > borntemp)||(plantborn === true)) {
                                babstring = babstring + "**Plantborn** \n"
                              }
                              borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((battlechance > borntemp)||(battleborn === true)) {
                                babstring = babstring + "**Battleborn** \n"
                              } borntemp = (Math.floor(Math.random(1) * (100)));
                              if ((tarchance > borntemp)||(tarborn === true)) {
                                babstring = babstring + "**Tarborn** \n"
                              }


                              babstring = babstring + generateMutations(mutationchance, mutbreaker)
                              var parent2 = _.cloneDeep(parent);
                              babstring = babstring + dying2(parentnum, parent2, message)



                              message.channel.send(babstring)

                            } // end for each bab


                          } // end if err = 0

                          // calculate number of babs (bleeding voucher + addon?)
                          // calculate mutation chance (bleeding voucher + addon? + mutation cap breaker?)
                            // mini, massive, or marvelous? (reuse code from oldbleed)
                          // calculate borntype chance (bleeding voucher? + parent borntypes? + addon?)
                          // for each bab:
                            // calculate borntypes (reuse code from oldbleed)
                            // calculate mutations (reuse code from oldbleed)
                            // calculate voucherlist (reuse code from oldbleed)
                            // calculate traitfocuses? (reuse code from traitfocus)
                            // print complete voucherlist


















    message.channel.send("bleed end")

                        }
                      }
                    }

                  }) // bleedvouchercollector

    } else {
      message.reply(generateRandomError());
      return
    }
    }) // parentnum collector
}else {
  message.channel.send("no perms srry")
}
}) // end bleed

function generateMutations(mutationchance, mutbreaker){
  var muttemp = 0;
  var stringy = ""
  var muttempchance = 0;

  //MUTATIONS: FINISHED

  do {
    if (mutbreaker === true){
      if (mutationchance > 100) {
        muttemp = muttemp + 1;
        mutationchance = mutationchance - 100;
      }
    }
  } while (mutationchance > 100)

  muttempchance = (Math.floor(Math.random(1) * (100)));

  if (mutationchance > muttempchance) {
    muttemp = muttemp + 1;
  }

  var mutstring = "";
  //New
  for (var it = 0; it < muttemp; it++){
  //test for marv
  var marv = Math.floor(Math.random() * 100);
  var mass = Math.floor(Math.random() * 100);
  if (marv == 0) {
    mutstring = mutstring + "1 Marvelous, ";
  } else if (mass <= 4) {
    mutstring = mutstring + "1 Massive, ";
  } else {
    mutstring = mutstring + "1 Mini, ";
  }
  }

  if (mutstring.includes("1")){
  mutstring = mutstring.slice(0, -2);
  stringy = '**New mutations: ' + mutstring + '**\n'
  }
  return stringy



}

async function generateFocusNames(message, focustype){
    message.channel.send("Please enter a name for the " + focustype + ".")
    const filter = m => m.author.id == message.author.id;
    var collector = message.channel.createMessageCollector({ filter, max: 1, time: 180000 });
    var focusName
    collector.on('collect', async collected => {
      focusName = collected.content.toLowerCase()
  })
    await new Promise(resolve => collector.once('collect', async (message) => {
      resolve(message);
    }))
    return focusName
  }

function generateFocuses(message, focustype, babnum, guarantee, j, focusName){
  //var focusName = "myDick"
  var stringy = ""

  if ((focustype === "Parent Focus Addon")||(focustype === "Trait Focus Addon")||(focustype === "Color Focus Addon")){
      var prob = ((Math.floor(Math.random(1) * (2))))

      if (guarantee == j){
        stringy = "**"+focustype + ": " + focusName + "** (G)\n"
        return stringy
      } if (prob==1){
        stringy = "**"+focustype + ": " + focusName + "**\n"
        return stringy
      }  else {
        return stringy
      }
  }

    else if (focustype === "Trait Ignore Addon"){
      stringy = "**"+focustype + ": " + focusName + "**\n"
      return stringy
    }

    else if ((focustype === "Waterborn Addon")||(focustype === "Rainbowborn Addon")||(focustype === "Snekkitborn Addon")||(focustype === "Plantborn Addon")||(focustype === "Battleborn Addon")||(focustype === "Tarborn Addon")){
      var prob = ((Math.floor(Math.random(1) * (2))))
      focustype2 = focustype.split(" ")

      if (guarantee == j){
        return true
      }  if (prob==1){
        return true
      }  else {
        return false
      }

    }

    else if ((focustype === "Yume Addon")||(focustype === "Reinala Addon")){
      var prob = ((Math.floor(Math.random(1) * (2))))

      if (guarantee == j){
        stringy = "**"+focustype + "**(G)\n"
        return stringy
      } if (prob==1){
        stringy = "**"+focustype + "**\n"
        return stringy
      }  else {
        return stringy
      }
    }
    return stringy

}


function generateButtonBase(){
  const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('base')
            .setLabel('Base')
            .setStyle('SECONDARY'),
          new MessageButton()
            .setCustomId('borntype')
            .setLabel('Borntype')
            .setStyle('PRIMARY'),
        )
        return row;
}
function generateButtonRow1(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('water')
            .setLabel('Water')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('next1')
          .setLabel('Next')
          .setStyle('PRIMARY'),
      )
        return row2;
}
function generateButtonRow2(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('rainbow')
            .setLabel('Rainbow')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('next2')
          .setLabel('Next')
          .setStyle('PRIMARY'),
      )
        return row2;
}
function generateButtonRow3(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('snekkit')
            .setLabel('Snekkit')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('next3')
          .setLabel('Next')
          .setStyle('PRIMARY'),
      )
        return row2;
}
function generateButtonRow4(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('plant')
            .setLabel('Plant')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('next4')
          .setLabel('Next')
          .setStyle('PRIMARY'),
      )
        return row2;
}
function generateButtonRow5(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('battle')
            .setLabel('Battle')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('done')
          .setLabel('Done')
          .setStyle('PRIMARY'),
      )
        return row2;
}
function generateButtonRow6(){
  const row2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('tar')
            .setLabel('Tar')
            .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('done')
          .setLabel('Done')
          .setStyle('PRIMARY'),
      )
        return row2;
}

function Baby(borntypesarray, mutationsarray, traitfocusesarray, voucherlistarray){
    this.babyBornTypesArray = borntypesarray
    this.babyMutationsArray = mutationsarray;
    this.babyTraitFocusesArray = traitfocusesarray;
    this.babyVoucherListArray = voucherlistarray;
}

function dying2(parentnum, parent2, message) {

  var babystrings = []
  var babyvals = []
  var voucherchance = 0
  var vouchertempchance = 0
  var parentswithvoucher = 0

  var voucherlist2vals = []
    var voucherlist2strings = []
    var voucherlist1vals = []
      var voucherlist1strings = []


  var copyparentnum = 1;
  for (k = 1; k <= parentnum; k++){
    voucherlist2strings[k] = _.cloneDeep(parent2[k].parentVoucherListArrayStrings)
    voucherlist2vals[k] = _.cloneDeep(parent2[k].parentVoucherListArrayVals)
  }

  while (copyparentnum <= parentnum){
    voucherlist1strings = voucherlist2strings[copyparentnum]
    voucherlist1vals = voucherlist2vals[copyparentnum]
   //message.channel.send(voucherlist1strings + "//");
  //  message.channel.send(voucherlist1vals + "//");


  //parent 1
  //for each voucher on parent 1:
  for (i = 0; i < voucherlist1strings.length; i++) {
    //while parentvals[i] > 0, :
    while (parseInt(voucherlist1vals[i]) > 0) {
      //subtract one from parent 1's val list
      voucherlist1vals[i] = (parseInt(voucherlist1vals[i]) - 1);
      //parentswithvoucher + 1
      parentswithvoucher += 1;
      //console.log(parentswithvoucher);
      //does parent 2 have it?
      for (k = (copyparentnum+1); k <= parentnum; k++){
        // voucherlist2strings = _.cloneDeep(parent2[k].parentVoucherListArrayStrings)
        // voucherlist2vals = _.cloneDeep(parent2[k].parentVoucherListArrayVals)
      if ((voucherlist2strings[k].includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[k][voucherlist2strings[k].indexOf(voucherlist1strings[i])]) > 0)) {
        //subtract one from parent 2's val list
        var placement = voucherlist2strings[k].indexOf(voucherlist1strings[i]);
        //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
        voucherlist2vals[k][placement] = parseInt(voucherlist2vals[k][placement]) - 1;
        //parentswithvoucher + 1
        parentswithvoucher += 1;
      }
    }
      //does parent 4 have it?
      //if voucher is in babystrings
      if ((babystrings.includes(voucherlist1strings[i]))) {
        //update babyvals
        voucherchance = (parentswithvoucher / parentnum) * 100;
        vouchertempchance = (Math.floor(Math.random(1) * (100)));
        if (voucherchance >= vouchertempchance) {
          babyvals[babystrings.indexOf(voucherlist1strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist1strings[i])]) + 1);
        }
      }

      //if voucher isnt in babystrings
      else if (voucherlist1strings[i] != undefined) {
        //add voucher to babystrings
        //add voucher to babyvals
        voucherchance = (parentswithvoucher / parentnum) * 100;
        vouchertempchance = (Math.floor(Math.random(1) * (100)));
        //console.log(Math.floor(Math.random(1) * (100)));
        if (voucherchance >= vouchertempchance) {
          babystrings[(babystrings.length)] = voucherlist1strings[i];
          babyvals[(babyvals.length)] = 1;
        }
      }
      parentswithvoucher = 0;
    }

  }
  copyparentnum ++;
}
  //repeat above for each parent
  //parent 2....

  //parent 3....

  var stringy = "";

  //capitalize it n make it pretty
  for (i = 0; i < (babystrings.length); i++) {
    babystrings[i] = babystrings[i].charAt(0).toUpperCase() + babystrings[i].slice(1);
  }

  //loop through babystrings to get vouchercount
  for (i = 0; i < (babystrings.length); i++) {
    if (parseInt(babyvals[i]) === 1) {
      stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Voucher";
    } else {
      stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Vouchers";
    }
  }

  //loop through babystrings again to print as intake format
  stringy = stringy + "\n**";
  for (i = 0; i < (babystrings.length); i++) {
      stringy = stringy + babystrings[i] + " " + babyvals[i];
      if (i < (babystrings.length-1)){
        stringy = stringy + ", ";
      }
      else {
        stringy = stringy + "**";
      }
  }


return stringy


}

function Parent(name, borntypesarray, voucherlistarray, strings, vals){
    this.parentName = name;
    this.parentBornTypesArray = borntypesarray;
    this.parentVoucherListArray = voucherlistarray;
    this.parentVoucherListArrayStrings = strings;
    this.parentVoucherListArrayVals = vals;
}

function generateynButtonRow(){
  const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('yes')
            .setLabel('👍')
            .setStyle('SUCCESS'),
          new MessageButton()
            .setCustomId('nope')
            .setLabel('👎')
            .setStyle('DANGER'),
        );
        return row;
}

function generateParent(blobName, image, userId, voucherlist, borntypes){
  var embed = new MessageEmbed()
  .setColor('#0x863d02')
  .setTitle(blobName.toUpperCase())
  .setDescription("<@"+userId + ">'s blobling")
  .setImage(image)
  .addFields(
      { name: 'Borntypes', value: "// " + borntypes},
      { name: 'Voucherlist', value: "// " + voucherlist},
    )
  return embed;
}


function generateBleedVoucherMessage(){
  var bleedvouchermessage = ""
  var prob = (Math.floor(Math.random(1) * (7)));
  if (prob == 0) {
    bleedvouchermessage = "Ah, bleeding seasons. The most wonderful time of the year. Right now, every blob on this weird little orb is "
  + "just dreaming about who they could poke and pop and dance around with in a puddle of thick, sticky... Oh, sorry. That's a little NSFW.";
  }
  else if (prob == 1) {
    bleedvouchermessage = "Okay, go ahead. I'm listening.";
  }
  else if (prob == 2) {
    bleedvouchermessage = "I'd like to personally recommend the Trait Focus voucher. It's gifted my boys many extra legs.";
  }
  else if (prob == 3) {
    bleedvouchermessage = "Oooooh, this is going to be a good one! My blood sack is tingling!";
  }
  else if (prob == 4) {
    bleedvouchermessage = "The act of individuals mixing blood could also be attributed to cultish and occultish practices. Not that I'd "+
    "know anything about that.";
  }
  else if (prob == 5) {
    bleedvouchermessage = "Select your fighter.";
  }
  else if (prob == 6) {
    bleedvouchermessage = "What's it gonna be?";
  }
  return bleedvouchermessage;
}

  function generateRandomError(){
    var randomerror = ""
    var prob = (Math.floor(Math.random(1) * (8)));
    if (prob == 0) {
      randomerror = "That's... not right. You *know* that's not right. Come on, very rudimentary information here.";
    }
    else if (prob == 1) {
      randomerror = "Did you really think I wouldn't notice? That input doesn't make sense!";
    }
    else if (prob == 2) {
      randomerror = "Uh... Yeah no, I can't parse that. Try again.";
    }
    else if (prob == 3) {
      randomerror = "ERROR ERROR ERROR CODE XOOE34S REBOOTING";
    }
    else if (prob == 4) {
      randomerror = "Never in my wildest dreams have I encountered such an unthinkable error.";
    }
    else if (prob == 5) {
      randomerror = "Breaking news: a completely borked input has been fed into Ifera! (Re-enter that; I can't read it.)";
    }
    else if (prob == 6) {
      randomerror = "Nope, can't read that one. It was going so well, too...";
    }
    else if (prob = 7) {
      randomerror = ("Something has gone terribly wrong. Please contact Krepta immediately. I am broken. I need fixing."
      +"I'm breaking down, Sae, Asha, Vix, whoever's using me.... I'm lost. I don't know what I'm doing.")
    }
    return randomerror;
  }


}

