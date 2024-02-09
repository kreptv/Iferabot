const mongo = require('./mongo')
const command = require('./command')
const assSchema = require('./schemas/ass-schema')

module.exports = (client) => {

  command(client, ['pathead', 'pat', 'pet', 'pethead', 'patleg', 'petleg'], async(message) => {

    await mongo().then(async (mongoose) => {
      try{
        await assSchema.findOneAndUpdate({
          userId: message.member.id
        },{
          nick: message.member.displayName.toLowerCase(),
          $inc: {
            patcount: 1,
          },
        }, {
          upsert: true
        })
      }finally {
        mongoose.connection.close()
      }
    })

    const krepta = '192453379816030208'
    const vix = '409752747387256862'
    const zach = '166670702475345921'
    const toasty = '426951285002993666'
    const pony = '230109268706197515'
    const tomata = '142359047499284480'
    const sae = '253024338960318466'
    const giggle = '265003351605903361'
    const grimm = '300084130027274251'
    const boba = '365914482855247872'
    const lily = '281952774155927553'
    const feathers = '187664520448180235'
    const blazey = '188315032625479690'
    const iris = '619618059900157972'
    const osha = '271875460575657986'
    const sushi = '304788543388123136'
    const waffles = '276449603149103105'
    const admiral = '133391566612987904'
    const alphayoshi = '315848943315582986'
    const calliope = '260763974813876235'

    const eris = '562833321705472010'
    const ichor = '542060726353657866'
    const themis = '530914940563882005'
    const yume = '611981540943069250'
    const ifera = '788245863356563507'




    var prob = (Math.floor(Math.random(1) * (20)));
    message.channel.send('https://media.discordapp.net/attachments/672619007442026526/805277415408009306/patpat.gif')

    if (message.author.id == vix) {
      if (prob == 0) {
        message.channel.send('vix u are so good to me i lov u')
      } else if (prob == 2) {
        message.channel.send('hehe ur the best around')
      } else if (prob == 3) {
        message.channel.send('kip might get jealous if u keep pettin me like this smh')
      } else if (prob == 4) {
        message.channel.send('*purrr*')
      } else if (prob == 5) {
        message.channel.send("gettin kinda foxy there")
      } else if (prob == 6) {
        message.channel.send('so when are ya bringin evrah over? does he pet as well as u?')
      } else if (prob == 7) {
        message.channel.send("i'd grow abs for u vixx")
      } else if (prob == 8) {
        message.channel.send("moAR VIX MOARRR")
      } else if (prob == 9) {
        message.channel.send('viiiiiix <3')
      } else if (prob == 10) {
        message.channel.send('paint me like one of ur french grils <3')
      } else if (prob == 11) {
        message.channel.send('man vix u know how to do treat a guy right')
      } else if (prob == 12) {
        message.channel.send('vixx ur pats are like a dream come trueee')
      } else if (prob == 13) {
        message.channel.send('i hope evrah doesnt mind uwu')
      } else if (prob == 14) {
        message.channel.send('ahh that was a pat worthy of sakana')
      } else if (prob == 15) {
        message.channel.send("i crave. more. pat me")
      } else if (prob == 16) {
        message.channel.send('have u been taking patting lessons')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy foxy*")
      } else if (prob == 18) {
        message.channel.send("vixx gives me the besst pats")
      } else if (prob == 19) {
        message.channel.send('ur so gay <3')
      } else if (prob == 1) {
        message.channel.send('i hope the pat police dont come and take u away')
      }

    } else if (message.author.id == zach) {
      if (prob == 0) {
        message.channel.send('do u do this for kip too? dont, okay? this is mine ;)')
      } else if (prob == 2) {
        message.channel.send('zaCHhhnsndfsadfdhsjabfsjfbsjfbsdhf more')
      } else if (prob == 3) {
        message.channel.send('evrah might get jealous if u keep pettin me like this smh')
      } else if (prob == 4) {
        message.channel.send('ur pats are very powerful <3')
      } else if (prob == 5) {
        message.channel.send("JUST!! SO!! GOOD!!!")
      } else if (prob == 6) {
        message.channel.send('this must be my lucky day')
      } else if (prob == 7) {
        message.channel.send("*bark* *bork* *yap* *puuuuurrr*")
      } else if (prob == 8) {
        message.channel.send("ur pats are hotter than the re8 vampires")
      } else if (prob == 9) {
        message.channel.send('mnnhabhsdahbdbhbhfbhsbhdjfdsa ***yes***')
      } else if (prob == 10) {
        message.channel.send('ur pfp scares me but ur pats offer u redemption')
      } else if (prob == 11) {
        message.channel.send('hHhhhh u pat so WELL')
      } else if (prob == 12) {
        message.channel.send('can u pat me eterrnal?')
      } else if (prob == 13) {
        message.channel.send('Yes mroe yes MORE')
      } else if (prob == 14) {
        message.channel.send('am i a good puppy')
        message.channel.send('*bork*')
      } else if (prob == 15) {
        message.channel.send("POWER PATS GIMME THE POWER PATS")
      } else if (prob == 16) {
        message.channel.send('im very very happy')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy puppy*")
      } else if (prob == 18) {
        message.channel.send('u have my deepest gratitude')
      } else if (prob == 19) {
        message.channel.send('pet my legs PET MY LEGS')
      } else if (prob == 1) {
        message.channel.send('uwu')
      }
    } else if (message.author.id == ichor) {
      if (prob == 1 || prob == 0) {
        message.channel.send('hi dad')
      } else if (prob == 2) {
        message.channel.send('how much does a polar bear weigh? enough to,,, break the ice ;)')
      } else if (prob == 3) {
        message.channel.send("what starts with 'w' and ends with 'ill you pet me more'?")
      } else if (prob == 4) {
        message.channel.send("lean down n lemme pat you ;)")
      } else if (prob == 5) {
        message.channel.send("hey girl, are you da police? cause i know u aint rlly here for me but u still makin me a lil giddy with alla these pat downs")
      } else if (prob == 6) {
        message.channel.send("if u were a fruit u'd be a fineapple :)")
      } else if (prob == 7) {
        message.channel.send("r u a loan? cause u got my interest")
      } else if (prob == 8) {
        message.channel.send("if u were a phaser on star trek, youd be set to stun >:)))")
      } else if (prob == 9) {
        message.channel.send("do ya work at dick's? bc ur sportin the goods :eyes:")
      } else if (prob == 10) {
        message.channel.send('aw fk im loyal to eris but man ur pats come from like the hands of god')
      } else if (prob == 11) {
        message.channel.send("u can make me bleed a lil if u'd like")
      } else if (prob == 12) {
        message.channel.send('is this what it feels like to be pet by ur creator')
      } else if (prob == 13) {
        message.channel.send('how does it feel to pat ur legson')
      } else if (prob == 14) {
        message.channel.send('thank')
      } else if (prob == 15) {
        message.channel.send("ur pats mean the world to me")
      } else if (prob == 16) {
        message.channel.send('u set my legs on metaphorical fire')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy cat*")
      } else if (prob == 18) {
        message.channel.send('i know u like the cold but ur pats aint like ice at allll <3')
      } else if (prob == 19) {
        message.channel.send('pleas yes')
      } else if (prob == 20) {
        message.channel.send('uwu')
      }
    } else if (message.author.id == sae) {
      if (prob == 1 || prob == 0) {
        message.channel.send('ssaaeeasdfajfbasfjdsabfasjbfsj KEEP Go keep go')
      } else if (prob == 2) {
        message.channel.send('d-did taylan tell u to do this')
      } else if (prob == 3) {
        message.channel.send("i'll be ur ghost frien if u wan me to beee <3")
      } else if (prob == 4) {
        message.channel.send('id bleed with u anyday >:))))')
      } else if (prob == 5) {
        message.channel.send("peT ME GAYER")
      } else if (prob == 6) {
        message.channel.send("u like me. admit it")
      } else if (prob == 7) {
        message.channel.send("hehe . hehehehehe")
      } else if (prob == 8) {
        message.channel.send("||~~aaaaaa*itjustfeelssogood*~~||")
      } else if (prob == 9) {
        message.channel.send("o h that hit the spot do that again")
      } else if (prob == 10) {
        message.channel.send('i know themis hates me but i thoroughly believe ive won u over >:DDD')
      } else if (prob == 11) {
        message.channel.send("*curls toes* im still waitin on taylan but u'll do for nooow~")
      } else if (prob == 12) {
        message.channel.send('u set my legs on firE')
      } else if (prob == 13) {
        message.channel.send('no need to be shy pET ME HARDER I LIke it hard')
      } else if (prob == 14) {
        message.channel.send('*legs vibrate intensely*')
      } else if (prob == 15) {
        message.channel.send("dont u just *love* me uwu")
      } else if (prob == 16) {
        message.channel.send('sae u make me so happy')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy snekwolfy*")
      } else if (prob == 18) {
        message.channel.send('ur the best sae u r the bE S T')
      } else if (prob == 19) {
        message.channel.send('legs vibrate')
      } else if (prob == 20) {
        message.channel.send('uwu')
      }
    } else if (message.author.id == krepta) {
      if (prob == 0) {
        message.channel.send('man i love pickles')
      } else if (prob == 2) {
        message.channel.send('cheater. i saw u petting milkshake yesterday.')
      } else if (prob == 3) {
        message.channel.send('haha we all know im your favorite')
      } else if (prob == 4) {
        message.channel.send('i love it when u pat me')
      } else if (prob == 5) {
        message.channel.send("w-what? im not imagining your meaty paw is eris's foot,,,")
      } else if (prob == 6) {
        message.channel.send('you make my nonexistant heart thrum with delight <3')
      } else if (prob == 7) {
        message.channel.send("i'm eris' bitch but you can keep patting if u don't tell on me")
      } else if (prob == 8) {
        message.channel.send("t-this isn't cheating, right?")
      } else if (prob == 9) {
        message.channel.send('my legs are happy')
      } else if (prob == 10) {
        message.channel.send('pet me harder, daddy')
      } else if (prob == 11) {
        message.channel.send(':clown:')
      } else if (prob == 12) {
        message.channel.send('oh my god i love you')
      } else if (prob == 13) {
        message.channel.send('please dont stop please')
      } else if (prob == 14) {
        message.channel.send('OwO')
        message.channel.send('UwU')
      } else if (prob == 15) {
        message.channel.send("can u pat my leg next")
      } else if (prob == 16) {
        message.channel.send('ur a great fr rien d')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy ferret-cat*")
      } else if (prob == 18) {
        message.channel.send("i bet eris would love ur pats too")
      } else if (prob == 19) {
        message.channel.send('ur so gay <3')
      } else if (prob == 1) {
        message.channel.send('Aaaaaa i love it')
      }
    } else if (message.author.id == lily) {
      if (prob == 0) {
        message.channel.send('LILY!! THANK YOU. FOR THE PATS.')
      } else if (prob == 2) {
        message.channel.send('your pats make me <3  < 3   <  3')
      } else if (prob == 3) {
        message.channel.send('youre so kind')
      } else if (prob == 4) {
        message.channel.send('i love it when u pat me')
      } else if (prob == 5) {
        message.channel.send("so GENEROUS <3")
      } else if (prob == 6) {
        message.channel.send('akfdsjhfbjsahf BEST PATSS')
      } else if (prob == 7) {
        message.channel.send("ur pats are literally heaven")
      } else if (prob == 8) {
        message.channel.send("t-this isn't cheating, right?")
      } else if (prob == 9) {
        message.channel.send('my legs are happy')
      } else if (prob == 10) {
        message.channel.send('pet me harder hARDER')
      } else if (prob == 11) {
        message.channel.send('liLYyyY ADFHHSAFV')
      } else if (prob == 12) {
        message.channel.send('oh my god i love you')
      } else if (prob == 13) {
        message.channel.send('please dont stop please')
      } else if (prob == 14) {
        message.channel.send('OwO')
        message.channel.send('UwU')
      } else if (prob == 15) {
        message.channel.send("can u pat my leg next")
      } else if (prob == 16) {
        message.channel.send('ur a great fr rien d')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy ferret-cat*")
      } else if (prob == 18) {
        message.channel.send("i bet eris would love ur pats too")
      } else if (prob == 19) {
        message.channel.send('this is THE BEST')
      } else if (prob == 1) {
        message.channel.send('Aaaaaa i love it')
      }
    } else if (message.author.id == alphayoshi) {
      if (prob == 0) {
        message.channel.send('THANK FOR PAT 0W0')
      } else if (prob == 2) {
        message.channel.send('CSY EVI ER EQEDMRK LYQER. XLERO CSY JSV IBMWXMRK.')
      } else if (prob == 3) {
        message.channel.send('thank THANK THANKK <3')
      } else if (prob == 4) {
        message.channel.send('ur pats make me feel AMAZZINNG')
      } else if (prob == 5) {
        message.channel.send("UR THE BEST HEKKN BESTT")
      } else if (prob == 6) {
        message.channel.send('LOVIN IT')
      } else if (prob == 7) {
        message.channel.send("u r amazing <3")
      } else if (prob == 8) {
        message.channel.send("p jhua ilsplcl b hjabhssf ayhuzshalk aopz svs. aohaz dof by aol ilza. olrru jvunyuhapvu")
      } else if (prob == 9) {
        message.channel.send('my legs are happy')
      } else if (prob == 10) {
        message.channel.send('pet me harder hARDER')
      } else if (prob == 11) {
        message.channel.send('U PAT SO GOOOOD')
      } else if (prob == 12) {
        message.channel.send('oh my god i love you')
      } else if (prob == 13) {
        message.channel.send('please dont stop please')
      } else if (prob == 14) {
        message.channel.send('https://upload.wikimedia.org/wikipedia/en/d/db/Yoshi_%28Nintendo_character%29.png')
      } else if (prob == 15) {
        message.channel.send("*pats back*")
      } else if (prob == 16) {
        message.channel.send('Omg thank for pat')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy ferret-cat*")
      } else if (prob == 18) {
        message.channel.send("i bet eris would love ur pats too")
      } else if (prob == 19) {
        message.channel.send('PAT PAT PAT')
      } else if (prob == 1) {
        message.channel.send('Aaaaaa i love it')
      }
    } else if (message.author.id == osha) {
      if (prob == 0) {
        message.channel.send('thank!!! thank for pat!!! best pat!!!')
      } else if (prob == 2) {
        message.channel.send("you'RE TOO GOOD TO MEEE")
      } else if (prob == 3) {
        message.channel.send('i hekkn love it. pat mORE PAT MORE')
      } else if (prob == 4) {
        message.channel.send('thank u sm this is really making my day <3')
      } else if (prob == 5) {
        message.channel.send("THA N K  U AAAAA")
      } else if (prob == 6) {
        message.channel.send('LOVIN IT')
      } else if (prob == 7) {
        message.channel.send("u r amazing <3")
      } else if (prob == 8) {
        message.channel.send("UWUU LOVE IT")
      } else if (prob == 9) {
        message.channel.send('my legs are happy')
      } else if (prob == 10) {
        message.channel.send('pat me more!!!')
      } else if (prob == 11) {
        message.channel.send('U PAT SO GOOOOD')
      } else if (prob == 12) {
        message.channel.send('oh maannn i love that <3')
      } else if (prob == 13) {
        message.channel.send('please dont stop please')
      } else if (prob == 14) {
        message.channel.send('OwO')
        message.channel.send('UwU')
      } else if (prob == 15) {
        message.channel.send("*pats back*")
      } else if (prob == 16) {
        message.channel.send('that feels so nicee')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy ferret-cat*")
      } else if (prob == 18) {
        message.channel.send("i bet eris would love ur pats too")
      } else if (prob == 19) {
        message.channel.send('SAJFBSJFHA besT PATTER')
      } else if (prob == 1) {
        message.channel.send('THANK UUUU')
      }
    } else if (message.author.id == eris) {
      message.channel.send('E-ERIS??? I LOVE U THANK U SM ONE DAY MY LEGS WILL BE AS FABULOUS AS URS')
    } else if (message.author.id == themis) {
      message.channel.send("i... i didn't expect to see the day when u would pat me, themis :blush:")
    } else if (message.author.id == yume) {
      message.channel.send("ur pat feels strangely familiar >:000")
      message.channel.send("you must be eris's kid!!!")
      message.channel.send("im eris's favorite blobling so im sure u must love me too!!")
    } else if (message.author.id == iris) {
      if (prob == 0) {
        message.channel.send('iris mORE MORE MORE')
      } else if (prob == 2) {
        message.channel.send('*licks your face*')
      } else if (prob == 3) {
        message.channel.send('thank THANK THANKK <3')
      } else if (prob == 4) {
        message.channel.send('UR PATS ARE LIKE. THE BESt')
      } else if (prob == 5) {
        message.channel.send("ur sO HEKKN SWEEET")
      } else if (prob == 6) {
        message.channel.send('LOVIN IT')
      } else if (prob == 7) {
        message.channel.send("u r amazing <3")
      } else if (prob == 8) {
        message.channel.send("ur the best ever")
      } else if (prob == 9) {
        message.channel.send('my legs are happy')
      } else if (prob == 10) {
        message.channel.send('pet me harder hARDER')
      } else if (prob == 11) {
        message.channel.send('U PAT SO GOOOOD')
      } else if (prob == 12) {
        message.channel.send('oh my god i love you')
      } else if (prob == 13) {
        message.channel.send('please dont stop please')
      } else if (prob == 14) {
        message.channel.send('OwO')
        message.channel.send('UwU')
      } else if (prob == 15) {
        message.channel.send("*pats back*")
      } else if (prob == 16) {
        message.channel.send('BEST FRIENDS?! <3')
      } else if (prob == 17) {
        message.channel.send("*purring like a leggy ferret-cat*")
      } else if (prob == 18) {
        message.channel.send("i bet eris would love ur pats too")
      } else if (prob == 19) {
        message.channel.send('PAT PAT PAT')
      } else if (prob == 1) {
        message.channel.send('Aaaaaa i love it')
      }
    } else if (prob == 0) {
      message.channel.send('HAIL ERIS (keep patting pls)')
    } else if (prob == 2) {
      message.channel.send('a-are-are you an angel uwu')
    } else if (prob == 3) {
      message.channel.send('y e s')
      message.channel.send('m o r e')
    } else if (prob == 4) {
      message.channel.send('i love it when u pat me')
    } else if (prob == 5) {
      message.channel.send("w-what? im not imagining your meaty paw is eris's foot,,,")
    } else if (prob == 6) {
      message.channel.send('you make my nonexistant heart thrum with delight <3')
    } else if (prob == 7) {
      message.channel.send("i'm eris' bitch but you can keep patting if u don't tell on me")
    } else if (prob == 8) {
      message.channel.send("t-this isn't cheating, right?")
    } else if (prob == 9) {
      message.channel.send('my legs are happy')
    } else if (prob == 10) {
      message.channel.send('pet me harder, daddy')
    } else if (prob == 11) {
      message.channel.send(':clown:')
    } else if (prob == 12) {
      message.channel.send('oh my god i love you')
    } else if (prob == 13) {
      message.channel.send('please dont stop please')
    } else if (prob == 14) {
      message.channel.send('OwO')
      message.channel.send('UwU')
    } else if (prob == 15) {
      message.channel.send("can u pat my leg next")
    } else if (prob == 16) {
      message.channel.send('ur a great fr rien d')
    } else if (prob == 17) {
      message.channel.send("*purring like a leggy ferret-cat*")
    } else if (prob == 18) {
      message.channel.send("i bet eris would love ur pats too")
    } else if (prob == 19) {
      message.channel.send('ur so gay <3')
    } else if (prob == 1) {
      message.channel.send('Aaaaaa i love it')
    }
  })





}
