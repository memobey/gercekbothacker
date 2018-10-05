const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Bu Kullanıcıyı Bulamadınız..");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir Rol Belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu Rol Bulunamadı.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Zaten Kullanıcının Böyle Bir Rolü Yok");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`HEY, Rolünü Kaybettin ${gRole.name} `)
  }catch(e){
    message.channel.send(`Maalesef <@${rMember.id}>, Rolü Kaldırdık ${gRole.name} DM Kilitlendi.`)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rolsil',
  description: 'Siler',
  usage: 'rolsil'
};
