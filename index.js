require('dotenv').config();

const Discord = require('discord.js');
const fs = require("fs");

const client = new Discord.Client({presence: {status: 'online',afk: false,activities: [{name: "!lic help",type: "WATCHING"}],} ,intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
const prefix = process.env.DISCORD_PREFIX;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Les noobs');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('936270551364800632').send(`Bienvenue <@${guildMember.user.id}> dans le gang des Licornes chacal !.`)
});

client.on('messageCreate', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if (command === 'sondage'){
        client.commands.get('sondage').execute(message, args);
    }else if (command === 'jeux'){
        client.commands.get('jeux').execute(message, args);
    }
    
})

client.login(process.env.DISCORD_TOKEN);
