module.exports = {
    name: '!youtube',
    commands: 'youtube',
    description: "https://www.youtube.com/",
    execute(message) {
        message.channel.send('Voici notre lien Youtube : \nhttps://www.youtube.com/')
        message.delete({
            timeout: 1000
        })
    }
}