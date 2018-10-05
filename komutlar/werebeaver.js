const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');


var lele = ayarlar.prefix;

exports.run = (client, message) => {


      const embedede = new Discord.RichEmbed()
          .setDescription(`**Werebeaver**`) 
          .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/3/31/Werebeaver.png/revision/latest?cb=20140317110406") 
          .setColor(0x00AE86) 
		  .addField('Yetenek',`
*Gece görüşü
*Hava etkilerine karşı bağışıklık
		  `,true)
          .addField('Can',`Sonsuz`, true)
          .addField('Açlık', `Sonsuz`, true)
          .addField('Akıl Sağlığı',"Sonsuz", true)
          .addField('Islaklık', "Sonsuz", true)
		  .addField('Kunduz Seviyesi', "100", true)
		  .addField('Hasar Değişimi', "+41 ve -0.2x", true)
		  .addField('Hız Değişimi', "1.1x", true)
		  .addField('Kunduz Yemeği ve Kunduzluk Artışı',"https://is.gd/eKkcun",true)

          
          message.channel.send(embedede);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'werebeaver',
  description: 'Woodie The Lumberjack hakkında bilgi verir.',
  usage: 'werebeaver'
};
