const Discord = require('discord.js');

const cevaplar = [
    "**12 CM** Eh İdare İder",
    "*85 CM** OHA NASIL LAN SEN İNSAN MISIN WTF??",
    "**5 CM** Üzülme Elbet Bir Gün Büyüyecek.",
    "**1 CM** Evlat Olsa Sevilmez.",
    "**16 CM** Oha Bence Sen Büyük Birisisin.",
    "**31 CM** Oha Sen Star Mısın Be Kardeşim."
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: .kaçcm Ve Bişey Yaz Rastgele :)')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Seninki Kaç Cm Olduğunu Öğrenmek İstiyorsan Dene Bakalım :)',
  usage: 'kaçcm'
};
