const Discord = require('discord.js');

exports.run = function(client, message, args) {

	var oneri = args.slice(0).join(' ');
	var guildID = "449283187559104525";
	var channelID = "487669441392279552";

	if (!oneri)  {
		return message.reply("*Lütfen Bir Mesaj Belirtiniz!* Kullanım: **<oneri <öneriniz> .**");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.setColor('RANDOM')
			.addField("Kullanıcı: " + message.author.tag, true)
			.addField("Kullanıcı ID: " + message.author.id, true)
			.addField("Öneri: " + oneri, true)
			.addField("Sunucu ID: " + message.guild.id)
			.addField("Sunucu KANAL ID: " + message.channel.id)
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.reply(":clap: **Teşekkürler! Bildirimiz Admine İletildi**");
	};
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["önerim", "öneri", "önerilerim", "önerim", "önerilerim"],
 permLevel: 0
};

exports.help = {
 name: 'oneri',
 description: 'Önerinizi Admine Bildirir! ',
 usage: 'oneri'
};
