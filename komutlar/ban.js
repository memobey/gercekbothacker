const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: !ban <Kullanıcı> <Sebep>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message);
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banlanan Kullanıcı", `${bUser} with ID ${bUser.id}`)
    .addField("Banlanan", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banlayan", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Sebep", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("-mod-log Adlı Kanalı Bulamıyorum");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Oyuncuyu Banlar',
  usage: '!ban <Kullanıcı> <Sebep>'
};
