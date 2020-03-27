// Initial Setup
const Discord = require("discord.js");
const client = new Discord.Client();
const {CLIENT_SECRET} = process.env;

// sets up a message prefix
const prefix = "!";

// message commands
client.on("message", (message) => {
  //exit and stop if prefix is not present || stops botception
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // identify target user within guild
  if (message.content.startsWith(prefix + "BakeThePie")) {

  }
})


client.login(CLIENT_SECRET);