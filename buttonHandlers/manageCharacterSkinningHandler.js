const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `What is your skinning level including any aptitude levels.`)
    interaction.user.flow.state = 'skinningEdit'
}
