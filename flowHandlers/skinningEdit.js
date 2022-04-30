const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (message) => {
    let skinning = parseInt(message.content)
    try {
        message.author.character.skinning = skinning
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.sendMenu(message.author, menuFactory.getCharacterTradesMenu(message.author.character))
    message.author.flow.state = 'idle'
}
