module.exports = {
    name : 'ping',
    description : 'This is a ping command',
    execute(message){

        if (message.member.roles.cache.has(process.env.DISCORD_ROLES)){

            message.reply('pong');

        }else{

            message.reply("Vous n'avez pas le droit d'utiliser cette commande.");

        }
    }   
}