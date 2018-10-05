const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription(`**${mesaj}**`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 4
};

exports.help = {
  name: 'yazdır',
  description: 'İstediğiniz şeyi bota yazdırır.Kuruculara Özel',
  usage: 'yazdır [yazdırmak istediğiniz şey]'
};
