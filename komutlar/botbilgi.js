const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarına bilgi mesajımı gönderdim! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", "<@449283187559104525>", )
    .addField("**❯ Sürüm**", " v0.1.0 ", )
    .addField("**❯ Yapım Tarihi**", " 10 Temmuz 2018 ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/api/oauth2/authorize?client_id=459335363048112128&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2F8DvYMKd&scope=bot)", )
    .addField("**❯ Destek sunucusu**", " [şu anda sunucumuz bulunmamaktadır.](https://www.google.com) ", )
	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.send(pingozel)
};

exports.help = {
  name: 'botbilgi',
  description: 'Bilgilerimi Görüntülüyorsun.',
  usage: 'botbilgi'
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
