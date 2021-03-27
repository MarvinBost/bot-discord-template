const Discord = require("discord.js")
const fs = require('fs')

module.exports = {
    name: '!help',
    commands: 'help',
    description: 'Obtenir la liste des commandes',
    execute(message, args, client) {
        console.log();
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'))
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des commandes générales")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setColor(65280)
            .setDescription('\u200b')
            .setFooter(client.user.username, client.user.avatarURL())
            .setImage(client.user.avatarURL())
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            embed.addFields({
                name: command.name,
                value: command.description
            })
        }

        message.channel.send(embed)
        message.delete({
            timeout: 1000
        })
    }
}