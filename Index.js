
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Ready!');
});

client.login('token');
client.on('message', message => {
    console.log(message.content);
});
client.on('message', async (message) => {
    if(message.content === '-suggest') {
 const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('***Suggestion by ${message.author.username}***')
        .setDescription('    ${message.author.avatar}')
const channel = message.guild.channels.cache.get('id');
channel.send(exampleEmbed);
await message.react("✅")
await message.react("❎")
    }
});
