const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../util/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Kullanımı: !report <SUÇLU> <SEBEP>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("RAPOR DAVASI")
    .setColor(orange)
    .addField("SUÇLU", `${rUser} SUÇLUNUN ID: ${rUser.id}`)
    .addField("DAVACI", `${message.author} DAVACININ ID: ${message.author.id}`)
    .addField("KANAL", message.channel)
    .addField("ZAMAN", message.createdAt)
    .addField("SEBEP", rreason);

    let reportschannel = message.guild.channels.find(`name`, "mod-log");
    if(!reportschannel) return message.channel.send("LÜTFEN BİR SUÇLU SEÇİNİZ.");
    reportschannel.send(reportEmbed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Şerefsiz Oyuncuları Bildirin!!',
  usage: 'report'
};
