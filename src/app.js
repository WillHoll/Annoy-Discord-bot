// Initial Setup
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("../config.json");
client.config = config;

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./src/events/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    //Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipie to call events with all their proper arguments *after* the `client` var
    // without going into too many detailsl, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attepmting to load command ${commandName}`);
    // Store the whole thing in the command Enmap
    client.commands.set(commandName, props);
  });
});


client.login(config.token);