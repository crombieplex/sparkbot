const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `What is your fishing level including any aptitude levels.`)
    interaction.user.flow.state = 'fishingEdit'
}
