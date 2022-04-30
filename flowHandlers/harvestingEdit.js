const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')

module.exports = (message) => {
    let harvesting = parseInt(message.content)
    try {
        message.author.character.harvesting = harvesting
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.sendMenu(message.author, menuFactory.getCharacterTradesMenu(message.author.character))
    message.author.flow.state = 'idle'
}
