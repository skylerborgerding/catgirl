const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Catgirl is outputting a status!");
  bot.user.setActivity("for cuties! 😍", { type: "WATCHING" });
});

bot.login(process.env.DISCORD_TOKEN);
