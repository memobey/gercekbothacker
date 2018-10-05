const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("<@449283187559104525>")
        .setImage("https://cdn.turkmedya.com.tr/aksam/imgsdisk/2018/05/17/170520181216024714392.jpg")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQem2WObSk7KbRHuVI-g-Xg3g4UJ7P2aHmToZwy3FsvprNIUe0P")
        .setColor(0x00AE86)
        .addField("Lakabı", "TurkOglu", true)
        .addField("Yetenekleri", `
        *HACKER*
        *HER TÜRLÜ VİDEOLARI EDİTLER.*`, true)
   .addField("Nasıl Birisidir", `İyi Birisidir.`, true)
   .addField("En Çok Sevdiği Şey", "Bota komut eklemek!!", true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'YAPIMCI HAKKINDA BİLGİ VERİR',
  usage: 'yapımcı'
};
