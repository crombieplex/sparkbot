const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `What is your engineering level including any aptitude levels.`)
    interaction.user.flow.state = 'engineeringEdit'
}
