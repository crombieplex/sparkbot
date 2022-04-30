const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `What is your mining level including any aptitude levels.`)
    interaction.user.flow.state = 'miningEdit'
}
