const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Alooo komutları yüklüyorum 'Yükledim!'`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } Keyfim ve kahyası giriş yapmak isterse yaparım. 'Yaptım!'`
  );
  client.user.setStatus("idle");
  var oyun = [
       "AnanlaOynuyom" ,        "AnanLaOynuyom "
       
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};

