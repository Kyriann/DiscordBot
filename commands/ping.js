module.exports = {
    name : 'ping',
    description : 'This is a ping command',
    execute(message,args){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){

            message.channel.send('pong');

            
        }else{

            message.channel.send("Vous n'avez pas le droit d'utiliser cette commande.")

        }
    }   
}