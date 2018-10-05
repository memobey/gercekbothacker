const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

var fortunes = [
  "evet",
  "hayır",
  "belki",
  "olabilir",
  "olmayabilir",
  "daha sonra tekrar sor"
];

exports.run = (client, message) => {
message.channel.send(`**Arkadaşlar, Bir YouTube kanala davet edildiniz.
<Bu kanalda Kendi oyunlarınızı ve kendi discord botunuzu kodlamayı öğreneceksiniz!... **YAKINDA**>
Ayrıca ufak tefek oyun videoları ve çekilişlerle eğlencenize eğlence katacağız :3**

Botumu sunucunuza ekleyin:

**BAKIMDA**

Gerçek Kanal Uzun link:
**https://www.youtube.com/MehmetWinners**

Yan Kanal Uzun link:
**https://www.youtube.com/channel/UCTGPW8VjlVlGTIHmAi8zhbg?view_as=subscriber**

Kanal Kısa Link:
**AŞAĞIDA**
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
Şimdiden tüm takipçilerime teşekkürler :3
@everyone `)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklam',
  description: 'Bota reklam yaptırır.',
  usage: 'reklam'
};
