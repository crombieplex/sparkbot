const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `Welcome to the Sorting Ceremony!!!!!This yearly ritual....Oh wait, you are just a muggle.... Whats your faction then?`)
    interaction.user.flow.state = 'factionEdit'
}
