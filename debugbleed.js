const mongo = require('./mongo')
const command = require('./command')
const blobSchema = require('./schemas/blob-schema')
// Load the full build.
var _ = require('lodash');

const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = (client) => {

    command(client, ['debugbleed'], async message => {



      for (j = 0; j < addons.length; j++){
        var curr = addons[j]
        if (curr == "Parent Focus"){
           babstring = babstring + generateFocuses(message, curr, babcount)
        } else if (curr == "Color Focus"){
          babstring = babstring + generateFocuses(message, curr, babcount)
        }else if (curr == "Trait Focus"){
          babstring = babstring + generateFocuses(message, curr, babcount)
        }else if (curr == "Trait Ignore"){
          babstring = babstring + generateFocuses(message, curr, babcount)
        }else if (curr == "Waterborn Addon"){
          waterborn = generateFocuses(message, curr, babcount)
        }else if (curr == "Rainbowborn Addon"){
          rainbowborn = generateFocuses(message, curr, babcount)
        }else if (curr == "Snekkitborn Addon"){
          snekkitborn = generateFocuses(message, curr, babcount)
        }else if (curr == "Plantborn Addon"){
          plantborn = generateFocuses(message, curr, babcount)
        }else if (curr == "Battleborn Addon"){
          battleborn = generateFocuses(message, curr, babcount)
        }else if (curr == "Yume Addon"){
          babstring = babstring + generateFocuses(message, curr, babcount)
        }else if (curr == "Reinala Addon"){
          babstring = babstring + generateFocuses(message, curr, babcount)
        }
      } // end for number of addons
      //fucked



    })

    function Parent(name, borntypesarray, voucherlistarray, strings, vals){
        this.parentName = name;
        this.parentBornTypesArray = borntypesarray;
        this.parentVoucherListArray = voucherlistarray;
        this.parentVoucherListArrayStrings = strings;
        this.parentVoucherListArrayVals = vals;
    }
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

  //message.channel.send(stringy);

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
