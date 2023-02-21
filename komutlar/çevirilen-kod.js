const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Toplamda çevirilen kod sayısı: ${çevrilenkod}`)
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["çk"], permLevel: 0
}

exports.help = {
    name: "çevirilenkods",
    description: "Zivo",
    usage: "Zivo Code"
}
