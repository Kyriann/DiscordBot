// on charge les variables sécurisé
require('dotenv').config();

// on charge les variables
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({presence: {status: 'online',afk: false,activities: [{name: "!lic help",type: "WATCHING"}],} ,intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});
const prefix = process.env.DISCORD_PREFIX;
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();

// on fait en sorte que juste les fichiers .js soient pris en compte
for(const file of commandFiles){

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

}

// a l'arrivé d'une nouvelle personne on lui accorde le rôle les noobs et on lui dit bonjour
client.on('guildMemberAdd', guildMember => {

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Les noobs');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('936270551364800632').send(`Bienvenue <@${guildMember.user.id}> dans le gang des Licornes chacal !.`)

});

// le handler des différentes commandes
client.on('messageCreate', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping'){

        client.commands.get('ping').execute(message, args);

    }else if (command === 'sondage'){

        client.commands.get('sondage').execute(message, args, MessageEmbed);

    }else if (command === 'jeux'){

        client.commands.get('jeux').execute(message, MessageEmbed);

    }else if (command === 'help'){

        client.commands.get('help').execute(message, MessageEmbed);

    }else if (command === 'random'){

        client.commands.get('random').execute(message, args, MessageEmbed);

    }else if (command === 'clear'){

        client.commands.get('clear').execute(message, args);

    }
    
})

// et on login
client.login(process.env.DISCORD_TOKEN);
