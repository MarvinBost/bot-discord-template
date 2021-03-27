module.exports = {
    name: '!count',
    commands: 'count',
    description: 'Obtenir le nombre de membre sur le serveur',
    execute(message, args, client) {
        client.guilds.cache.forEach(guild => {
            message.channel.send(`**${guild.name}** posséde un total de **${guild.memberCount}** membres !`)
            message.delete({
                timeout: 1000
            })
        })
    }
}