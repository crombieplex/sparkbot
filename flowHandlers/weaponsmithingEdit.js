const messenger = require('../lib/messenger')

module.exports = (message) => {
  let weaponsmithing = parseInt(message.content)
  try {
      message.author.character.weaponsmithing = weaponsmithing
  } catch (ex) {
      messenger.send(message.author, ex)
      return
  }

    messenger.send(message.author, `Great job on being ${message.author.character.weaponsmithing}! Cool. Now whats your aptitude?`)

    message.author.flow.state = 'weaponsmithing2Edit'
}
