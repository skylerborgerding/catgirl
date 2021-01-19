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
};
