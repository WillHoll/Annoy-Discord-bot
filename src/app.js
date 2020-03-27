// Initial Setup
const Discord = require("discord.js");
const config = require("../config.json");
const {CLIENT_SECRET} = process.env;
const client = new Discord.Client();

// message commands
client.on("message", message => {
  //exit and stop if prefix is not present || stops botception
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  // identify target user within guild
  if (message.content.startsWith(config.prefix + "BakeThePie")) {

  }
})


client.login(CLIENT_SECRET);