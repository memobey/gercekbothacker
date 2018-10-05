const Discord = require("discord.js");
const fs = require("fs");
let config = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Yetkin Yetmiyor Dostum!")
        .setColor(config.red)
        .addField("Aklından Bile Geçirme Bence!", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("HATA 404 : NOT FOUND")
        .addField(`${user} Yetkin Yetmiyor`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("HATA")
        .setDescription("Kullanıcı Ve Sebep Seçmelisin")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Fatal Error")
        .setDescription("Bir Sebep Seçmelisin")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}
