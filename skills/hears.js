module.exports = function(controller) {
  controller.hears("!pat", ["ambient", "mention"], (bot, message) => {
    let response;
    let sender = message.user;

    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    let responses = [
      `${recipient} got two head pats from ${sender} 🎉`,
      `${sender} thinks ${recipient} is pawesome! ✨`,
      `Nya! ${recipient}! ${sender} appreciates you! 😍`,
      `Nya! ${recipient}! ${sender} thinks you rule! 💪`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });

  //////////////////////////////////////////////////////////////////////
  ////SMASH!////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  controller.hears("!smash", ["ambient", "mention"], (bot, message) => {
    let response;
    let sender = message.user;

    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    let responses = [
      `Nya! ${sender}! *purrs and blushes* 😍`,
      `Nya! ${sender}! I'm in heat!`,
      `Nya! ${sender}! Pull my tail!`,
      `Nya! ${sender}! I know you're not just happy to see me!`,
      `Nya! ${sender}! uwu, what's dis? *notices bulge*`,
      `Nya! ${sender}! Rawr xD`,
      `Nya! ${sender}! *pounces on you*`,
      `Nya! ${sender}! Senpai, you've finally noticed me!`,
      `Nya! ${sender}! Play with me!`,
      `Nya! ${sender}! Your milk is so creamy Senpai!`,
      `Nya! ${sender}! Give me your milk Senpai!`,
      `Nya! ${sender}! *blushes* What do you want me to do Senpai? :point_right::point_left::pleading_face:`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });

  /////////////////////////////////////////////////////////////////////////////
  //NEKO-<3
  ////////////////////////////////////////////////////////////////////////////
  controller.hears("!neko", ["ambient", "mention"], (bot, message) => {
    let response;
    let sender = message.user;

    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    let responses = [
      `Moshi moshi ${sender}, what's cooking good looking?`,
      `I better tell Raku-chan that she's a really cool neko and that she's pretty downright sugoi`,
      `*hiss* Get away from that neko you no-good inus *hiss*`,
      `Let's have a kawaii sleep-over-chan ~nya ya~`,
      `There's freedom in this country. This is Ameri-Japan`,
      `Nya! Rawr xD`,
      `I'm very arigatou-ful`,
      `Good morning ${sender}..... OH MY KAMI YOU'RE A NEKO AGAIN ~NYA!~`,
      `I really hope it’s not the rabies, ~nya~`,
      `Awwww, it’s so pretty and pink! Ooooh! Nya!`,
      `Nya~ Don’t you just love mochi ice cream, ${sender}?`,
      `Oh, ${sender}, your white underwear is very kawaii too.`,
      `Don’t give up now, ${sender}-chan, not after we’ve come this far. We gotta keep on truckin’.`,
      `Somebody help me!`,
      `For some reason I feel really strange right now. Nya~`,
      `Oh! I should go say hi, nya.`,
      `Nya! Nya! Nya! Nya! What should I say, nya! Nya desu! Nya!~`,
      `Like I said, we’re just gonna have some “fun”.`,
      `*inaudible*`,
      `I can’t wait to try on this kawaii underwear, nya desu! It’s so kawaii~`,
      `Hello, nya~`,
      `Right-o, ${sender}-chan. That sounds like a swell deed on your part. You are so righteous.`,
      `${sender}-chan! I have never been this glad to see you`,
      `Huh. Wait, what?`,
      `How you doing? Kawaii neko girls.`,
      `I’m gonna go make some green tea, okay, ${sender}-chan?`,
      `Oh, it’s Hitoshi-san, he’s so sugoi desu~`,
      `What are you gonna do with me? Get away!`,
      `${sender}…`,
      `H-hitoshi-san? Oh. It’s ${sender}-chan, nya.`,
      `*slapping*`,
      `*screams of the damned*`,
      `What seems to be the problem?`,
      `I’m not even supposed to be here. You have no right to hold me captive. There’s freedom in this country. This is Americ-Japan.`,
      `Who wants mochi ice cream and green tea?`,
      `Sayounara, kawaii neko girls. Nya… rawr~`,
      `What’s cookin’, good lookin’.`,
      `Aw, so kawaii, squeaker squirrel-chan. You so desu and sugoi. Aw, so soft, nya~`,
      `Oh... I just wish I could really say that I’m okay. Nya~ Desu~`,
      `*ear-shattering laughter*`,
      `My name is Catgirl, nya.`,
      `Well, hey there, neko girls. I was about to go to your house, Raku-chan, to see if you were doing A-OK. Nya… Rawr~`,
      `WHAT DO YOU WANT WITH ME?!`,
      `Nya~ Kawaii inu-kun and neko-chan. Nya~ So desu and kawaii.`,
      `Over there, ${sender}-chan! That’s the van that took Hitoshi-san.`,
      `I don’t know, ${sender}-chan. What ARE we gonna do with her?`,
      `Calm down, hon. I’m just gonna take you to my secret lair, and we’re gonna have some fun.`,
      `Oh, I love Dancing Sushi!`,
      `*coughing*`,
      `Aah, I’m really full now. C’mon, let’s go home, okay? Nya~`,
      `I have stripped you of your freedom. Now get down on your knees.`,
      `Nandesuka!`,
      `Thank you very, very much!`,
      `*quiet screaming*`,
      `You guys are so funny, nya!`,
      `Koneko-chan, look at that guy over there, nya!`,
      `Oh, ${sender}-chan, Hitoshi-san, you do so much for me. I don’t even know if I deserve everything. Thank you so much. Arigatou~ Nya~`,
      `N-no way, I don’t think so, I can’t think of anything that might have caused rabies, nya.`,
      `You’re coming with me…`,
      `${sender}-chan. Release your inner beast. You will find your true self. You will learn the values of life, and put them to good use.`,
      `Nya, it’s very sunny outside today.`,
      `Oh I’m fine, don’t worry about me one bit.`,
      `I’m too much of a burden for ${sender}-chan and Hitoshi-san, nya.`,
      `Ohohoho~ I see.`,
      `You’re going to be just fine and dandy, ${sender}-chan. Just fine and dandy.`,
      `Oh, I'm really thirsty, nya`,
      `Nya~ Walking to the store. Mhmm hmm lalala~`,
      `I have one last spell that should contain the demon for at least a day. There are no guarantees after that.`,
      `The neko demon....... Is still inside......`,
      `*90s anime laugh*`,
      `I feel really weak nya.`,
      `*chewing*`,
      `Well, I just happened to be walking by, and I saw you two lovely ladies walking.`,
      `Ｍｍｍ. Ｍｏｃｈｉ ｉｃｅ ｃｒｅａｍ. Ｉ ｗａｎｔ ｍｅ ｓｏｍｅ ｏｆ ｔｈａｔ.`,
      `That was some comedy gold there, huh? Eh?`,
      `*I Want You Back by N’SYNC continues*`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
};
