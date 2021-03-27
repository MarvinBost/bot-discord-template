module.exports = {
    name: '!cc <number>',
    commands: 'cc',
    description: '"Supprime <number> messages',
    execute(message, args) {
        try {
            if (isNaN(parseInt(args[0]))) {
                throw `${args[0]} n'est pas un chiffre.`
            }
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                if (parseInt(args[0]) < 100) {
                    message.channel.fetch(true).then(() => {
                        message.channel.bulkDelete(parseInt(args[0]) + 1, true)
                            .then(() => console.log(`${parseInt(args[0]) + 1} messages supprimés.`))
                            .catch(console.error)
                    })
                } else {
                    throw 'Ne pas dépasser les 100 messages.'
                }
            } else {
                throw `Vous n'avez pas les droits pour cette commande.`
            }
        } catch (error) {
            message.channel.send(error)
        }
    }
}