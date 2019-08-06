//
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

client.login('NjA4MjM4Njk0MjgwNzI0NDkw.XUlSOw.8Rd943PBEKWeIZCOdWswLxpOzYQ');

client.on('message', (message) => {
  if (message.author === client.user) return;
  if (message.content.startsWith(`${prefix}help`)) {
    message.channel.sendMessage('Привет я БОТ!');
  }
});
