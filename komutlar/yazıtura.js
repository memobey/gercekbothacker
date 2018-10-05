const Discord = require('discord.js');

const cevaplar = [
	"**TURA**",
	"**YAZI**"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "**YAZI**") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://ogreniyoruz.org/wp-content/uploads/2014/10/para.png")
		message.channel.send(embedyazı);

	} else if (cevap === "**TURA**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png")
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
