const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODU4NzA0NzQwNTEwODU5Mjg0.YNiBHA.m_6ieZIYeQTX7amX-XsMqJMPgxE';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);