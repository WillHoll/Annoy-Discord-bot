module.exports = (client, message) => {
  //Ignore bots
  if (message.author.bot) return;

  // this is just to annoy pie
  if (message.author.username === 'Kream_Pie') {
    console.log(message.author)
    message.channel.send(`${message.author.username} is a bot. Don't trust him.`);
  }

  // Ignore message not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);
  
  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
}
