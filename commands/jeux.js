module.exports = {
    name : 'jeux',
    description : 'Commande pour crée un sondage pour choisir un jeux',
    execute(message,MessageEmbed){
            
        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){    
                
            let pollDescription = "PUBG 1️⃣\nUNO 2️⃣\nPUMMEL 3️⃣\nPROPNIGHT 4️⃣\nPHASMO 5️⃣\nREADY OR NOT 6️⃣";

            const Embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("On joue à quoi l'équipe ❓")
                .setDescription(pollDescription)
                .setTimestamp()

            message.channel.send({ embeds: [Embed] }).then(msgEmbed => {
            msgEmbed.react('1️⃣')
            msgEmbed.react('2️⃣')
            msgEmbed.react('3️⃣')
            msgEmbed.react('4️⃣')
            msgEmbed.react('5️⃣')
            msgEmbed.react('6️⃣')

        })
                
        }else{

            message.reply("Vous n'avez pas le droit d'utiliser cette commande.");

        }
    }   
}