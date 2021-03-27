const Discord = require("discord.js")
const fs = require("fs")

const client = new Discord.Client()
client.commands = new Discord.Collection();
const roleClaim = require('./events/role-claim')
const welcomeMessage = require('./utils/welcome-message')

const {
    prefix,
    token,
    channelRules,
    channelLogs,
    _roleDefault,
    _roleTarget
} = require("./config.json")

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.commands, command);
}

client.on('ready', () => {
    console.log(`${client.user.username} is connected !`)
    client.user.setPresence({
        status: 'online',
        activity: {
            name: `${prefix}help`,
            type: 'LISTENING'
        }
    })

    let welcome = `Bienvenue! \n"Nom du server" est heureux de vous acceuilir, je vous laisse lire les règles et les accepter.\nLes règles:`
    welcomeMessage(client, channelRules, welcome, ['✔️', '❌'])
    roleClaim(client, channelRules, channelLogs, _roleDefault, _roleTarget)
})

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.find(role => role.name === _roleDefault)
    member.roles.add(role)
})


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    if (!client.commands.has(command)) return
    try {
        client.commands.get(command).execute(message, args, client)
    } catch (error) {
        console.error(error)
        message.reply('Erreur sur cette commande!')
    }
})

client.login(token)