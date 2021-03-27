module.exports = {
    name: '!discord',
    commands: 'discord',
    description: "Obtenir le lien d'invitation",
    execute(message) {
        message.channel.send('Vous pouvez invitez vos amis avec ce lien : \nhttps://discord.gg/ID')
        message.delete({
            timeout: 1000
        })
    }
}