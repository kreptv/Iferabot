const mongo = require('./mongo')
const command = require('./command')

module.exports = (client) => {

  const cache = {}

  command(client, 'bleed2', async (message) => {

    message.channel.send('Starting bleed simulation...')

    var backwards = 0;

    message.reply('How many parents are there?');

    message.channel.awaitMessages(m => m.author.id == message.author.id, {
      max: 1,
      time: 180000
    }).then(collected => { //start 'How many parents are there?'' catch
      // accept one message by the user who sent the command

      var parentnum = collected.first().content; //collect first

      if (isNaN(parentnum) == false) { //if parentnum is a number
        if (parentnum > 1 && parentnum < 8) {
          message.reply(parentnum + ' parents in bleed.');

          //continue 1

          message.reply('How many babies will there be?');

          message.channel.awaitMessages(m => m.author.id == message.author.id, {
            max: 1,
            time: 180000
          }).then(collected => {

            var babynum = collected.first().content;
            if (isNaN(babynum) == false) {
              message.reply(babynum + ' babies in bleed.');

              //continue 2

              message.reply('What is the mutation chance?');

              message.channel.awaitMessages(m => m.author.id == message.author.id, {
                max: 1,
                time: 180000
              }).then(collected => {

                var mutationchance = collected.first().content;
                if (isNaN(mutationchance) == false) {
                  message.reply('Mutation chance: ' + mutationchance);

                  //continue 3


                  message.reply("What is the born type chance? \n" +
                    "Please enter your estimates as *how many parents have the specified born type*. \n" +
                    "If a rainbow voucher is being used, the rainbow born type chance should equal the number of parent blobs. \n" +
                    "It should be in the format specified below: \n" +
                    "Water, Rainbow, Snek, Plant, Battle");

                  message.channel.awaitMessages(m => m.author.id == message.author.id, {
                    max: 1,
                    time: 180000
                  }).then(collected => {
                    // only accept messages by the user who sent the command
                    // accept only 1 message, and return the promise after 60s

                    // first (and, in this case, only) message of the collection
                    var borntypearray = (collected.first().content).split(',');
                    //var borntypearray = new Array(collected.first().content);
                    message.reply('Entered: ' + borntypearray);
                    if ((isNaN(parseInt(borntypearray[0])) == false) && (parseInt(borntypearray[0]) <= parentnum)) {
                      //message.channel.send('Waterborn data collected.');

                      if ((isNaN(parseInt(borntypearray[1])) == false) && (parseInt(borntypearray[1]) <= parentnum)) {
                        //message.channel.send('Rainbowborn data collected.');

                        if ((isNaN(parseInt(borntypearray[2])) == false) && (parseInt(borntypearray[2]) <= parentnum)) {
                          //message.channel.send('Snekkitborn data collected.');

                          if ((isNaN(parseInt(borntypearray[3])) == false) && (parseInt(borntypearray[3]) <= parentnum)) {
                            //message.channel.send('Plantborn data collected.');

                            if ((isNaN(parseInt(borntypearray[4])) == false) && (parseInt(borntypearray[4]) <= parentnum)) {
                              //message.channel.send('Battleborn data collected.');/*


                              //continue 3 START HERE
                              var i;
                              message.reply("***VOUCHERLISTS*** \n" +
                                "Make sure to name your vouchers similarly from blobling to blobling. \n" +
                                "Spaces and capitalizations matter. \n" +
                                "shapechange != shape change != Shape Change \n" +
                                "Example list: head 1, teeth 1, shapechange 1, eye 1, wing 2, frill 2, ear 1, other 2, tail 2, leg 12, marking 8");



                              if (parentnum == 2) {
                                message.reply('Please enter the vouchers in a list for parent 1.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                  max: 1,
                                  time: 180000
                                }).then(collected => {

                                  var voucherlist1 = (collected.first().content).split(',');
                                  message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                  message.reply('Please enter the vouchers in a list for parent 2.');
                                  message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                    max: 1,
                                    time: 180000
                                  }).then(collected => {

                                    var voucherlist2 = (collected.first().content).split(',');
                                    message.channel.send('Parent 2 voucherlist: ' + voucherlist2);


                                    var muthold = mutationchance;

                                    //ENTER BABY CODE HERE
                                    var b;
                                    for (b = 1; b <= babynum; b++) {
                                      message.channel.send('**Baby ' + b + '**');
                                      mutationchance = muthold;

                                      var temp1;
                                      var temp2;
                                      var muttemp = 0;
                                      var muttempchance = 0;

                                      //MUTATIONS: FINISHED

                                      do {
                                        if (mutationchance > 100) {
                                          muttemp = muttemp + 1;
                                          mutationchance = mutationchance - 100;
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
                                      message.channel.send('**New mutations: ' + mutstring + '**');
                                    }

                                      //BORN TYPES: FINISHED

                                      var borntemp = 0;

                                      var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                      var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                      var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                      var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                      var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                      borntemp = (Math.floor(Math.random(1) * (100)));
                                      if (waterchance > borntemp) {
                                        message.channel.send('**Waterborn**');
                                      }
                                      borntemp = (Math.floor(Math.random(1) * (100)));
                                      if (rainbowchance > borntemp) {
                                        message.channel.send('**Rainbowborn**');
                                      }
                                      borntemp = (Math.floor(Math.random(1) * (100)));
                                      if (snekkitchance > borntemp) {
                                        message.channel.send('**Snekkitborn**');
                                      }
                                      borntemp = (Math.floor(Math.random(1) * (100)));
                                      if (plantchance > borntemp) {
                                        message.channel.send('**Plantborn**');
                                      }
                                      borntemp = (Math.floor(Math.random(1) * (100)));
                                      if (battlechance > borntemp) {
                                        message.channel.send('**Battleborn**');
                                      }
                                      //VOUCHER LISTS: FINISHED

                                      var voucherlist1strings = [];
                                      var voucherlist1vals = [];


                                      var voucherlist2strings = [];
                                      var voucherlist2vals = [];

                                      var j;
                                      var babyvoucherlist;

                                      voucherlist1.sort();
                                      voucherlist2.sort();

                                      for (i = 0; i < voucherlist1.length; i++) {
                                        voucherlist1[i] = voucherlist1[i].trim();
                                      }
                                      for (i = 0; i < voucherlist2.length; i++) {
                                        voucherlist2[i] = voucherlist2[i].trim();
                                      }

                                      for (i = 0; i < (2 * voucherlist1.length); i++) {
                                        temp1 = voucherlist1.toString().split(" ");
                                        temp1 = temp1.toString().split(",");
                                        if (isNaN(temp1[i])){
                                        voucherlist1strings[i] = temp1[i].toLowerCase();
                                        }
                                        else {
                                          message.channel.send("Error in voucherlist 1 plz fix");
                                          throw new Error("I can't read the values in voucherlist!");
                                        }
                                        if (!(isNaN(temp1[i+1]))){
                                        voucherlist1vals[i] = temp1[i + 1];
                                        }
                                        else {
                                          message.channel.send("Error in voucherlist 1 plz fix");
                                          throw new Error("I can't read the values in voucherlist!");
                                        }
                                        i++
                                      }

                                      temp1 = [];


                                      for (i = 0; i < (2 * voucherlist2.length); i++) {
                                        temp1 = voucherlist2.toString().split(" ");
                                        temp1 = temp1.toString().split(",");
                                        if (isNaN(temp1[i])){
                                        voucherlist2strings[i] = temp1[i].toLowerCase();
                                        }
                                        else {
                                          message.channel.send("Error in voucherlist 2 plz fix");
                                          throw new Error("I can't read the values in voucherlist!");
                                        }
                                        if (!(isNaN(temp1[i+1]))){
                                        voucherlist2vals[i] = temp1[i + 1];
                                        }
                                        else {
                                          message.channel.send("Error in voucherlist 2 plz fix");
                                          throw new Error("I can't read the values in voucherlist!");
                                        }
                                        i++
                                      }


                                      var babystrings = [];
                                      var babyvals = [];
                                      var vouchertempchance = 0;
                                      var voucherchance = 0;

                                      var parentswithvoucher = 0;


                                      voucherlist1vals = voucherlist1vals.filter(function(element) {
                                        return element !== undefined;
                                      });
                                      voucherlist1strings = voucherlist1strings.filter(function(element) {
                                        return element !== undefined;
                                      });
                                      voucherlist2vals = voucherlist2vals.filter(function(element) {
                                        return element !== undefined;
                                      });
                                      voucherlist2strings = voucherlist2strings.filter(function(element) {
                                        return element !== undefined;
                                      });

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
                                          if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                            //subtract one from parent 2's val list
                                            var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                            //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                            voucherlist2vals[placement] = parseInt(voucherlist2vals[placement]) - 1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 3 have it?
                                          //subtract one from parent 3's val list
                                          //parentswithvoucher + 1
                                          //...

                                          //console.log(parentswithvoucher);

                                          //if voucher is in babystrings
                                          if ((babystrings.includes(voucherlist1strings[i]))) {
                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                            //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //if (voucherchance > vouchertempchance){
                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                            //}
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
                                      //repeat above for each parent
                                      //parent 2....

                                      //for each voucher on parent 2:
                                      for (i = 0; i < voucherlist2strings.length; i++) {
                                        //while parentvals[i] > 0, :
                                        while (parseInt(voucherlist2vals[i]) > 0) {
                                          //subtract one from parent 2's val list
                                          voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                          //parentswithvoucher + 1
                                          parentswithvoucher += 1;
                                          //console.log(parentswithvoucher);
                                          //does parent 2 have it?
                                          //console.log(parentswithvoucher);

                                          //if voucher is in babystrings
                                          if ((babystrings.includes(voucherlist2strings[i]))) {
                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                            //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //if (voucherchance > vouchertempchance){
                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                            //}
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            if (voucherchance >= vouchertempchance) {
                                              babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                            }
                                          }

                                          //if voucher isnt in babystrings
                                          else if (voucherlist2strings[i] != undefined) {
                                            //add voucher to babystrings
                                            //add voucher to babyvals
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //console.log(Math.floor(Math.random(1) * (100)));
                                            if (voucherchance >= vouchertempchance) {
                                              babystrings[(babystrings.length)] = voucherlist2strings[i];
                                              babyvals[(babyvals.length)] = 1;
                                            }
                                          }
                                          parentswithvoucher = 0;
                                        }

                                      }


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

                                      message.channel.send(stringy);

                                      //loop through babystrings again to print as intake format
                                      stringy = "**";
                                      for (i = 0; i < (babystrings.length); i++) {
                                          stringy = stringy + babystrings[i] + " " + babyvals[i];
                                          if (i < (babystrings.length-1)){
                                            stringy = stringy + ", ";
                                          }
                                          else {
                                            stringy = stringy + "**";
                                          }
                                      }


                                      message.channel.send(stringy);
                                      stringy = "";




                                    }

                                    //END BABY CODE





                                  }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 2)');
                                  });

                                }).catch(() => {
                                  message.reply('No response after three minutes, bleed canceled. (Parent 1)');
                                });
                              }

                              if (parentnum == 3) {
                                message.reply('Please enter the vouchers in a list for parent 1.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                  max: 1,
                                  time: 180000
                                }).then(collected => {

                                  var voucherlist1 = (collected.first().content).split(',');
                                  message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                  message.reply('Please enter the vouchers in a list for parent 2.');
                                  message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                    max: 1,
                                    time: 180000
                                  }).then(collected => {

                                    var voucherlist2 = (collected.first().content).split(',');
                                    message.channel.send('Parent 2 voucherlist: ' + voucherlist2);

                                    message.reply('Please enter the vouchers in a list for parent 3.');
                                    message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                      max: 1,
                                      time: 180000
                                    }).then(collected => {

                                      var voucherlist3 = (collected.first().content).split(',');
                                      message.channel.send('Parent 3 voucherlist: ' + voucherlist3);

                                      var muthold = mutationchance;

                                      //ENTER BABY CODE HERE

                                      var b;
                                      for (b = 1; b <= babynum; b++) {
                                        message.channel.send('**Baby ' + b + '**');
                                        mutationchance = muthold;

                                        var temp1;
                                        var temp2;
                                        var muttemp = 0;
                                        var muttempchance = 0;

                                        //MUTATIONS: FINISHED

                                        do {
                                          if (mutationchance > 100) {
                                            muttemp = muttemp + 1;
                                            mutationchance = mutationchance - 100;
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
                                        message.channel.send('**New mutations: ' + mutstring + '**');
                                      }


                                        //BORN TYPES: FINISHED

                                        var borntemp = 0;

                                        var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                        var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                        var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                        var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                        var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                        borntemp = (Math.floor(Math.random(1) * (100)));
                                        if (waterchance > borntemp) {
                                          message.channel.send('**Waterborn**');
                                        }
                                        borntemp = (Math.floor(Math.random(1) * (100)));
                                        if (rainbowchance > borntemp) {
                                          message.channel.send('**Rainbowborn**');
                                        }
                                        borntemp = (Math.floor(Math.random(1) * (100)));
                                        if (snekkitchance > borntemp) {
                                          message.channel.send('**Snekkitborn**');
                                        }
                                        borntemp = (Math.floor(Math.random(1) * (100)));
                                        if (plantchance > borntemp) {
                                          message.channel.send('**Plantborn**');
                                        }
                                        borntemp = (Math.floor(Math.random(1) * (100)));
                                        if (battlechance > borntemp) {
                                          message.channel.send('**Battleborn**');
                                        }

                                        //VOUCHERLISTS: UNFINISHED
                                        var voucherlist1strings = [];
                                        var voucherlist1vals = [];


                                        var voucherlist2strings = [];
                                        var voucherlist2vals = [];


                                        var voucherlist3strings = [];
                                        var voucherlist3vals = [];

                                        var j;
                                        var babyvoucherlist;

                                        voucherlist1.sort();
                                        voucherlist2.sort();
                                        voucherlist3.sort();

                                        for (i = 0; i < voucherlist1.length; i++) {
                                          voucherlist1[i] = voucherlist1[i].trim();
                                        }
                                        for (i = 0; i < voucherlist2.length; i++) {
                                          voucherlist2[i] = voucherlist2[i].trim();
                                        }
                                        for (i = 0; i < voucherlist3.length; i++) {
                                          voucherlist3[i] = voucherlist3[i].trim();
                                        }

                                        for (i = 0; i < (2 * voucherlist1.length); i++) {
                                          temp1 = voucherlist1.toString().split(" ");
                                          temp1 = temp1.toString().split(",");
                                          if (isNaN(temp1[i])){
                                          voucherlist1strings[i] = temp1[i].toLowerCase();
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 1 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          if (!(isNaN(temp1[i+1]))){
                                          voucherlist1vals[i] = temp1[i + 1];
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 1 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          i++
                                        }

                                        temp1 = [];


                                        for (i = 0; i < (2 * voucherlist2.length); i++) {
                                          temp1 = voucherlist2.toString().split(" ");
                                          temp1 = temp1.toString().split(",");
                                          if (isNaN(temp1[i])){
                                          voucherlist2strings[i] = temp1[i].toLowerCase();
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 2 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          if (!(isNaN(temp1[i+1]))){
                                          voucherlist2vals[i] = temp1[i + 1];
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 2 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          i++
                                        }
                                        temp1 = [];

                                        for (i = 0; i < (2 * voucherlist3.length); i++) {
                                          temp1 = voucherlist3.toString().split(" ");
                                          temp1 = temp1.toString().split(",");
                                          if (isNaN(temp1[i])){
                                          voucherlist3strings[i] = temp1[i].toLowerCase();
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 3 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          if (!(isNaN(temp1[i+1]))){
                                          voucherlist3vals[i] = temp1[i + 1];
                                          }
                                          else {
                                            message.channel.send("Error in voucherlist 3 plz fix");
                                            throw new Error("I can't read the values in voucherlist!");
                                          }
                                          i++
                                        }

                                        var babystrings = [];
                                        var babyvals = [];
                                        var vouchertempchance = 0;
                                        var voucherchance = 0;

                                        var parentswithvoucher = 0;


                                        voucherlist1vals = voucherlist1vals.filter(function(element) {
                                          return element !== undefined;
                                        });
                                        voucherlist1strings = voucherlist1strings.filter(function(element) {
                                          return element !== undefined;
                                        });
                                        voucherlist2vals = voucherlist2vals.filter(function(element) {
                                          return element !== undefined;
                                        });
                                        voucherlist2strings = voucherlist2strings.filter(function(element) {
                                          return element !== undefined;
                                        });
                                        voucherlist3vals = voucherlist3vals.filter(function(element) {
                                          return element !== undefined;
                                        });
                                        voucherlist3strings = voucherlist3strings.filter(function(element) {
                                          return element !== undefined;
                                        });

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
                                            if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                              //subtract one from parent 2's val list
                                              var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                              //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                              voucherlist2vals[placement] = parseInt(voucherlist2vals[placement]) - 1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 3 have it?
                                            if ((voucherlist3strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                              //subtract one from parent 3's val list
                                              var placement = voucherlist3strings.indexOf(voucherlist1strings[i]);
                                              voucherlist3vals[placement] = parseInt(voucherlist3vals[placement]) - 1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 4 have it?

                                            //console.log(parentswithvoucher);

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
                                        //repeat above for each parent
                                        //parent 2....

                                        //for each voucher on parent 2:
                                        for (i = 0; i < voucherlist2strings.length; i++) {
                                          //while parentvals[i] > 0, :
                                          while (parseInt(voucherlist2vals[i]) > 0) {
                                            //subtract one from parent 2's val list
                                            voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                            //console.log(parentswithvoucher);
                                            //does parent 3 have it?
                                            if ((voucherlist3strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist2strings[i])]) > 0)) {
                                              //subtract one from parent 3's val list
                                              var placement = voucherlist3strings.indexOf(voucherlist2strings[i]);
                                              voucherlist3vals[placement] = parseInt(voucherlist3vals[placement]) - 1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 4 have it?

                                            //if voucher is in babystrings
                                            if ((babystrings.includes(voucherlist2strings[i]))) {
                                              //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                              //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              //if (voucherchance > vouchertempchance){
                                              //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                              //}
                                              voucherchance = (parentswithvoucher / parentnum) * 100;
                                              vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              if (voucherchance >= vouchertempchance) {
                                                babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                              }
                                            }

                                            //if voucher isnt in babystrings
                                            else if (voucherlist2strings[i] != undefined) {
                                              //add voucher to babystrings
                                              //add voucher to babyvals
                                              voucherchance = (parentswithvoucher / parentnum) * 100;
                                              vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              //console.log(Math.floor(Math.random(1) * (100)));
                                              if (voucherchance >= vouchertempchance) {
                                                babystrings[(babystrings.length)] = voucherlist2strings[i];
                                                babyvals[(babyvals.length)] = 1;
                                              }
                                            }
                                            parentswithvoucher = 0;
                                          }
                                        }

                                        //parent 3....

                                        //for each voucher on parent 3:
                                        for (i = 0; i < voucherlist3strings.length; i++) {
                                          //while parentvals[i] > 0, :
                                          while (parseInt(voucherlist3vals[i]) > 0) {
                                            //subtract one from parent 3's val list
                                            voucherlist3vals[i] = (parseInt(voucherlist3vals[i]) - 1);
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                            //console.log(parentswithvoucher);
                                            //does parent 4 have it?

                                            //if voucher is in babystrings
                                            if ((babystrings.includes(voucherlist3strings[i]))) {
                                              //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                              //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              //if (voucherchance > vouchertempchance){
                                              //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                              //}
                                              voucherchance = (parentswithvoucher / parentnum) * 100;
                                              vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              if (voucherchance >= vouchertempchance) {
                                                babyvals[babystrings.indexOf(voucherlist3strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist3strings[i])]) + 1);
                                              }
                                            }

                                            //if voucher isnt in babystrings
                                            else if (voucherlist3strings[i] != undefined) {
                                              //add voucher to babystrings
                                              //add voucher to babyvals
                                              voucherchance = (parentswithvoucher / parentnum) * 100;
                                              vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                              //console.log(Math.floor(Math.random(1) * (100)));
                                              if (voucherchance >= vouchertempchance) {
                                                babystrings[(babystrings.length)] = voucherlist3strings[i];
                                                babyvals[(babyvals.length)] = 1;
                                              }
                                            }
                                            parentswithvoucher = 0;
                                          }

                                        }


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

                                        message.channel.send(stringy);

                                        //loop through babystrings again to print as intake format
                                        stringy = "**";
                                        for (i = 0; i < (babystrings.length); i++) {
                                            stringy = stringy + babystrings[i] + " " + babyvals[i];
                                            if (i < (babystrings.length-1)){
                                              stringy = stringy + ", ";
                                            }
                                            else {
                                              stringy = stringy + "**";
                                            }
                                        }


                                        message.channel.send(stringy);
                                        stringy = "";




                                        //END BABY CODE

                                      }



                                    }).catch(() => {
                                      message.reply('No response after three minutes, bleed canceled. (Parent 3)');
                                    });

                                  }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 2)');
                                  });

                                }).catch(() => {
                                  message.reply('No response after three minutes, bleed canceled. (Parent 1)');
                                });
                              }


                              if (parentnum == 4) {
                                message.reply('Please enter the vouchers in a list for parent 1.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                  max: 1,
                                  time: 180000
                                }).then(collected => {

                                  var voucherlist1 = (collected.first().content).split(',');
                                  message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                  message.reply('Please enter the vouchers in a list for parent 2.');
                                  message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                    max: 1,
                                    time: 180000
                                  }).then(collected => {

                                    var voucherlist2 = (collected.first().content).split(',');
                                    message.channel.send('Parent 2 voucherlist: ' + voucherlist2);

                                    message.reply('Please enter the vouchers in a list for parent 3.');
                                    message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                      max: 1,
                                      time: 180000
                                    }).then(collected => {

                                      var voucherlist3 = (collected.first().content).split(',');
                                      message.channel.send('Parent 3 voucherlist: ' + voucherlist3);

                                      message.reply('Please enter the vouchers in a list for parent 4.');
                                      message.channel.awaitMessages(m => m.author.id == message.author.id, {
                                        max: 1,
                                        time: 180000
                                      }).then(collected => {

                                        var voucherlist4 = (collected.first().content).split(',');
                                        message.channel.send('Parent 4 voucherlist: ' + voucherlist4);

                                        //ENTER BABY CODE HERE
                                        var muthold = mutationchance;

                                        //ENTER BABY CODE HERE
                                        var b;
                                        for (b = 1; b <= babynum; b++) {
                                          message.channel.send('**Baby ' + b + '**');
                                          mutationchance = muthold;

                                          var temp1;
                                          var temp2;
                                          var muttemp = 0;
                                          var muttempchance = 0;

                                          //MUTATIONS: FINISHED

                                          do {
                                            if (mutationchance > 100) {
                                              muttemp = muttemp + 1;
                                              mutationchance = mutationchance - 100;
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
                                          message.channel.send('**New mutations: ' + mutstring + '**');
                                        }

                                          //BORN TYPES: FINISHED

                                          var borntemp = 0;

                                          var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                          var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                          var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                          var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                          var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                          borntemp = (Math.floor(Math.random(1) * (100)));
                                          if (waterchance > borntemp) {
                                            message.channel.send('**Waterborn**');
                                          }
                                          borntemp = (Math.floor(Math.random(1) * (100)));
                                          if (rainbowchance > borntemp) {
                                            message.channel.send('**Rainbowborn**');
                                          }
                                          borntemp = (Math.floor(Math.random(1) * (100)));
                                          if (snekkitchance > borntemp) {
                                            message.channel.send('**Snekkitborn**');
                                          }
                                          borntemp = (Math.floor(Math.random(1) * (100)));
                                          if (plantchance > borntemp) {
                                            message.channel.send('**Plantborn**');
                                          }
                                          borntemp = (Math.floor(Math.random(1) * (100)));
                                          if (battlechance > borntemp) {
                                            message.channel.send('**Battleborn**');
                                          }
                                          //VOUCHER LISTS: FINISHED

                                          var temp1;
                                          var voucherlist1strings = [];
                                          var voucherlist1vals = [];

                                          var voucherlist2strings = [];
                                          var voucherlist2vals = [];

                                          var voucherlist3strings = [];
                                          var voucherlist3vals = [];

                                          var voucherlist4strings = [];
                                          var voucherlist4vals = [];

                                          var j;
                                          var babyvoucherlist;

                                          voucherlist1.sort();
                                          voucherlist2.sort();
                                          voucherlist3.sort();
                                          voucherlist4.sort();

                                          for (i = 0; i < voucherlist1.length; i++) {
                                            voucherlist1[i] = voucherlist1[i].trim();
                                          }
                                          for (i = 0; i < voucherlist2.length; i++) {
                                            voucherlist2[i] = voucherlist2[i].trim();
                                          }
                                          for (i = 0; i < voucherlist3.length; i++) {
                                            voucherlist3[i] = voucherlist3[i].trim();
                                          }
                                          for (i = 0; i < voucherlist4.length; i++) {
                                            voucherlist4[i] = voucherlist4[i].trim();
                                          }

                                          for (i = 0; i < (2 * voucherlist1.length); i++) {
                                            temp1 = voucherlist1.toString().split(" ");
                                            temp1 = temp1.toString().split(",");
                                            if (isNaN(temp1[i])){
                                            voucherlist1strings[i] = temp1[i].toLowerCase();
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 1 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            if (!(isNaN(temp1[i+1]))){
                                            voucherlist1vals[i] = temp1[i + 1];
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 1 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            i++
                                          }

                                          temp1 = [];


                                          for (i = 0; i < (2 * voucherlist2.length); i++) {
                                            temp1 = voucherlist2.toString().split(" ");
                                            temp1 = temp1.toString().split(",");
                                            if (isNaN(temp1[i])){
                                            voucherlist2strings[i] = temp1[i].toLowerCase();
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 2 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            if (!(isNaN(temp1[i+1]))){
                                            voucherlist2vals[i] = temp1[i + 1];
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 2 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            i++
                                          }
                                          temp1 = [];

                                          for (i = 0; i < (2 * voucherlist3.length); i++) {
                                            temp1 = voucherlist3.toString().split(" ");
                                            temp1 = temp1.toString().split(",");
                                            if (isNaN(temp1[i])){
                                            voucherlist3strings[i] = temp1[i].toLowerCase();
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 3 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            if (!(isNaN(temp1[i+1]))){
                                            voucherlist3vals[i] = temp1[i + 1];
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 3 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            i++
                                          }
                                          temp1 = [];

                                          for (i = 0; i < (2 * voucherlist4.length); i++) {
                                            temp1 = voucherlist4.toString().split(" ");
                                            temp1 = temp1.toString().split(",");
                                            if (isNaN(temp1[i])){
                                            voucherlist4strings[i] = temp1[i].toLowerCase();
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 4 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            if (!(isNaN(temp1[i+1]))){
                                            voucherlist4vals[i] = temp1[i + 1];
                                            }
                                            else {
                                              message.channel.send("Error in voucherlist 4 plz fix");
                                              throw new Error("I can't read the values in voucherlist!");
                                            }
                                            i++
                                          }
                                          temp1 = [];

                                          var babystrings = [];
                                          var babyvals = [];
                                          var vouchertempchance = 0;
                                          var voucherchance = 0;

                                          var parentswithvoucher = 0;


                                          voucherlist1vals = voucherlist1vals.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist1strings = voucherlist1strings.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist2vals = voucherlist2vals.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist2strings = voucherlist2strings.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist3vals = voucherlist3vals.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist3strings = voucherlist3strings.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist4vals = voucherlist4vals.filter(function(element) {
                                            return element !== undefined;
                                          });
                                          voucherlist4strings = voucherlist4strings.filter(function(element) {
                                            return element !== undefined;
                                          });

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
                                              if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                                //subtract one from parent 2's val list
                                                var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                                //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                                voucherlist2vals[placement] = parseInt(voucherlist2vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 3 have it?
                                              if ((voucherlist3strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                                //subtract one from parent 3's val list
                                                var placement = voucherlist3strings.indexOf(voucherlist1strings[i]);
                                                voucherlist3vals[placement] = parseInt(voucherlist3vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 4 have it?
                                              if ((voucherlist4strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist1strings[i])]) > 0)) {
                                                //subtract one from parent 3's val list
                                                var placement = voucherlist4strings.indexOf(voucherlist1strings[i]);
                                                voucherlist4vals[placement] = parseInt(voucherlist4vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 5 have it?

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
                                          //repeat above for each parent
                                          //parent 2....

                                          //for each voucher on parent 2:
                                          for (i = 0; i < voucherlist2strings.length; i++) {
                                            //while parentvals[i] > 0, :
                                            while (parseInt(voucherlist2vals[i]) > 0) {
                                              //subtract one from parent 2's val list
                                              voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                              //console.log(parentswithvoucher);
                                              //does parent 3 have it?
                                              if ((voucherlist3strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist2strings[i])]) > 0)) {
                                                //subtract one from parent 3's val list
                                                var placement = voucherlist3strings.indexOf(voucherlist2strings[i]);
                                                voucherlist3vals[placement] = parseInt(voucherlist3vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 4 have it?
                                              if ((voucherlist4strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist2strings[i])]) > 0)) {
                                                //subtract one from parent 3's val list
                                                var placement = voucherlist4strings.indexOf(voucherlist2strings[i]);
                                                voucherlist4vals[placement] = parseInt(voucherlist4vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 5 have it?

                                              //if voucher is in babystrings
                                              if ((babystrings.includes(voucherlist2strings[i]))) {
                                                //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //if (voucherchance > vouchertempchance){
                                                //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                //}
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                                }
                                              }

                                              //if voucher isnt in babystrings
                                              else if (voucherlist2strings[i] != undefined) {
                                                //add voucher to babystrings
                                                //add voucher to babyvals
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //console.log(Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babystrings[(babystrings.length)] = voucherlist2strings[i];
                                                  babyvals[(babyvals.length)] = 1;
                                                }
                                              }
                                              parentswithvoucher = 0;
                                            }
                                          }

                                          //parent 3....

                                          //for each voucher on parent 3:
                                          for (i = 0; i < voucherlist3strings.length; i++) {
                                            //while parentvals[i] > 0, :
                                            while (parseInt(voucherlist3vals[i]) > 0) {
                                              //subtract one from parent 3's val list
                                              voucherlist3vals[i] = (parseInt(voucherlist3vals[i]) - 1);
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                              //console.log(parentswithvoucher);
                                              //does parent 4 have it?
                                              if ((voucherlist4strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist3strings[i])]) > 0)) {
                                                //subtract one from parent 3's val list
                                                var placement = voucherlist4strings.indexOf(voucherlist3strings[i]);
                                                voucherlist4vals[placement] = parseInt(voucherlist4vals[placement]) - 1;
                                                //parentswithvoucher + 1
                                                parentswithvoucher += 1;
                                              }
                                              //does parent 5 have it?

                                              //if voucher is in babystrings
                                              if ((babystrings.includes(voucherlist3strings[i]))) {
                                                //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //if (voucherchance > vouchertempchance){
                                                //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                //}
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babyvals[babystrings.indexOf(voucherlist3strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist3strings[i])]) + 1);
                                                }
                                              }

                                              //if voucher isnt in babystrings
                                              else if (voucherlist3strings[i] != undefined) {
                                                //add voucher to babystrings
                                                //add voucher to babyvals
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //console.log(Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babystrings[(babystrings.length)] = voucherlist3strings[i];
                                                  babyvals[(babyvals.length)] = 1;
                                                }
                                              }
                                              parentswithvoucher = 0;
                                            }

                                          }

                                          //parent 4....

                                          //for each voucher on parent 4:
                                          for (i = 0; i < voucherlist4strings.length; i++) {
                                            //while parentvals[i] > 0, :
                                            while (parseInt(voucherlist4vals[i]) > 0) {
                                              //subtract one from parent 4's val list
                                              voucherlist4vals[i] = (parseInt(voucherlist4vals[i]) - 1);
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                              //console.log(parentswithvoucher);
                                              //does parent 5 have it?

                                              //if voucher is in babystrings
                                              if ((babystrings.includes(voucherlist4strings[i]))) {
                                                //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //if (voucherchance > vouchertempchance){
                                                //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                //}
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babyvals[babystrings.indexOf(voucherlist4strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist4strings[i])]) + 1);
                                                }
                                              }

                                              //if voucher isnt in babystrings
                                              else if (voucherlist4strings[i] != undefined) {
                                                //add voucher to babystrings
                                                //add voucher to babyvals
                                                voucherchance = (parentswithvoucher / parentnum) * 100;
                                                vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                //console.log(Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance) {
                                                  babystrings[(babystrings.length)] = voucherlist4strings[i];
                                                  babyvals[(babyvals.length)] = 1;
                                                }
                                              }
                                              parentswithvoucher = 0;
                                            }

                                          }


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

                                          message.channel.send(stringy);



                                          //loop through babystrings again to print as intake format
                                          stringy = "**";
                                          for (i = 0; i < (babystrings.length); i++) {
                                              stringy = stringy + babystrings[i] + " " + babyvals[i];
                                              if (i < (babystrings.length-1)){
                                                stringy = stringy + ", ";
                                              }
                                              else {
                                                stringy = stringy + "**";
                                              }
                                          }


                                          message.channel.send(stringy);
                                          stringy = "";






                                        }

                                        //END BABY CODE

                                      }).catch(() => {
                                        message.reply('No response after three minutes, bleed canceled. (Parent 4)');
                                      });

                                    }).catch(() => {
                                      message.reply('No response after three minutes, bleed canceled. (Parent 3)');
                                    });

                                  }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 2)');
                                  });

                                }).catch(() => {
                                  message.reply('No response after three minutes, bleed canceled. (Parent 1)');
                                });
                              }

                              if (parentnum == 5){

                                message.reply('Please enter the vouchers in a list for parent 1.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 180000}).then(collected => {

                                      var voucherlist1 = (collected.first().content).split(',');
                                      message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                  message.reply('Please enter the vouchers in a list for parent 2.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 180000}).then(collected => {

                                      var voucherlist2 = (collected.first().content).split(',');
                                      message.channel.send('Parent 2 voucherlist: ' + voucherlist2);

                                message.reply('Please enter the vouchers in a list for parent 3.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 180000}).then(collected => {

                                      var voucherlist3 = (collected.first().content).split(',');
                                      message.channel.send('Parent 3 voucherlist: ' + voucherlist3);

                                  message.reply('Please enter the vouchers in a list for parent 4.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 180000}).then(collected => {

                                      var voucherlist4 = (collected.first().content).split(',');
                                      message.channel.send('Parent 4 voucherlist: ' + voucherlist4);

                                  message.reply('Please enter the vouchers in a list for parent 5.');
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 180000}).then(collected => {

                                      var voucherlist5 = (collected.first().content).split(',');
                                      message.channel.send('Parent 5 voucherlist: ' + voucherlist5);

                                      //ENTER BABY CODE HERE

                                      var muthold = mutationchance;

                                      //ENTER BABY CODE HERE
                                      var b;
                                      for ( b = 1; b <= babynum; b++) {
                                        message.channel.send('**Baby ' + b + '**');
                                        mutationchance = muthold;

                                    var temp1;
                                    var temp2;
                                    var muttemp = 0;
                                    var muttempchance = 0;

                                    //MUTATIONS: FINISHED

                                    do {
                                    if (mutationchance > 100){
                                    muttemp = muttemp + 1;
                                    mutationchance = mutationchance -100;
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
                                    message.channel.send('**New mutations: ' + mutstring + '**');
                                  }

                                    //BORN TYPES: FINISHED

                                    var borntemp = 0;

                                    var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                    var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                    var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                    var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                    var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                    if (waterchance > borntemp){
                                    message.channel.send('**Waterborn**');
                                    }
                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                    if (rainbowchance > borntemp){
                                    message.channel.send('**Rainbowborn**');
                                    }
                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                    if (snekkitchance > borntemp){
                                    message.channel.send('**Snekkitborn**');
                                    }
                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                    if (plantchance > borntemp){
                                    message.channel.send('**Plantborn**');
                                    }
                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                    if (battlechance > borntemp){
                                    message.channel.send('**Battleborn**');
                                    }
                                    //VOUCHER LISTS: FINISHED
                                    var voucherlist1strings = [];
                                    var voucherlist1vals = [];

                                    var voucherlist2strings = [];
                                    var voucherlist2vals = [];

                                    var voucherlist3strings = [];
                                    var voucherlist3vals = [];

                                    var voucherlist4strings = [];
                                    var voucherlist4vals = [];

                                    var voucherlist5strings = [];
                                    var voucherlist5vals = [];

                                    var j;
                                    var babyvoucherlist;

                                    voucherlist1.sort();
                                    voucherlist2.sort();
                                    voucherlist3.sort();
                                    voucherlist4.sort();
                                    voucherlist5.sort();

                                    for (i=0; i <voucherlist1.length; i++) {
                                      voucherlist1[i] = voucherlist1[i].trim();
                                    }
                                    for (i=0; i <voucherlist2.length; i++) {
                                      voucherlist2[i] = voucherlist2[i].trim();
                                    }
                                    for (i=0; i <voucherlist3.length; i++) {
                                      voucherlist3[i] = voucherlist3[i].trim();
                                    }
                                    for (i=0; i <voucherlist4.length; i++) {
                                      voucherlist4[i] = voucherlist4[i].trim();
                                    }
                                    for (i=0; i <voucherlist5.length; i++) {
                                      voucherlist5[i] = voucherlist5[i].trim();
                                    }

                                    //message.channel.send("TEST 3: " + voucherlist3);
                                    //message.channel.send("TEST 4: " + voucherlist4);
                                    //message.channel.send("TEST 5: " + voucherlist5);

                                    for (i = 0; i < (2 * voucherlist1.length); i++) {
                                      temp1 = voucherlist1.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      voucherlist1strings[i] = temp1[i].toLowerCase();
                                      voucherlist1vals[i] = temp1[i + 1];
                                      i++
                                    }
                                    temp1 = [];

                                    for (i = 0; i < (2 * voucherlist2.length); i++) {
                                      temp1 = voucherlist2.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      voucherlist2strings[i] = temp1[i].toLowerCase();
                                      voucherlist2vals[i] = temp1[i + 1];
                                      i++
                                    }
                                    temp1 = [];

                                    for (i = 0; i < (2 * voucherlist3.length); i++) {
                                      temp1 = voucherlist3.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      voucherlist3strings[i] = temp1[i].toLowerCase();
                                      voucherlist3vals[i] = temp1[i + 1];
                                      i++
                                    }
                                    temp1 = [];

                                    for (i = 0; i < (2 * voucherlist4.length); i++) {
                                      temp1 = voucherlist4.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      voucherlist4strings[i] = temp1[i].toLowerCase();
                                      voucherlist4vals[i] = temp1[i + 1];
                                      i++
                                    }
                                    temp1 = [];

                                    for (i = 0; i < (2 * voucherlist5.length); i++) {
                                      temp1 = voucherlist5.toString().split(" ");
                                      temp1 = temp1.toString().split(",");
                                      voucherlist5strings[i] = temp1[i].toLowerCase();
                                      voucherlist5vals[i] = temp1[i + 1];
                                      i++
                                    }


                                    var babystrings = [];
                                    var babyvals = [];
                                    var vouchertempchance = 0;
                                    var voucherchance = 0;

                                    var parentswithvoucher = 0;


                                    voucherlist1vals = voucherlist1vals.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist1strings = voucherlist1strings.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist2vals = voucherlist2vals.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist2strings = voucherlist2strings.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist3vals = voucherlist3vals.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist3strings = voucherlist3strings.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist4vals = voucherlist4vals.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist4strings = voucherlist4strings.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist5vals = voucherlist5vals.filter(function( element ) {
                                       return element !== undefined;
                                    });
                                    voucherlist5strings = voucherlist5strings.filter(function( element ) {
                                       return element !== undefined;
                                    });


                                    //message.channel.send("debug 1: " + voucherlist1strings + voucherlist1vals);
                                    //message.channel.send("debug 2: " + voucherlist2strings + voucherlist2vals);
                                    //essage.channel.send("debug 3: " + voucherlist3strings + voucherlist3vals);
                                  //  message.channel.send("debug 4: " + voucherlist4strings + voucherlist4vals);
                                  //  message.channel.send("debug 5: " + voucherlist5strings + voucherlist5vals);

                                    //parent 1
                                      //for each voucher on parent 1:
                                      for (i = 0; i < voucherlist1strings.length; i++){
                                        //while parentvals[i] > 0, :
                                        while (parseInt(voucherlist1vals[i]) > 0){
                                          //subtract one from parent 1's val list
                                          voucherlist1vals[i] = (parseInt(voucherlist1vals[i]) - 1);
                                          //parentswithvoucher + 1
                                          parentswithvoucher += 1;
                                          //console.log(parentswithvoucher);
                                          //does parent 2 have it?
                                          if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])])>0)){
                                            //subtract one from parent 2's val list
                                            var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                                  //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                            voucherlist2vals[placement] = parseInt(voucherlist2vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 3 have it?
                                          if ((voucherlist3strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist1strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist3strings.indexOf(voucherlist1strings[i]);
                                            voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 4 have it?
                                          if ((voucherlist4strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist1strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist4strings.indexOf(voucherlist1strings[i]);
                                            voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 5 have it?
                                          if ((voucherlist5strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist1strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist5strings.indexOf(voucherlist1strings[i]);
                                            voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 6 have it?

                                        //if voucher is in babystrings
                                        if ((babystrings.includes(voucherlist1strings[i]))) {
                                          //update babyvals
                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance){
                                            babyvals[babystrings.indexOf(voucherlist1strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist1strings[i])]) + 1);
                                                }
                                        }

                                        //if voucher isnt in babystrings
                                        else if (voucherlist1strings[i] != undefined) {
                                          //add voucher to babystrings
                                          //add voucher to babyvals
                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                          //console.log(Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance){
                                                  babystrings[(babystrings.length)] = voucherlist1strings[i];
                                            babyvals[(babyvals.length)] = 1;
                                                }
                                        }
                                        parentswithvoucher = 0;
                                        }

                                      }
                                      //repeat above for each parent
                                    //parent 2....

                                    //for each voucher on parent 2:
                                      for (i = 0; i < voucherlist2strings.length; i++){
                                        //while parentvals[i] > 0, :
                                        while (parseInt(voucherlist2vals[i]) > 0){
                                          //subtract one from parent 2's val list
                                          voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                          //parentswithvoucher + 1
                                          parentswithvoucher += 1;
                                          //console.log(parentswithvoucher);
                                          //does parent 3 have it?
                                          if ((voucherlist3strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist2strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist3strings.indexOf(voucherlist2strings[i]);
                                            voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 4 have it?
                                          if ((voucherlist4strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist2strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist4strings.indexOf(voucherlist2strings[i]);
                                            voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 5 have it?
                                          if ((voucherlist5strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist2strings[i])])>0)){
                                            //subtract one from parent 3's val list
                                            var placement = voucherlist5strings.indexOf(voucherlist2strings[i]);
                                            voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                          }
                                          //does parent 6 have it?

                                        //if voucher is in babystrings
                                        if ((babystrings.includes(voucherlist2strings[i]))) {
                                          //update babyvals
                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance){
                                            babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                                }
                                        }

                                        //if voucher isnt in babystrings
                                        else if (voucherlist2strings[i] != undefined) {
                                          //add voucher to babystrings
                                          //add voucher to babyvals
                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                          //console.log(Math.floor(Math.random(1) * (100)));
                                                if (voucherchance >= vouchertempchance){
                                                  babystrings[(babystrings.length)] = voucherlist2strings[i];
                                            babyvals[(babyvals.length)] = 1;
                                                }
                                        }
                                        parentswithvoucher = 0;
                                        }
                                      }

                                      //parent 3....

                                      //for each voucher on parent 3:
                                        for (i = 0; i < voucherlist3strings.length; i++){
                                          //while parentvals[i] > 0, :
                                          while (parseInt(voucherlist3vals[i]) > 0){
                                            //subtract one from parent 3's val list
                                            voucherlist3vals[i] = (parseInt(voucherlist3vals[i]) - 1);
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                            //console.log(parentswithvoucher);
                                            //does parent 4 have it?
                                            if ((voucherlist4strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist3strings[i])])>0)){
                                              //subtract one from parent 3's val list
                                              var placement = voucherlist4strings.indexOf(voucherlist3strings[i]);
                                              voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 5 have it?
                                            if ((voucherlist5strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist3strings[i])])>0)){
                                              //subtract one from parent 3's val list
                                              var placement = voucherlist5strings.indexOf(voucherlist3strings[i]);
                                              voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 6 have it?

                                          //if voucher is in babystrings
                                          if ((babystrings.includes(voucherlist3strings[i]))) {
                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                      //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //if (voucherchance > vouchertempchance){
                                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                              //}
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                              babyvals[babystrings.indexOf(voucherlist3strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist3strings[i])]) + 1);
                                                  }
                                          }

                                          //if voucher isnt in babystrings
                                          else if (voucherlist3strings[i] != undefined) {
                                            //add voucher to babystrings
                                            //add voucher to babyvals
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                                    babystrings[(babystrings.length)] = voucherlist3strings[i];
                                              babyvals[(babyvals.length)] = 1;
                                                  }
                                          }
                                          parentswithvoucher = 0;
                                          }

                                      }

                                      //parent 4....

                                      //for each voucher on parent 4:
                                        for (i = 0; i < voucherlist4strings.length; i++){
                                          //while parentvals[i] > 0, :
                                          while (parseInt(voucherlist4vals[i]) > 0){
                                            //subtract one from parent 4's val list
                                            voucherlist4vals[i] = (parseInt(voucherlist4vals[i]) - 1);
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                            //console.log(parentswithvoucher);
                                            //does parent 5 have it?
                                            if ((voucherlist5strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist4strings[i])])>0)){
                                              //subtract one from parent 3's val list
                                              var placement = voucherlist5strings.indexOf(voucherlist4strings[i]);
                                              voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                              //parentswithvoucher + 1
                                              parentswithvoucher += 1;
                                            }
                                            //does parent 6 have it?

                                          //if voucher is in babystrings
                                          if ((babystrings.includes(voucherlist4strings[i]))) {
                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                      //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //if (voucherchance > vouchertempchance){
                                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                              //}
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                              babyvals[babystrings.indexOf(voucherlist4strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist4strings[i])]) + 1);
                                                  }
                                          }

                                          //if voucher isnt in babystrings
                                          else if (voucherlist4strings[i] != undefined) {
                                            //add voucher to babystrings
                                            //add voucher to babyvals
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                                    babystrings[(babystrings.length)] = voucherlist4strings[i];
                                              babyvals[(babyvals.length)] = 1;
                                                  }
                                          }
                                          parentswithvoucher = 0;
                                          }

                                      }

                                      //parent 5....

                                      //for each voucher on parent 5:
                                        for (i = 0; i < voucherlist5strings.length; i++){
                                          //while parentvals[i] > 0, :
                                          while (parseInt(voucherlist5vals[i]) > 0){
                                            //subtract one from parent 5's val list
                                            voucherlist5vals[i] = (parseInt(voucherlist5vals[i]) - 1);
                                            //parentswithvoucher + 1
                                            parentswithvoucher += 1;
                                            //console.log(parentswithvoucher);
                                            //does parent 6 have it?

                                          //if voucher is in babystrings
                                          if ((babystrings.includes(voucherlist5strings[i]))) {
                                            //update babystrings
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                              babyvals[babystrings.indexOf(voucherlist5strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist5strings[i])]) + 1);
                                                  }
                                          }

                                          //if voucher isnt in babystrings
                                          else if (voucherlist5strings[i] != undefined) {
                                            //add voucher to babystrings
                                            //add voucher to babyvals
                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                  if (voucherchance >= vouchertempchance){
                                                    babystrings[(babystrings.length)] = voucherlist5strings[i];
                                              babyvals[(babyvals.length)] = 1;
                                                  }
                                          }
                                          parentswithvoucher = 0;
                                          }

                                      }


                                      var stringy = "";

                                      //capitalize it n make it pretty
                                      for (i = 0; i < (babystrings.length); i++) {
                                        babystrings[i] = babystrings[i].charAt(0).toUpperCase() + babystrings[i].slice(1);
                                      }

                                    //loop through babystrings to get vouchercount
                                    for (i = 0; i < (babystrings.length); i++) {
                                      if (parseInt(babyvals[i]) === 1){
                                        stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Voucher";
                                      }
                                      else {
                                          stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Vouchers";
                                      }
                                    }

                                    message.channel.send(stringy);

                                    //loop through babystrings again to print as intake format
                                    stringy = "**";
                                    for (i = 0; i < (babystrings.length); i++) {
                                        stringy = stringy + babystrings[i] + " " + babyvals[i];
                                        if (i < (babystrings.length-1)){
                                          stringy = stringy + ", ";
                                        }
                                        else {
                                          stringy = stringy + "**";
                                        }
                                    }


                                    message.channel.send(stringy);
                                    stringy = "";



                                    }

                                    //END BABY CODE


                                    }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 5)');
                                    });
                                    }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 4)');
                                    });
                                    }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 3)');
                                    });
                                    }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 2)');
                                    });
                                    }).catch(() => {
                                    message.reply('No response after three minutes, bleed canceled. (Parent 1)');
                                    });
                                    }

                                      if (parentnum == 6){

                                        message.reply('Please enter the vouchers in a list for parent 1.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist1 = (collected.first().content).split(',');
                                              message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                          message.reply('Please enter the vouchers in a list for parent 2.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist2 = (collected.first().content).split(',');
                                              message.channel.send('Parent 2 voucherlist: ' + voucherlist2);

                                        message.reply('Please enter the vouchers in a list for parent 3.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist3 = (collected.first().content).split(',');
                                              message.channel.send('Parent 3 voucherlist: ' + voucherlist3);

                                          message.reply('Please enter the vouchers in a list for parent 4.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist4 = (collected.first().content).split(',');
                                              message.channel.send('Parent 4 voucherlist: ' + voucherlist4);

                                          message.reply('Please enter the vouchers in a list for parent 5.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist5 = (collected.first().content).split(',');
                                              message.channel.send('Parent 5 voucherlist: ' + voucherlist5);

                                          message.reply('Please enter the vouchers in a list for parent 6.');
                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                            {max: 1, time: 180000}).then(collected => {

                                              var voucherlist6 = (collected.first().content).split(',');
                                              message.channel.send('Parent 6 voucherlist: ' + voucherlist6);
                                              //ENTER BABY CODE HERE

                                              var muthold = mutationchance;

                                              //ENTER BABY CODE HERE
                                              var b;
                                              for ( b = 1; b <= babynum; b++) {
                                                message.channel.send('**Baby ' + b + '**');
                                                mutationchance = muthold;

                                            var temp1;
                                            var temp2;
                                            var muttemp = 0;
                                            var muttempchance = 0;

                                            //MUTATIONS: FINISHED

                                            do {
                                            if (mutationchance > 100){
                                            muttemp = muttemp + 1;
                                            mutationchance = mutationchance -100;
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
                                            message.channel.send('**New mutations: ' + mutstring + '**');
                                          }


                                            //BORN TYPES: FINISHED

                                            var borntemp = 0;

                                            var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                            var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                            var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                            var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                            var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                            borntemp = (Math.floor(Math.random(1) * (100)));
                                            if (waterchance > borntemp){
                                            message.channel.send('**Waterborn**');
                                            }
                                            borntemp = (Math.floor(Math.random(1) * (100)));
                                            if (rainbowchance > borntemp){
                                            message.channel.send('**Rainbowborn**');
                                            }
                                            borntemp = (Math.floor(Math.random(1) * (100)));
                                            if (snekkitchance > borntemp){
                                            message.channel.send('**Snekkitborn**');
                                            }
                                            borntemp = (Math.floor(Math.random(1) * (100)));
                                            if (plantchance > borntemp){
                                            message.channel.send('**Plantborn**');
                                            }
                                            borntemp = (Math.floor(Math.random(1) * (100)));
                                            if (battlechance > borntemp){
                                            message.channel.send('**Battleborn**');
                                            }
                                            //VOUCHER LISTS: FINISHED
                                            var voucherlist1strings = [];
                                            var voucherlist1vals = [];

                                            var voucherlist2strings = [];
                                            var voucherlist2vals = [];

                                            var voucherlist3strings = [];
                                            var voucherlist3vals = [];

                                            var voucherlist4strings = [];
                                            var voucherlist4vals = [];

                                            var voucherlist5strings = [];
                                            var voucherlist5vals = [];

                                            var voucherlist6strings = [];
                                            var voucherlist6vals = [];

                                            var j;
                                            var babyvoucherlist;

                                            voucherlist1.sort();
                                            voucherlist2.sort();
                                            voucherlist3.sort();
                                            voucherlist4.sort();
                                            voucherlist5.sort();
                                            voucherlist6.sort();

                                            for (i=0; i <voucherlist1.length; i++) {
                                              voucherlist1[i] = voucherlist1[i].trim();
                                            }
                                            for (i=0; i <voucherlist2.length; i++) {
                                              voucherlist2[i] = voucherlist2[i].trim();
                                            }
                                            for (i=0; i <voucherlist3.length; i++) {
                                              voucherlist3[i] = voucherlist3[i].trim();
                                            }
                                            for (i=0; i <voucherlist4.length; i++) {
                                              voucherlist4[i] = voucherlist4[i].trim();
                                            }
                                            for (i=0; i <voucherlist5.length; i++) {
                                              voucherlist5[i] = voucherlist5[i].trim();
                                            }
                                            for (i=0; i <voucherlist6.length; i++) {
                                              voucherlist6[i] = voucherlist6[i].trim();
                                            }

                                            for (i = 0; i < (2 * voucherlist1.length); i++) {
                                              temp1 = voucherlist1.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist1strings[i] = temp1[i].toLowerCase();
                                              voucherlist1vals[i] = temp1[i + 1];
                                              i++
                                            }
                                            temp1 = [];

                                            for (i = 0; i < (2 * voucherlist2.length); i++) {
                                              temp1 = voucherlist2.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist2strings[i] = temp1[i].toLowerCase();
                                              voucherlist2vals[i] = temp1[i + 1];
                                              i++
                                            }
                                            temp1 = [];

                                            for (i = 0; i < (2 * voucherlist3.length); i++) {
                                              temp1 = voucherlist3.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist3strings[i] = temp1[i].toLowerCase();
                                              voucherlist3vals[i] = temp1[i + 1];
                                              i++
                                            }
                                            temp1 = [];

                                            for (i = 0; i < (2 * voucherlist4.length); i++) {
                                              temp1 = voucherlist4.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist4strings[i] = temp1[i].toLowerCase();
                                              voucherlist4vals[i] = temp1[i + 1];
                                              i++
                                            }
                                            temp1 = [];

                                            for (i = 0; i < (2 * voucherlist5.length); i++) {
                                              temp1 = voucherlist5.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist5strings[i] = temp1[i].toLowerCase();
                                              voucherlist5vals[i] = temp1[i + 1];
                                              i++
                                            }
                                            temp1 = [];

                                            for (i = 0; i < (2 * voucherlist6.length); i++) {
                                              temp1 = voucherlist6.toString().split(" ");
                                              temp1 = temp1.toString().split(",");
                                              voucherlist6strings[i] = temp1[i].toLowerCase();
                                              voucherlist6vals[i] = temp1[i + 1];
                                              i++
                                            }



                                            var babystrings = [];
                                            var babyvals = [];
                                            var vouchertempchance = 0;
                                            var voucherchance = 0;

                                            var parentswithvoucher = 0;


                                            voucherlist1vals = voucherlist1vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist1strings = voucherlist1strings.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist2vals = voucherlist2vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist2strings = voucherlist2strings.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist3vals = voucherlist3vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist3strings = voucherlist3strings.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist4vals = voucherlist4vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist4strings = voucherlist4strings.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist5vals = voucherlist5vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist5strings = voucherlist5strings.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist6vals = voucherlist6vals.filter(function( element ) {
                                               return element !== undefined;
                                            });
                                            voucherlist6strings = voucherlist6strings.filter(function( element ) {
                                               return element !== undefined;
                                            });

                                            //parent 1
                                              //for each voucher on parent 1:
                                              for (i = 0; i < voucherlist1strings.length; i++){
                                                //while parentvals[i] > 0, :
                                                while (parseInt(voucherlist1vals[i]) > 0){
                                                  //subtract one from parent 1's val list
                                                  voucherlist1vals[i] = (parseInt(voucherlist1vals[i]) - 1);
                                                  //parentswithvoucher + 1
                                                  parentswithvoucher += 1;
                                                  //console.log(parentswithvoucher);
                                                  //does parent 2 have it?
                                                  if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])])>0)){
                                                    //subtract one from parent 2's val list
                                                    var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                                          //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                                    voucherlist2vals[placement] = parseInt(voucherlist2vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 3 have it?
                                                  if ((voucherlist3strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist1strings[i])])>0)){
                                                    //subtract one from parent 3's val list
                                                    var placement = voucherlist3strings.indexOf(voucherlist1strings[i]);
                                                    voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 4 have it?
                                                  if ((voucherlist4strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist1strings[i])])>0)){
                                                    //subtract one from parent 4's val list
                                                    var placement = voucherlist4strings.indexOf(voucherlist1strings[i]);
                                                    voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 5 have it?
                                                  if ((voucherlist5strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist1strings[i])])>0)){
                                                    //subtract one from parent 5's val list
                                                    var placement = voucherlist5strings.indexOf(voucherlist1strings[i]);
                                                    voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 6 have it?
                                                  if ((voucherlist6strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist1strings[i])])>0)){
                                                    //subtract one from parent 6's val list
                                                    var placement = voucherlist6strings.indexOf(voucherlist1strings[i]);
                                                    voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 7 have it?

                                                //if voucher is in babystrings
                                                if ((babystrings.includes(voucherlist1strings[i]))) {
                                                  //update babyvals
                                                  voucherchance = (parentswithvoucher / parentnum) * 100;
                                                  vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                        if (voucherchance >= vouchertempchance){
                                                    babyvals[babystrings.indexOf(voucherlist1strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist1strings[i])]) + 1);
                                                        }
                                                }

                                                //if voucher isnt in babystrings
                                                else if (voucherlist1strings[i] != undefined) {
                                                  //add voucher to babystrings
                                                  //add voucher to babyvals
                                                  voucherchance = (parentswithvoucher / parentnum) * 100;
                                                  vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                  //console.log(Math.floor(Math.random(1) * (100)));
                                                        if (voucherchance >= vouchertempchance){
                                                          babystrings[(babystrings.length)] = voucherlist1strings[i];
                                                    babyvals[(babyvals.length)] = 1;
                                                        }
                                                }
                                                parentswithvoucher = 0;
                                                }

                                              }
                                              //repeat above for each parent
                                            //parent 2....

                                            //for each voucher on parent 2:
                                              for (i = 0; i < voucherlist2strings.length; i++){
                                                //while parentvals[i] > 0, :
                                                while (parseInt(voucherlist2vals[i]) > 0){
                                                  //subtract one from parent 2's val list
                                                  voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                                  //parentswithvoucher + 1
                                                  parentswithvoucher += 1;
                                                  //console.log(parentswithvoucher);
                                                  //does parent 3 have it?
                                                  if ((voucherlist3strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist2strings[i])])>0)){
                                                    //subtract one from parent 3's val list
                                                    var placement = voucherlist3strings.indexOf(voucherlist2strings[i]);
                                                    voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 4 have it?
                                                  if ((voucherlist4strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist2strings[i])])>0)){
                                                    //subtract one from parent 3's val list
                                                    var placement = voucherlist4strings.indexOf(voucherlist2strings[i]);
                                                    voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 5 have it?
                                                  if ((voucherlist5strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist2strings[i])])>0)){
                                                    //subtract one from parent 3's val list
                                                    var placement = voucherlist5strings.indexOf(voucherlist2strings[i]);
                                                    voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 6 have it?
                                                  if ((voucherlist6strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist2strings[i])])>0)){
                                                    //subtract one from parent 6's val list
                                                    var placement = voucherlist6strings.indexOf(voucherlist2strings[i]);
                                                    voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                  }
                                                  //does parent 7 have it?

                                                //if voucher is in babystrings
                                                if ((babystrings.includes(voucherlist2strings[i]))) {
                                                  //update babyvals
                                                  voucherchance = (parentswithvoucher / parentnum) * 100;
                                                  vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                        if (voucherchance >= vouchertempchance){
                                                    babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                                        }
                                                }

                                                //if voucher isnt in babystrings
                                                else if (voucherlist2strings[i] != undefined) {
                                                  //add voucher to babystrings
                                                  //add voucher to babyvals
                                                  voucherchance = (parentswithvoucher / parentnum) * 100;
                                                  vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                  //console.log(Math.floor(Math.random(1) * (100)));
                                                        if (voucherchance >= vouchertempchance){
                                                          babystrings[(babystrings.length)] = voucherlist2strings[i];
                                                    babyvals[(babyvals.length)] = 1;
                                                        }
                                                }
                                                parentswithvoucher = 0;
                                                }
                                              }

                                              //parent 3....

                                              //for each voucher on parent 3:
                                                for (i = 0; i < voucherlist3strings.length; i++){
                                                  //while parentvals[i] > 0, :
                                                  while (parseInt(voucherlist3vals[i]) > 0){
                                                    //subtract one from parent 3's val list
                                                    voucherlist3vals[i] = (parseInt(voucherlist3vals[i]) - 1);
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                    //console.log(parentswithvoucher);
                                                    //does parent 4 have it?
                                                    if ((voucherlist4strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist3strings[i])])>0)){
                                                      //subtract one from parent 3's val list
                                                      var placement = voucherlist4strings.indexOf(voucherlist3strings[i]);
                                                      voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 5 have it?
                                                    if ((voucherlist5strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist3strings[i])])>0)){
                                                      //subtract one from parent 3's val list
                                                      var placement = voucherlist5strings.indexOf(voucherlist3strings[i]);
                                                      voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 6 have it?
                                                    if ((voucherlist6strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist3strings[i])])>0)){
                                                      //subtract one from parent 6's val list
                                                      var placement = voucherlist6strings.indexOf(voucherlist3strings[i]);
                                                      voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 7 have it?

                                                  //if voucher is in babystrings
                                                  if ((babystrings.includes(voucherlist3strings[i]))) {
                                                    //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                              //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                    //if (voucherchance > vouchertempchance){
                                                                    //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                                      //}
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                      babyvals[babystrings.indexOf(voucherlist3strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist3strings[i])]) + 1);
                                                          }
                                                  }

                                                  //if voucher isnt in babystrings
                                                  else if (voucherlist3strings[i] != undefined) {
                                                    //add voucher to babystrings
                                                    //add voucher to babyvals
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                    //console.log(Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                            babystrings[(babystrings.length)] = voucherlist3strings[i];
                                                      babyvals[(babyvals.length)] = 1;
                                                          }
                                                  }
                                                  parentswithvoucher = 0;
                                                  }

                                              }

                                              //parent 4....

                                              //for each voucher on parent 4:
                                                for (i = 0; i < voucherlist4strings.length; i++){
                                                  //while parentvals[i] > 0, :
                                                  while (parseInt(voucherlist4vals[i]) > 0){
                                                    //subtract one from parent 4's val list
                                                    voucherlist4vals[i] = (parseInt(voucherlist4vals[i]) - 1);
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                    //console.log(parentswithvoucher);
                                                    //does parent 5 have it?
                                                    if ((voucherlist5strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist4strings[i])])>0)){
                                                      //subtract one from parent 3's val list
                                                      var placement = voucherlist5strings.indexOf(voucherlist4strings[i]);
                                                      voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 6 have it?
                                                    if ((voucherlist6strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist4strings[i])])>0)){
                                                      //subtract one from parent 6's val list
                                                      var placement = voucherlist6strings.indexOf(voucherlist4strings[i]);
                                                      voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 7 have it?

                                                  //if voucher is in babystrings
                                                  if ((babystrings.includes(voucherlist4strings[i]))) {
                                                    //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                              //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                    //if (voucherchance > vouchertempchance){
                                                                    //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                                      //}
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                      babyvals[babystrings.indexOf(voucherlist4strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist4strings[i])]) + 1);
                                                          }
                                                  }

                                                  //if voucher isnt in babystrings
                                                  else if (voucherlist4strings[i] != undefined) {
                                                    //add voucher to babystrings
                                                    //add voucher to babyvals
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                    //console.log(Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                            babystrings[(babystrings.length)] = voucherlist4strings[i];
                                                      babyvals[(babyvals.length)] = 1;
                                                          }
                                                  }
                                                  parentswithvoucher = 0;
                                                  }

                                              }

                                              //parent 5....

                                              //for each voucher on parent 5:
                                                for (i = 0; i < voucherlist5strings.length; i++){
                                                  //while parentvals[i] > 0, :
                                                  while (parseInt(voucherlist5vals[i]) > 0){
                                                    //subtract one from parent 5's val list
                                                    voucherlist5vals[i] = (parseInt(voucherlist5vals[i]) - 1);
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                    //console.log(parentswithvoucher);
                                                    //does parent 6 have it?
                                                    if ((voucherlist6strings.includes(voucherlist5strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist5strings[i])])>0)){
                                                      //subtract one from parent 6's val list
                                                      var placement = voucherlist6strings.indexOf(voucherlist5strings[i]);
                                                      voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                      //parentswithvoucher + 1
                                                      parentswithvoucher += 1;
                                                    }
                                                    //does parent 7 have it?

                                                  //if voucher is in babystrings
                                                  if ((babystrings.includes(voucherlist5strings[i]))) {
                                                    //update babystrings
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                      babyvals[babystrings.indexOf(voucherlist5strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist5strings[i])]) + 1);
                                                          }
                                                  }

                                                  //if voucher isnt in babystrings
                                                  else if (voucherlist5strings[i] != undefined) {
                                                    //add voucher to babystrings
                                                    //add voucher to babyvals
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                    //console.log(Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                            babystrings[(babystrings.length)] = voucherlist5strings[i];
                                                      babyvals[(babyvals.length)] = 1;
                                                          }
                                                  }
                                                  parentswithvoucher = 0;
                                                  }

                                              }

                                              //parent 6....

                                              //for each voucher on parent 6:
                                                for (i = 0; i < voucherlist6strings.length; i++){
                                                  //while parentvals[i] > 0, :
                                                  while (parseInt(voucherlist6vals[i]) > 0){
                                                    //subtract one from parent 6's val list
                                                    voucherlist6vals[i] = (parseInt(voucherlist6vals[i]) - 1);
                                                    //parentswithvoucher + 1
                                                    parentswithvoucher += 1;
                                                    //console.log(parentswithvoucher);
                                                    //does parent 7 have it?

                                                  //if voucher is in babystrings
                                                  if ((babystrings.includes(voucherlist6strings[i]))) {
                                                    //update babystrings
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                      babyvals[babystrings.indexOf(voucherlist6strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist6strings[i])]) + 1);
                                                          }
                                                  }

                                                  //if voucher isnt in babystrings
                                                  else if (voucherlist6strings[i] != undefined) {
                                                    //add voucher to babystrings
                                                    //add voucher to babyvals
                                                    voucherchance = (parentswithvoucher / parentnum) * 100;
                                                    vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                    //console.log(Math.floor(Math.random(1) * (100)));
                                                          if (voucherchance >= vouchertempchance){
                                                            babystrings[(babystrings.length)] = voucherlist6strings[i];
                                                      babyvals[(babyvals.length)] = 1;
                                                          }
                                                  }
                                                  parentswithvoucher = 0;
                                                  }

                                              }


                                              var stringy = "";

                                              //capitalize it n make it pretty
                                              for (i = 0; i < (babystrings.length); i++) {
                                                babystrings[i] = babystrings[i].charAt(0).toUpperCase() + babystrings[i].slice(1);
                                              }

                                            //loop through babystrings to get vouchercount
                                            for (i = 0; i < (babystrings.length); i++) {
                                              if (parseInt(babyvals[i]) === 1){
                                                stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Voucher";
                                              }
                                              else {
                                                  stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Vouchers";
                                              }
                                            }

                                            message.channel.send(stringy);

                                            //loop through babystrings again to print as intake format
                                            stringy = "**";
                                            for (i = 0; i < (babystrings.length); i++) {
                                                stringy = stringy + babystrings[i] + " " + babyvals[i];
                                                if (i < (babystrings.length-1)){
                                                  stringy = stringy + ", ";
                                                }
                                                else {
                                                  stringy = stringy + "**";
                                                }
                                            }


                                            message.channel.send(stringy);
                                            stringy = "";


                                            }

                                            //END BABY CODE


                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 6)');
                                            });
                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 5)');
                                            });
                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 4)');
                                            });
                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 3)');
                                            });
                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 2)');
                                            });
                                            }).catch(() => {
                                            message.reply('No response after three minutes, bleed canceled. (Parent 1)');
                                            });
                                            }




                                              if (parentnum == 7){
                                                message.reply('Please enter the vouchers in a list for parent 1.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist1 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 1 voucherlist: ' + voucherlist1);

                                                  message.reply('Please enter the vouchers in a list for parent 2.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist2 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 2 voucherlist: ' + voucherlist2);

                                                message.reply('Please enter the vouchers in a list for parent 3.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist3 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 3 voucherlist: ' + voucherlist3);

                                                  message.reply('Please enter the vouchers in a list for parent 4.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist4 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 4 voucherlist: ' + voucherlist4);

                                                  message.reply('Please enter the vouchers in a list for parent 5.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist5 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 5 voucherlist: ' + voucherlist5);

                                                  message.reply('Please enter the vouchers in a list for parent 6.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist6 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 6 voucherlist: ' + voucherlist6);

                                                  message.reply('Please enter the vouchers in a list for parent 7.');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    {max: 1, time: 180000}).then(collected => {

                                                      var voucherlist7 = (collected.first().content).split(',');
                                                      message.channel.send('Parent 7 voucherlist: ' + voucherlist7);
                                                      //ENTER BABY CODE HERE

                                                      var muthold = mutationchance;

                                                      //ENTER BABY CODE HERE
                                                      var b;
                                                      for ( b = 1; b <= babynum; b++) {
                                                        message.channel.send('**Baby ' + b + '**');
                                                        mutationchance = muthold;

                                                    var temp1;
                                                    var temp2;
                                                    var muttemp = 0;
                                                    var muttempchance = 0;

                                                    //MUTATIONS: FINISHED

                                                    do {
                                                    if (mutationchance > 100){
                                                    muttemp = muttemp + 1;
                                                    mutationchance = mutationchance -100;
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
                                                    message.channel.send('**New mutations: ' + mutstring + '**');
                                                  }

                                                    //BORN TYPES: FINISHED

                                                    var borntemp = 0;

                                                    var waterchance = (parseInt(borntypearray[0]) / parentnum) * 100;
                                                    var rainbowchance = (parseInt(borntypearray[1]) / parentnum) * 100;
                                                    var snekkitchance = (parseInt(borntypearray[2]) / parentnum) * 100;
                                                    var plantchance = (parseInt(borntypearray[3]) / parentnum) * 100;
                                                    var battlechance = (parseInt(borntypearray[4]) / parentnum) * 100;

                                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                                    if (waterchance > borntemp){
                                                    message.channel.send('**Waterborn**');
                                                    }
                                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                                    if (rainbowchance > borntemp){
                                                    message.channel.send('**Rainbowborn**');
                                                    }
                                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                                    if (snekkitchance > borntemp){
                                                    message.channel.send('**Snekkitborn**');
                                                    }
                                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                                    if (plantchance > borntemp){
                                                    message.channel.send('**Plantborn**');
                                                    }
                                                    borntemp = (Math.floor(Math.random(1) * (100)));
                                                    if (battlechance > borntemp){
                                                    message.channel.send('**Battleborn**');
                                                    }
                                                    //VOUCHER LISTS: FINISHED

                                                    var voucherlist1strings = [];
                                                    var voucherlist1vals = [];

                                                    var voucherlist2strings = [];
                                                    var voucherlist2vals = [];

                                                    var voucherlist3strings = [];
                                                    var voucherlist3vals = [];

                                                    var voucherlist4strings = [];
                                                    var voucherlist4vals = [];

                                                    var voucherlist5strings = [];
                                                    var voucherlist5vals = [];

                                                    var voucherlist6strings = [];
                                                    var voucherlist6vals = [];

                                                    var voucherlist7strings = [];
                                                    var voucherlist7vals = [];

                                                    var j;
                                                    var babyvoucherlist;

                                                    voucherlist1.sort();
                                                    voucherlist2.sort();
                                                    voucherlist3.sort();
                                                    voucherlist4.sort();
                                                    voucherlist5.sort();
                                                    voucherlist6.sort();
                                                    voucherlist7.sort();

                                                    for (i=0; i <voucherlist1.length; i++) {
                                                      voucherlist1[i] = voucherlist1[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist2.length; i++) {
                                                      voucherlist2[i] = voucherlist2[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist3.length; i++) {
                                                      voucherlist3[i] = voucherlist3[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist4.length; i++) {
                                                      voucherlist4[i] = voucherlist4[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist5.length; i++) {
                                                      voucherlist5[i] = voucherlist5[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist6.length; i++) {
                                                      voucherlist6[i] = voucherlist6[i].trim();
                                                    }
                                                    for (i=0; i <voucherlist7.length; i++) {
                                                      voucherlist7[i] = voucherlist7[i].trim();
                                                    }

                                                    for (i = 0; i < (2 * voucherlist1.length); i++) {
                                                      temp1 = voucherlist1.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist1strings[i] = temp1[i].toLowerCase();
                                                      voucherlist1vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist2.length); i++) {
                                                      temp1 = voucherlist2.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist2strings[i] = temp1[i].toLowerCase();
                                                      voucherlist2vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist3.length); i++) {
                                                      temp1 = voucherlist3.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist3strings[i] = temp1[i].toLowerCase();
                                                      voucherlist3vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist4.length); i++) {
                                                      temp1 = voucherlist4.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist4strings[i] = temp1[i].toLowerCase();
                                                      voucherlist4vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist5.length); i++) {
                                                      temp1 = voucherlist5.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist5strings[i] = temp1[i].toLowerCase();
                                                      voucherlist5vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist6.length); i++) {
                                                      temp1 = voucherlist6.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist6strings[i] = temp1[i].toLowerCase();
                                                      voucherlist6vals[i] = temp1[i + 1];
                                                      i++
                                                    }
                                                    temp1 = [];

                                                    for (i = 0; i < (2 * voucherlist7.length); i++) {
                                                      temp1 = voucherlist7.toString().split(" ");
                                                      temp1 = temp1.toString().split(",");
                                                      voucherlist7strings[i] = temp1[i].toLowerCase();
                                                      voucherlist7vals[i] = temp1[i + 1];
                                                      i++
                                                    }



                                                    var babystrings = [];
                                                    var babyvals = [];
                                                    var vouchertempchance = 0;
                                                    var voucherchance = 0;

                                                    var parentswithvoucher = 0;


                                                    voucherlist1vals = voucherlist1vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist1strings = voucherlist1strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist2vals = voucherlist2vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist2strings = voucherlist2strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist3vals = voucherlist3vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist3strings = voucherlist3strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist4vals = voucherlist4vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist4strings = voucherlist4strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist5vals = voucherlist5vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist5strings = voucherlist5strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist6vals = voucherlist6vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist6strings = voucherlist6strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist7vals = voucherlist7vals.filter(function( element ) {
                                                       return element !== undefined;
                                                    });
                                                    voucherlist7strings = voucherlist7strings.filter(function( element ) {
                                                       return element !== undefined;
                                                    });

                                                    //parent 1
                                                      //for each voucher on parent 1:
                                                      for (i = 0; i < voucherlist1strings.length; i++){
                                                        //while parentvals[i] > 0, :
                                                        while (parseInt(voucherlist1vals[i]) > 0){
                                                          //subtract one from parent 1's val list
                                                          voucherlist1vals[i] = (parseInt(voucherlist1vals[i]) - 1);
                                                          //parentswithvoucher + 1
                                                          parentswithvoucher += 1;
                                                          //console.log(parentswithvoucher);
                                                          //does parent 2 have it?
                                                          if ((voucherlist2strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist2vals[voucherlist2strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 2's val list
                                                            var placement = voucherlist2strings.indexOf(voucherlist1strings[i]);
                                                                  //console.log(voucherlist2strings.indexOf(voucherlist1strings[i]));
                                                            voucherlist2vals[placement] = parseInt(voucherlist2vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 3 have it?
                                                          if ((voucherlist3strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 3's val list
                                                            var placement = voucherlist3strings.indexOf(voucherlist1strings[i]);
                                                            voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 4 have it?
                                                          if ((voucherlist4strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 4's val list
                                                            var placement = voucherlist4strings.indexOf(voucherlist1strings[i]);
                                                            voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 5 have it?
                                                          if ((voucherlist5strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 5's val list
                                                            var placement = voucherlist5strings.indexOf(voucherlist1strings[i]);
                                                            voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 6 have it?
                                                          if ((voucherlist6strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 6's val list
                                                            var placement = voucherlist6strings.indexOf(voucherlist1strings[i]);
                                                            voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 7 have it?
                                                          if ((voucherlist7strings.includes(voucherlist1strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist1strings[i])])>0)){
                                                            //subtract one from parent 7's val list
                                                            var placement = voucherlist7strings.indexOf(voucherlist1strings[i]);
                                                            voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //.....does parent 8 have it?

                                                        //if voucher is in babystrings
                                                        if ((babystrings.includes(voucherlist1strings[i]))) {
                                                          //update babyvals
                                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                if (voucherchance >= vouchertempchance){
                                                            babyvals[babystrings.indexOf(voucherlist1strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist1strings[i])]) + 1);
                                                                }
                                                        }

                                                        //if voucher isnt in babystrings
                                                        else if (voucherlist1strings[i] != undefined) {
                                                          //add voucher to babystrings
                                                          //add voucher to babyvals
                                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          //console.log(Math.floor(Math.random(1) * (100)));
                                                                if (voucherchance >= vouchertempchance){
                                                                  babystrings[(babystrings.length)] = voucherlist1strings[i];
                                                            babyvals[(babyvals.length)] = 1;
                                                                }
                                                        }
                                                        parentswithvoucher = 0;
                                                        }

                                                      }
                                                      //repeat above for each parent
                                                    //parent 2....

                                                    //for each voucher on parent 2:
                                                      for (i = 0; i < voucherlist2strings.length; i++){
                                                        //while parentvals[i] > 0, :
                                                        while (parseInt(voucherlist2vals[i]) > 0){
                                                          //subtract one from parent 2's val list
                                                          voucherlist2vals[i] = (parseInt(voucherlist2vals[i]) - 1);
                                                          //parentswithvoucher + 1
                                                          parentswithvoucher += 1;
                                                          //console.log(parentswithvoucher);
                                                          //does parent 3 have it?
                                                          if ((voucherlist3strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist3vals[voucherlist3strings.indexOf(voucherlist2strings[i])])>0)){
                                                            //subtract one from parent 3's val list
                                                            var placement = voucherlist3strings.indexOf(voucherlist2strings[i]);
                                                            voucherlist3vals[placement] = parseInt(voucherlist3vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 4 have it?
                                                          if ((voucherlist4strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist2strings[i])])>0)){
                                                            //subtract one from parent 3's val list
                                                            var placement = voucherlist4strings.indexOf(voucherlist2strings[i]);
                                                            voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 5 have it?
                                                          if ((voucherlist5strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist2strings[i])])>0)){
                                                            //subtract one from parent 3's val list
                                                            var placement = voucherlist5strings.indexOf(voucherlist2strings[i]);
                                                            voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 6 have it?
                                                          if ((voucherlist6strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist2strings[i])])>0)){
                                                            //subtract one from parent 6's val list
                                                            var placement = voucherlist6strings.indexOf(voucherlist2strings[i]);
                                                            voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //does parent 7 have it?
                                                          if ((voucherlist7strings.includes(voucherlist2strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist2strings[i])])>0)){
                                                            //subtract one from parent 7's val list
                                                            var placement = voucherlist7strings.indexOf(voucherlist2strings[i]);
                                                            voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                          }
                                                          //.....does parent 8 have it?

                                                        //if voucher is in babystrings
                                                        if ((babystrings.includes(voucherlist2strings[i]))) {
                                                          //update babyvals
                                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                if (voucherchance >= vouchertempchance){
                                                            babyvals[babystrings.indexOf(voucherlist2strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist2strings[i])]) + 1);
                                                                }
                                                        }

                                                        //if voucher isnt in babystrings
                                                        else if (voucherlist2strings[i] != undefined) {
                                                          //add voucher to babystrings
                                                          //add voucher to babyvals
                                                          voucherchance = (parentswithvoucher / parentnum) * 100;
                                                          vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                          //console.log(Math.floor(Math.random(1) * (100)));
                                                                if (voucherchance >= vouchertempchance){
                                                                  babystrings[(babystrings.length)] = voucherlist2strings[i];
                                                            babyvals[(babyvals.length)] = 1;
                                                                }
                                                        }
                                                        parentswithvoucher = 0;
                                                        }
                                                      }

                                                      //parent 3....

                                                      //for each voucher on parent 3:
                                                        for (i = 0; i < voucherlist3strings.length; i++){
                                                          //while parentvals[i] > 0, :
                                                          while (parseInt(voucherlist3vals[i]) > 0){
                                                            //subtract one from parent 3's val list
                                                            voucherlist3vals[i] = (parseInt(voucherlist3vals[i]) - 1);
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                            //console.log(parentswithvoucher);
                                                            //does parent 4 have it?
                                                            if ((voucherlist4strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist4vals[voucherlist4strings.indexOf(voucherlist3strings[i])])>0)){
                                                              //subtract one from parent 3's val list
                                                              var placement = voucherlist4strings.indexOf(voucherlist3strings[i]);
                                                              voucherlist4vals[placement] = parseInt(voucherlist4vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 5 have it?
                                                            if ((voucherlist5strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist3strings[i])])>0)){
                                                              //subtract one from parent 3's val list
                                                              var placement = voucherlist5strings.indexOf(voucherlist3strings[i]);
                                                              voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 6 have it?
                                                            if ((voucherlist6strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist3strings[i])])>0)){
                                                              //subtract one from parent 6's val list
                                                              var placement = voucherlist6strings.indexOf(voucherlist3strings[i]);
                                                              voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 7 have it?
                                                            if ((voucherlist7strings.includes(voucherlist3strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist3strings[i])])>0)){
                                                              //subtract one from parent 7's val list
                                                              var placement = voucherlist7strings.indexOf(voucherlist3strings[i]);
                                                              voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //.....does parent 8 have it?

                                                          //if voucher is in babystrings
                                                          if ((babystrings.includes(voucherlist3strings[i]))) {
                                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                                      //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                            //if (voucherchance > vouchertempchance){
                                                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                                              //}
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                              babyvals[babystrings.indexOf(voucherlist3strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist3strings[i])]) + 1);
                                                                  }
                                                          }

                                                          //if voucher isnt in babystrings
                                                          else if (voucherlist3strings[i] != undefined) {
                                                            //add voucher to babystrings
                                                            //add voucher to babyvals
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                                    babystrings[(babystrings.length)] = voucherlist3strings[i];
                                                              babyvals[(babyvals.length)] = 1;
                                                                  }
                                                          }
                                                          parentswithvoucher = 0;
                                                          }

                                                      }

                                                      //parent 4....

                                                      //for each voucher on parent 4:
                                                        for (i = 0; i < voucherlist4strings.length; i++){
                                                          //while parentvals[i] > 0, :
                                                          while (parseInt(voucherlist4vals[i]) > 0){
                                                            //subtract one from parent 4's val list
                                                            voucherlist4vals[i] = (parseInt(voucherlist4vals[i]) - 1);
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                            //console.log(parentswithvoucher);
                                                            //does parent 5 have it?
                                                            if ((voucherlist5strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist5vals[voucherlist5strings.indexOf(voucherlist4strings[i])])>0)){
                                                              //subtract one from parent 3's val list
                                                              var placement = voucherlist5strings.indexOf(voucherlist4strings[i]);
                                                              voucherlist5vals[placement] = parseInt(voucherlist5vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 6 have it?
                                                            if ((voucherlist6strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist4strings[i])])>0)){
                                                              //subtract one from parent 6's val list
                                                              var placement = voucherlist6strings.indexOf(voucherlist4strings[i]);
                                                              voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 7 have it?
                                                            if ((voucherlist7strings.includes(voucherlist4strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist4strings[i])])>0)){
                                                              //subtract one from parent 7's val list
                                                              var placement = voucherlist7strings.indexOf(voucherlist4strings[i]);
                                                              voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //.....does parent 8 have it?

                                                          //if voucher is in babystrings
                                                          if ((babystrings.includes(voucherlist4strings[i]))) {
                                                            //update babyvals 	voucherchance = (parentswithvoucher / parentnum) * 100
                                                                      //vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                            //if (voucherchance > vouchertempchance){
                                                                            //babyvals[babyvals.indexOf(voucherlist1[i])] = babyvals[babyvals.indexOf(voucherlist1[i])] + 1;
                                                                              //}
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                              babyvals[babystrings.indexOf(voucherlist4strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist4strings[i])]) + 1);
                                                                  }
                                                          }

                                                          //if voucher isnt in babystrings
                                                          else if (voucherlist4strings[i] != undefined) {
                                                            //add voucher to babystrings
                                                            //add voucher to babyvals
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                                    babystrings[(babystrings.length)] = voucherlist4strings[i];
                                                              babyvals[(babyvals.length)] = 1;
                                                                  }
                                                          }
                                                          parentswithvoucher = 0;
                                                          }

                                                      }

                                                      //parent 5....

                                                      //for each voucher on parent 5:
                                                        for (i = 0; i < voucherlist5strings.length; i++){
                                                          //while parentvals[i] > 0, :
                                                          while (parseInt(voucherlist5vals[i]) > 0){
                                                            //subtract one from parent 5's val list
                                                            voucherlist5vals[i] = (parseInt(voucherlist5vals[i]) - 1);
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                            //console.log(parentswithvoucher);
                                                            //does parent 6 have it?
                                                            if ((voucherlist6strings.includes(voucherlist5strings[i])) && (parseInt(voucherlist6vals[voucherlist6strings.indexOf(voucherlist5strings[i])])>0)){
                                                              //subtract one from parent 6's val list
                                                              var placement = voucherlist6strings.indexOf(voucherlist5strings[i]);
                                                              voucherlist6vals[placement] = parseInt(voucherlist6vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //does parent 7 have it?
                                                            if ((voucherlist7strings.includes(voucherlist5strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist5strings[i])])>0)){
                                                              //subtract one from parent 7's val list
                                                              var placement = voucherlist7strings.indexOf(voucherlist5strings[i]);
                                                              voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //.....does parent 8 have it?

                                                          //if voucher is in babystrings
                                                          if ((babystrings.includes(voucherlist5strings[i]))) {
                                                            //update babystrings
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                              babyvals[babystrings.indexOf(voucherlist5strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist5strings[i])]) + 1);
                                                                  }
                                                          }

                                                          //if voucher isnt in babystrings
                                                          else if (voucherlist5strings[i] != undefined) {
                                                            //add voucher to babystrings
                                                            //add voucher to babyvals
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                                    babystrings[(babystrings.length)] = voucherlist5strings[i];
                                                              babyvals[(babyvals.length)] = 1;
                                                                  }
                                                          }
                                                          parentswithvoucher = 0;
                                                          }

                                                      }

                                                      //parent 6....

                                                      //for each voucher on parent 6:
                                                        for (i = 0; i < voucherlist6strings.length; i++){
                                                          //while parentvals[i] > 0, :
                                                          while (parseInt(voucherlist6vals[i]) > 0){
                                                            //subtract one from parent 6's val list
                                                            voucherlist6vals[i] = (parseInt(voucherlist6vals[i]) - 1);
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                            //console.log(parentswithvoucher);
                                                            //does parent 7 have it?
                                                            if ((voucherlist7strings.includes(voucherlist6strings[i])) && (parseInt(voucherlist7vals[voucherlist7strings.indexOf(voucherlist6strings[i])])>0)){
                                                              //subtract one from parent 7's val list
                                                              var placement = voucherlist7strings.indexOf(voucherlist6strings[i]);
                                                              voucherlist7vals[placement] = parseInt(voucherlist7vals[placement])-1;
                                                              //parentswithvoucher + 1
                                                              parentswithvoucher += 1;
                                                            }
                                                            //.....does parent 8 have it?

                                                          //if voucher is in babystrings
                                                          if ((babystrings.includes(voucherlist6strings[i]))) {
                                                            //update babystrings
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                              babyvals[babystrings.indexOf(voucherlist6strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist6strings[i])]) + 1);
                                                                  }
                                                          }

                                                          //if voucher isnt in babystrings
                                                          else if (voucherlist6strings[i] != undefined) {
                                                            //add voucher to babystrings
                                                            //add voucher to babyvals
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                                    babystrings[(babystrings.length)] = voucherlist6strings[i];
                                                              babyvals[(babyvals.length)] = 1;
                                                                  }
                                                          }
                                                          parentswithvoucher = 0;
                                                          }

                                                      }

                                                      //parent 7....

                                                      //for each voucher on parent 7:
                                                        for (i = 0; i < voucherlist7strings.length; i++){
                                                          //while parentvals[i] > 0, :
                                                          while (parseInt(voucherlist7vals[i]) > 0){
                                                            //subtract one from parent 7's val list
                                                            voucherlist7vals[i] = (parseInt(voucherlist7vals[i]) - 1);
                                                            //parentswithvoucher + 1
                                                            parentswithvoucher += 1;
                                                            //.....does parent 8 have it?

                                                          //if voucher is in babystrings
                                                          if ((babystrings.includes(voucherlist7strings[i]))) {
                                                            //update babystrings
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                              babyvals[babystrings.indexOf(voucherlist7strings[i])] = (parseInt(babyvals[babystrings.indexOf(voucherlist7strings[i])]) + 1);
                                                                  }
                                                          }

                                                          //if voucher isnt in babystrings
                                                          else if (voucherlist7strings[i] != undefined) {
                                                            //add voucher to babystrings
                                                            //add voucher to babyvals
                                                            voucherchance = (parentswithvoucher / parentnum) * 100;
                                                            vouchertempchance = (Math.floor(Math.random(1) * (100)));
                                                            //console.log(Math.floor(Math.random(1) * (100)));
                                                                  if (voucherchance >= vouchertempchance){
                                                                    babystrings[(babystrings.length)] = voucherlist7strings[i];
                                                              babyvals[(babyvals.length)] = 1;
                                                                  }
                                                          }
                                                          parentswithvoucher = 0;
                                                          }

                                                      }


                                                      var stringy = "";

                                                      //capitalize it n make it pretty
                                                      for (i = 0; i < (babystrings.length); i++) {
                                                        babystrings[i] = babystrings[i].charAt(0).toUpperCase() + babystrings[i].slice(1);
                                                      }

                                                    //loop through babystrings to get vouchercount
                                                    for (i = 0; i < (babystrings.length); i++) {
                                                      if (parseInt(babyvals[i]) === 1){
                                                        stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Voucher";
                                                      }
                                                      else {
                                                          stringy = stringy + "\n" + babyvals[i] + " " + babystrings[i] + " Vouchers";
                                                      }
                                                    }

                                                    message.channel.send(stringy);

                                                    //loop through babystrings again to print as intake format
                                                    stringy = "**";
                                                    for (i = 0; i < (babystrings.length); i++) {
                                                        stringy = stringy + babystrings[i] + " " + babyvals[i];
                                                        if (i < (babystrings.length-1)){
                                                          stringy = stringy + ", ";
                                                        }
                                                        else {
                                                          stringy = stringy + "**";
                                                        }
                                                    }


                                                    message.channel.send(stringy);
                                                    stringy = "";


                                                    }

                                                    //END BABY CODE



                                              }).catch(() => {
                                              message.reply('No response after three minutes, bleed canceled. (Parent 7)');
                                              });

                                      }).catch(() => {
                                      message.reply('No response after three minutes, bleed canceled. (Parent 6)');
                                      });

                              }).catch(() => {
                              message.reply('No response after three minutes, bleed canceled. (Parent 5)');
                              });

                      }).catch(() => {
                      message.reply('No response after three minutes, bleed canceled. (Parent 4)');
                      });

              }).catch(() => {
              message.reply('No response after three minutes, bleed canceled. (Parent 3)');
              });

      }).catch(() => {
      message.reply('No response after three minutes, bleed canceled. (Parent 2)');
      });

    }).catch(() => {
    message.reply('No response after three minutes, bleed canceled. (Parent 1)');
    });
  }









                              //end continue 3 END HERE









                            } else {
                              message.reply('Error; Battleborn data not collected. ')
                            }

                          } else {
                            message.reply('Error; Plantborn data not collected.')
                          }

                        } else {
                          message.reply('Error; Snekkitborn data not collected.')
                        }


                      } else {
                        message.reply('Error; Rainbowborn data not collected.')
                      }

                    } else {
                      message.reply('Error; Waterborn data not collected.')
                    }









                  }).catch(() => {
                    message.reply('No response after three minutes, bleed canceled.');
                  });


                  //end continue 3









                } else
                  message.reply('Real number next time, please.');
              }).catch(() => {
                message.reply('No response after three minutes, bleed canceled.');
              });

              //end continue 2


            } else
              message.reply('Real number next time, please.');
          }).catch(() => {
            message.reply('No response after three minutes, bleed canceled.');
          });

          //end continue 1
        } //end if parentnum == false
      } else
        message.reply('Real number next time, please.'); //start 'How many parents are there?'' catch

    }).catch(() => {
      message.reply('No response after three minutes, bleed canceled.');
    }); //end 'How many parents are there?'' catch
  }) //end command
} //end module.exports
