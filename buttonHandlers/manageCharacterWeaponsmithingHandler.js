const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `I hear you make some mighty fine weapons, what level are you?`)
    interaction.user.flow.state = 'weaponsmithingEdit'
}
