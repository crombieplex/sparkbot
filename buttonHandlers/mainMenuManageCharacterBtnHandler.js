const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (interaction) => {
  if (!interaction.user.grants.company) {
      return;
  }
    messenger.sendMenu(interaction.user, menuFactory.getMainCharacterMenu(interaction.user))
}
