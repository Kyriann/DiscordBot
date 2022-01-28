module.exports = {
    name : 'clear',
    description : "permet de supprimer un nombre de messages",
    async execute(message,args){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES_BOSS)){  
                
            if(!args[0]) return message.reply("Tu dois spécifier un nombre de messages à supprimer !");

                message.channel.bulkDelete(args[0])
                message.channel.send(args[0] + " messages on était supprimé !");
            
        }else{

            message.reply("Vous n'avez pas le droit d'utiliser cette commande.")

        }
    }   
}