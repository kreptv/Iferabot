const mongo = require('./mongo')
const command = require('./command')

module.exports = (client) => {

  const cache = {};

  command(client, 'roll', async (message) => {
    var temp = message.content.slice(6, message.content.length);
    var s = temp.includes('s');
    temp = temp.split('d');

    num1 = temp[0];
    num2 = temp[1];

    var finalstring = '';
    var finaltotal = 0;


    if (s === true) { //s is in string

      temparray2 = temp[1].split('s')
      num2 = temparray2[0];
      var num3 = temparray2[1];
      var failstring = '**Fails:** ';
      var failtotal = 0;
      var successtotal = 0;
      var successstring = '**Successes:** ';

      while (num1 > 0) {

        var final = parseInt(((Math.floor(Math.random(1) * num2)) + 1));

        if (final >= num3){
          successstring = successstring + final + ', ';
          successtotal ++;
        }
        else if (final < num3){
          failstring = failstring + final + ', ';
          failtotal ++;
        }
        num1--;
      } //end while

    if (failtotal > 0){
      failstring = failstring.slice(0, -2);
    }
    if (successtotal > 0){
      successstring = successstring.slice(0, -2);
    }


      message.channel.send(successstring + '\n' + failstring + '\n**Number of successes:** ' + successtotal);




    } else { //s is not in string
      while (num1 > 0) {

        var final = parseInt(((Math.floor(Math.random(1) * num2)) + 1));
        finalstring = finalstring + final;
        finaltotal = parseInt(final) + parseInt(finaltotal);

        num1--;
        finalstring = finalstring + ', ';
      } //end while

      finalstring = finalstring.slice(0, -2);
      if (parseInt(temp[0]) === 1) {
        message.channel.send(finalstring);
      } else {
        message.channel.send(finalstring + ' = ' + finaltotal);
      }
    }



  }) //end command



}
