const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Catgirl is outputting a status!");
  bot.user.setActivity("Doki Doki Literature Club", { type: "PLAYING" });
});

bot.login(process.env.DISCORD_TOKEN);
