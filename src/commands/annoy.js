exports.run = (client, message, args) => {
  //! message.guild.roles.fetch is throwing errors: DO NOT USE UNTIL FIXED
  message.guild.roles.fetch().then(res => console.log(res))
  const staffRole = message.guild.roles.find(role => role.name === "Staff Members");

  if (!staffRole)
    return console.log("error finding role");

  if (!message.member.roles.has(staffRole.id))
    return message.reply("Staff only");

    // TODO: make this immutable
  return config.pieBaker.pieToggle = !config.pieBaker.pieToggle

}