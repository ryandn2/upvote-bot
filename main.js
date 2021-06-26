// UPVOTE BOT
const Discord = require("discord.js");
const client = new Discord.Client();
const keepAlive = require("./server");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content.startsWith("https://")) {
    msg.react("👍");
    msg.react("👎");
  }
});

keepAlive();

const mySecret = process.env['TOKEN'];
client.login(process.env.TOKEN);
