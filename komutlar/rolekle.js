const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Kullanımı:! Addrole <kullanıcı> <rol>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Bir Rol Seçin");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Bu Rol Bulunamadı.");

  if (rMember.roles.has(gRole.id)) return message.reply("Onlar zaten bu role sahipler.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Tebrikler Size Rol Verildi. ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Tebrikler <@${rMember.id}>, Başarıyla Rol Verildi. ${gRole.name}. DM Kilitli!!`)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rolekle',
  description: 'Rol Ekler',
  usage: 'rolekle'
};
