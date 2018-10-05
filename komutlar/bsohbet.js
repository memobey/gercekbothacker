const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()

        .setDescription("Bot İle Sohbet Mesajları")

        .setColor(0x00AE86)

        .addField("sa", "Yaz Bakalım..", true)

        .addField("hg",  "Yaz Bakalım..", true)

        .addField("bb", "Yaz Bakalım..", true)

        .addField("selamun aleyküm", "Yaz Bakalım..", true)

        .setColor(0xff0000)

        return message.channel.sendEmbed(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bsohbet',
  description: 'Bot İle Sohbet Mesajlarını Görüntüler',
  usage: 'bsohbet'
};
