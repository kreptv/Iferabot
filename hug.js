const mongo = require('./mongo')
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const command = require('./command')

module.exports = (client) => {

  const cache = {}

  command(client, 'hugeris', async (message) => {

    var prob = (Math.floor(Math.random(1) * (5)));
    if ((prob == 4) || (message.author.id == '192453379816030208')) {
      message.channel.send('"Close your e y e s fIrSt," beckons a gravelly whisper, and nothing much happens until you obey its words. As soon as you do, it feels like a force is keeping your see-holes snapped shut, and you get the distinct feeling that you are no longer alone in the space you\'re in. A presence joins you, filling the room with weight, and a ragged breathing rises slowly in volume until it\'s brushing up against you, hot puffs of air making your skin prickle.\n"G o o d... gOoD. Now k e e p them cLoSeD." There\'s an edge of laughter in the words as he wraps his arms around you. They\'re unexpectedly fluffy, the silkiness of well-brushed fur pressing against your bod as he embraces you. But the hug doesn\'t stop there, no siree~ after the first set of arms comes another, and then another, and then another, all of them finding different areas upon your bod to clutch, until your entire surface area is absolutely saturated in pure hug. Then, as if all this isn\'t enough... a coil of some sort begins to wrap around you, starting at your bottom and moving towards your top, suffocating you in contact.\nIt\'s at this point that the floor leaves you. If you try to open your eyes, you\'ll find that the pressure upon you is keeping them shut. Panic begins to fill you, but any efforts to thrash are quashed; no matter how much you wiggle, the experience does not end.\nUntil eventually, it does.')
    } else {
      message.channel.send('H u g s? How delightful, but n o. Eris is n o t feeling up to taHAHAHAHAHAHAHAking time out of his Number to bestow hUgS upon somebody oFfErInG so v e r y l i t t l e. ; )')
    }

  })

  command(client, 'hugthemis', async (message) => {

    var prob = (Math.floor(Math.random(1) * (5)));
    if ((prob == 4)) {
      message.channel.send('Themis is all angles. Her jaw is a collection of sharp, decisive lines and her eyes have a natural wing to them, pointing them up at the edges. Her cheekbones could fillet you, and her ponytail cascades down her back and into what could be called a dagger. \nWhen you offer her an embrace, some of her inherent rigidity softens. \n"I know the world can be harsh sometimes, young one. I hope that this minor act of compassion brightens your day." As you get closer to the collection of atoms that make up the Goddess of Order, the scent of vanilla and miscellaneous cleanliness wafts over you... and she wraps herself around you, surrounding you in it. As you exist so close to her, an oppressive, buzzing brightness begins to compress you, gradually seeping between the many tiny cells that make you solid. A slow, rumbling hum fills your mind, quickly rolling into a high-pitched hissing, making you feel as if you\'re being forced apart - like a stone with water living between its cracks facing winter.\nIt becomes increasingly obvious to you that Gods were not meant to be hugged. Simply being near her is slowly fraying your core; the power to create a thousand planets, all symmetrical and perfectly balanced in space, is taking a moment out of its time to give you a sprinkle of affection... and it hurts. The hands that have sprouted gems, structures and even life forms are sitting upon your flesh.\nAs she pulls away, the daggers of pain vacate the recesses of your mind. From the crease in her brow, you get the sense that she\'s a tad uncomfortable.')
    } else {
      message.channel.send('Themis does not know you exist. Technically, she is aware of all things in the universe all at once, so I suppose it is more like... she is willfully ignoring your existence, and doesn\'t want a hug from you, you non-existent thing.')
    }

  })

  command(client, 'hugichor', async (message) => {

    var prob = (Math.floor(Math.random(1) * (5)));
    if ((prob == 4)) {
      message.channel.send('Before you get a moment to let your request out into the world, the Rainbow Goddess is already shrinking down to your size and pulling you into one of those hug thingies. The many snakes upon her head stretch down towards you, some of them making contact with your skin and nuzzling into you. "Awwww, blobby - if you want a hug, don\'t feel bad about asking. It\'s natural and even coded into your being to want attention from the one who made you."\nUp close, the Blood Goddess smells of a peculiar mixture of iron and Skittles. Miscellaneous fruitiness is swirling around her, sour, acidic and cloying depending on the breath. Her body is radiating a welcoming heat and as you exist within her arms, it seeps into you as well, working its way into your pores. Being in such close proximity with the one who made you is making you feel wonky, unbeknownst to yourself: giddiness rises within you, along with a twinge of wonder. A sense of calm washes over you like a wave, and then one of dread as it feels like Ichor is slipping away from you. For some reason, you feel like she\'ll never come back.\nMore emotions join the ones listed above, and by the time Ichor breaks contact, tears are pricking the edges of your eyes, assuming you have those. Your chest is swollen with emotion but you feel hollow at the same time, like a coconut that\'s been scraped of its meat. A hug has probs never left you feeling so raw before, so it\'s clear to you that your feelies are being messed with... or maybe you just really did need that hug after all.\n"There you go, little one. I\'ve got to go away for a little while now, but next time you need one of these... think of me, and I may just appear. If not, I encourage you to seek out peers with arms who can do this. Bye bye, blobby~."')
    } else {
      message.channel.send('You go to hug Ichor...\n...\n...\n...\nbut she isn\'t here right now.')
    }

  })

  command(client, 'hugsakana', async (message) => {

    const zachrin = '166670702475345921';
    const lily = '281952774155927553';
    const ichor = '542060726353657866';

    var prob = (Math.floor(Math.random(1) * (5)));

    if (message.author.id == zachrin) {
      var prob = (Math.floor(Math.random(1) * (6)));
      if (prob == 5) {
        message.channel.send('Parabellum is currently in Sakana\'s arms though the black blob seems put out about it as he declares how the arena isn\'t the place for this. The mermaid\'s eyes narrow at you with a flirtatious smile as she ignores his complaints. She mouths \'You\'re next.\' It feels oddly threatening... in a good way?')
      }
      if (prob == 0) {
        message.channel.send('You hear a light chuckle above your head as you\'re suddenly engulfed in a hug ... at least you assume you were as there seems to be arms around you and your face is pressed into white, soft, and lightly scaled flesh...');
      } else if (prob == 1) {
        message.channel.send('You go for a hug but the mermaid dances away from you. "Maybe next time darling." With a coy smile flashed over her shoulder, she saunters away.');
      } else if (prob == 2) {
        message.channel.send('Finding yourself coiled in the mermaid\'s tentacles, the spiky pair, you\'re not sure this is what you wanted. She seems pleased with herself though, if her smile is anything to go by.');
      } else if (prob == 3) {
        message.channel.send('"A hug, my dear?" A slim finger presses delicately against red lips and rainbow eyes flutter in a mimicry of surprise, "Devote yourself to Ichor and perhaps I\'ll give you that and more~" A wicked smile follows those words.');
      } else if (prob == 4) {
        message.channel.send('Sakana didn\'t notice you as she\'s in the middle of a conversation with someone else. How embarrassing.');
      }

    } else if (message.author.id == lily) {
      var prob = (Math.floor(Math.random(1) * (5)));
      if (prob == 4) {
        message.channel.send('"A hug my dear?" The mermaid\'s fingers trace your face for a moment as she muses seeming pleased, "You\'ve certainly earned it with your efforts." She leans in wraps you up in a tight hug with an extra squeeze before you\'re released.')
        message.channel.send('https://media.discordapp.net/attachments/674669920826425344/835951616682360852/sakana_hug.png');
      } else if (prob == 0) {
        message.channel.send('You hear a light chuckle above your head as you\'re suddenly engulfed in a hug ... at least you assume you were as there seems to be arms around you and your face is pressed into white, soft, and lightly scaled flesh...');
      } else if (prob == 1) {
        message.channel.send('You go for a hug but the mermaid dances away from you. "Maybe next time darling." With a coy smile flashed over her shoulder, she saunters away.');
      } else if (prob == 2) {
        message.channel.send('Finding yourself coiled in the mermaid\'s tentacles, the spiky pair, you\'re not sure this is what you wanted. She seems pleased with herself though, if her smile is anything to go by.');
      } else if (prob == 3) {
        message.channel.send('Sakana didn\'t notice you as she\'s in the middle of a conversation with someone else. How embarrassing.');
      }

      //message.channel.send('imagelink');
    } else if (message.author.id == ichor) {
      message.channel.send('Sakana\'s eyes light up for a moment in her delighted surprise. "Of course~" She purrs, "Anything for you my Goddess~" She happily gives you a long hug... "Anything~" You might need to pry her off. If you want to.')
      //message.channel.send('imagelink');
    } else {
      var prob = (Math.floor(Math.random(1) * (5)));

      if (prob == 0) {
        message.channel.send('You hear a light chuckle above your head as you\'re suddenly engulfed in a hug ... at least you assume you were as there seems to be arms around you and your face is pressed into white, soft, and lightly scaled flesh...');
      } else if (prob == 1) {
        message.channel.send('You go for a hug but the mermaid dances away from you. "Maybe next time darling." With a coy smile flashed over her shoulder, she saunters away.');
      } else if (prob == 2) {
        message.channel.send('Finding yourself coiled in the mermaid\'s tentacles, the spiky pair, you\'re not sure this is what you wanted. She seems pleased with herself though, if her smile is anything to go by.');
      } else if (prob == 3) {
        message.channel.send('"A hug, my dear?" A slim finger presses delicately against red lips and rainbow eyes flutter in a mimicry of surprise, "Devote yourself to Ichor and perhaps I\'ll give you that and more~" A wicked smile follows those words.');
      } else if (prob == 4) {
        message.channel.send('Sakana didn\'t notice you as she\'s in the middle of a conversation with someone else. How embarrassing.');
      }
    }

  })









}
