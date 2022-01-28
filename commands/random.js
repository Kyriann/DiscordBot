module.exports = {
    name : 'random',
    description : 'Commande pour générer un nombre alétoirement',
    execute(message,args,MessageEmbed){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){  

            if (!args.length || !args[1]) {

                message.reply("J'ai besoin d'une valeur maximal et minimal.")

            }else{
                
                let max = args[1];
                let min = args[0];

                let randNo = Math.round(Math.random() * max + min)

                const Embed = new MessageEmbed()

                .setTitle("Votre chiffre est : ")
                .setDescription(randNo.toString())
                .setColor('RANDOM')
                .setTimestamp()

                 message.reply({ embeds: [Embed] })

                }

        }else{

            message.reply("Vous n'avez pas le droit d'utiliser cette commande.")

        }
    }   
}