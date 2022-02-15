const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (message) => {
    let dps = message.content.toLowerCase()
    try {
        message.author.character.dps = dps
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.sendMenu(message.author, menuFactory.getCharacterMenu(message.author.character))

    message.author.flow.state = 'idle'
}
