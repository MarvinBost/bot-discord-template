module.exports = {
    name: '!youtube',
    commands: 'youtube',
    description: "Obtenir le lien de notre chaine Youtube",
    execute(message) {
        message.channel.send('Voici notre lien Youtube : \nhttps://www.youtube.com/channel/ID')
        message.delete({
            timeout: 1000
        })
    }
}