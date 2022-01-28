const { MessageEmbed } = require('discord.js');
module.exports = {
    name : 'help',
    description : "Commande d'aide",
    execute(message,args){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){  
                
            const Embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Les commandes :')
            .setDescription("!lic help : vous envoie ce message d'aide.\n!lic ping : vous répond par 'pong'.\n!lic sondage <Votre sondage> : crée un sondage de ce que vous voulez avec deux réactions '👍' et '👎'.\n!lic jeux : propose une liste de jeux à jouer parmi une liste.\n❤")
            .setTimestamp()

        message.channel.send({ embeds: [Embed] })

        }else{

            message.channel.send("Vous n'avez pas le droit d'utiliser cette commande.")

        }
    }   
}