const mongo = require('./mongo')
const command = require('./command')

module.exports = (client) => {
  command(client, 'hexblend', (message) => {

    message.channel.send("enter first hex!");


    message.channel.awaitMessages(m => m.author.id == message.author.id, {
      max: 1,
      time: 60000
    }).then(collected => {
      // only accept messages by the user who sent the command
      // accept only 1 message, and return the promise after 60s

      // first (and, in this case, only) message of the collection
      var hex1 = collected.first().content;

      message.channel.send("enter second hex!");

      message.channel.awaitMessages(m => m.author.id == message.author.id, {
        max: 1,
        time: 60000
      }).then(collected => {
        // only accept messages by the user who sent the command
        // accept only 1 message, and return the promise after 60s

        // first (and, in this case, only) message of the collection
        var hex2 = collected.first().content;
        //directmiddle

        var hex = "#";
        for (var i = 0; i < 3; i++) {
          var sub1 = hex1.substring(1 + 2 * i, 3 + 2 * i);
          var sub2 = hex2.substring(1 + 2 * i, 3 + 2 * i);
          var v1 = parseInt(sub1, 16);
          var v2 = parseInt(sub2, 16);
          var v = Math.floor((v1 + v2) / 2);
          var sub = v.toString(16).toUpperCase();
          var padsub = ('0' + sub).slice(-2);
          hex += padsub;
        }

        message.channel.send(hex);

      });


    })



  })

  command(client, 'hex', (message) => {

    var hex = "#" + Math.floor(Math.random()*16777215).toString(16);






    message.channel.send(hex);



  })

}
