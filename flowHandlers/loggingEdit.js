const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (message) => {
    let logging = parseInt(message.content)
    try {
        message.author.character.logging = logging
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.sendMenu(message.author, menuFactory.getCharacterTradesMenu(message.author.character))
    message.author.flow.state = 'idle'
}
