// UPVOTE BOT

const Discord = require("discord.js")
require('dotenv').config();
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content.startsWith("https://")) {
    msg.react("👍");
    msg.react("👎");
  }
})

client.on("typingStart", function(channel, user){
})


client.login(process.env.TOKEN)
