const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (message) => {
  let weaponsmithingAptitude = parseInt(message.content)
  try {
      message.author.character.weaponsmithingAptitude = weaponsmithingAptitude
  } catch (ex) {
      messenger.send(message.author, ex)
      return
  }

    messenger.sendMenu(message.author, menuFactory.getCharacterMenu(message.author.character))
    message.author.flow.state = 'idle'
}
