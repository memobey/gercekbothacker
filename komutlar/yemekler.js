  const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
  message.delete();

      if (message.channel.type !== 'group') {
        const yemekler = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription("**Yemeklerimiz**")
        .setFooter('Oyna Ve Eğlen | fb.com/turkoglu1655', bot.user.avatarURL, true)
        .addField('.kurabiye', "**Tatlı**", true)
        .addField('.pasta', "**Tatlı**", true)
        .addField('.hamburger', "**Yemek**", true)
        .addField('.donut', "**Tatlı**", true)
        .addField('.pizza', "**Yemek**", true)
        .addField(".patlıcan", "**Yemek**", true)
        .addField('.et', "**Yemek**", true)
        .addField('.suşi', "**Japon Yemeği**", true)
      console.log("t!yemekler komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
      return message.channel.send(yemekler);
      }
  };

exports.help = {
  name: 'yemekler',
  description: 'sunucu bilgilerini gösterir.',
  usage: 'yemekler'
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
