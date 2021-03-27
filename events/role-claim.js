module.exports = async (client, channelId, channelLogs, _roleDefault, _roleTarget) => {
    const channelLog = await client.channels.fetch(channelLogs)

    client.on('messageReactionAdd', (reaction, user) => {
        const {
            guild
        } = reaction.message

        const roleDefault = guild.roles.cache.find(role => role.name === _roleDefault)
        const roleTarget = guild.roles.cache.find(role => role.name === _roleTarget)
        const member = guild.members.cache.find(member => member.id === user.id)

        if (reaction.message.channel.id === channelId) {
            var today = new Date()
            if (reaction._emoji.name === '✔️') {
                member.roles.remove(roleDefault)
                member.roles.add(roleTarget)
                channelLog.send(`${user.tag} aka (${user.username}) a accepté les règles le : \`${today.toString()}\` !`)
            } else if (reaction._emoji.name === '❌') {
                channelLog.send(`${user.tag} aka (${user.username}) n'a pas accepté les règles le : \`${today.toString()}\` !`)
            }
        }
    })
    client.on('messageReactionRemove', (reaction, user) => {
        const {
            guild
        } = reaction.message
        const roleDefault = guild.roles.cache.find(role => role.name === _roleDefault)
        const roleTarget = guild.roles.cache.find(role => role.name === _roleTarget)
        const member = guild.members.cache.find(member => member.id === user.id)
        if (reaction.message.channel.id === channelId) {
            if (reaction._emoji.name === '✔️') {
                var today = new Date()
                member.roles.remove(roleTarget)
                member.roles.add(roleDefault)
                channelLog.send(`${user.tag} aka (${user.username}) a arrêté d'accepté les règles le : \`${today.toString()}\` !`)
            }
        }
    })
}