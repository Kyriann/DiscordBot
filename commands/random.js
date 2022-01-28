module.exports = {
    name : 'random',
    description : 'Commande pour choisir un jeux aléatoirement',
    execute(message,args){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){  
                
 

        }else{

            message.channel.send("Vous n'avez pas le droit d'utiliser cette commande.")

        }
    }   
}