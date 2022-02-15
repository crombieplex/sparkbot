const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `Now we need to know if ya can DPS or not? Your options are "tank", "dps", "ranged", or "healer".`)
    interaction.user.flow.state = 'dpsEdit'
}
