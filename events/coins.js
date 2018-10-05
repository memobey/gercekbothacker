const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}

let coinAmt = Math.floor(Math.random() * 15) + 1;
let baseAmt = Math.floor(Math.random() * 15) + 1;
console.log(`${coinAmt} ; ${baseAmt}`);

if(coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)
});
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0000FF")
.addField("💸", `${coinAmt} coins added!`);

message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
