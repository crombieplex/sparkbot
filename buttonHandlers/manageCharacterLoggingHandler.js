const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `What is your logging level including any aptitude levels.`)
    interaction.user.flow.state = 'loggingEdit'
}
