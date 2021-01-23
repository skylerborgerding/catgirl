const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Catgirl is outputting a status!");
  bot.user.setActivity("Digital Girl by Hatsune Miku 💙", { type: "LISTENING" });
});

bot.login(process.env.DISCORD_TOKEN);
