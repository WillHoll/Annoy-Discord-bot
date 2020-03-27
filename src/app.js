// Initial Setup
const Discord = require("discord.js");
const config = require("../config.json");
const {CLIENT_SECRET} = process.env;
const client = new Discord.Client();

// message commands
client.on("message", message => {
  // stops botception
  if (message.author.bot) return;

  if (message.content.startsWith(config.prefix + "test")) {
    message.guild.roles.fetch().then(res => console.log(res))
    const staffRole = message.guild.roles.find(role => role.name === "Staff Members");

    if (!staffRole) 
    return console.log("error finding role");

    if (!message.member.roles.has(staffRole.id)) 
    return message.reply("Staff only");

    return config.pieBaker.pieToggle = !config.pieBaker.pieToggle
  }

  if (message.author.username === 'Aye_Pie') {
    console.log('hit')
    return message.channel.send(`${message.author.username} is a bot. He'll steal your credit cards or some shit`);
  }
  
})


client.login(config.token);