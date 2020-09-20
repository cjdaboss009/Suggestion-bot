const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args, level) => {
    let x = args.slice(1).join(" ")
const exampleEmbed = new Discord.MessageEmbed()
    .setTitle(`***Suggestion by ${message.author.username}***`)
    .setDescription(`${x}`)
    .setImage(`${message.author.displayAvatarURL()}`)
const channel = message.guild.channels.cache.get('id');
const OwO = await channel.send(exampleEmbed)
await OwO.react("✅")
await OwO.react("❎")
}
module.exports.help = {
    name: "suggest",
    aliases: [],
    category: "Misc"
  }
