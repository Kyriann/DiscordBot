const { MessageEmbed } = require('discord.js');
    module.exports = {
        name : 'sondage',
        description : 'Commande pour crée un sondage',
        execute(message,args){
            
            if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){    
                
                let pollDescription = args.join(' ');
                const Embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Nouveau Sondage !')
                    .setDescription(pollDescription)
                    .setTimestamp()

                message.channel.send({ embeds: [Embed] }).then(msgEmbed => {
                msgEmbed.react('👍')
                msgEmbed.react('👎')
                })
           
                            
            }else{
                message.channel.send("Vous n'avez pas le droit d'utiliser cette commande.");
            }
        }   
    }