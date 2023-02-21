const Discord = require('discord.js')

exports.run = async(client, message, args) => {


if(!args[0]) {
    const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
    .addField('Komutlar:', 
    ` \`-bildir\` **Hatalı Bir Kod Bildir.**
      \`-v11tov12\` **v11 Bir Kodu v12 Bir Koda Dönüştürürsünüz.**
      \`-v12tov13\` **v12 Bir Kodu v13 Bir Koda Dönüştürürsünüz.**
      \`-çks\` **Toplamda Çevirilen Kod Sayısını Size Gösterir.**
      \`-yardım\` **Botun Yardım Menüsüne Erişirsiniz.**
    `)
    .setColor("RANDOM")
    .setFooter('Komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}

}


exports.conf = {
    aliases: ["help"]
}
exports.help = {
    name: "yardım"
}