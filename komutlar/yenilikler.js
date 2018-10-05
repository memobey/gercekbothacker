const Discord = require('discord.js');

exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("Yenilik Her Zaman İyidir.")
        .setColor(0x00AE86)

        .addField(".mesajdöndür", "**Mesajınızı Ters Döndürür.**", true)

        .addField(".mesajküçült", `**Mesajınızı Küçültür.**`, true)
        message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilik her zaman iyidir',
  usage: 'yenilikler'
};
