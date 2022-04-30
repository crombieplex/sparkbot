const messenger = require('../lib/messenger')

module.exports = (message) => {
    let logging = message.content
    try {
        message.author.character.logging = logging
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `So, you like to play with your wood? What's your level? You can also say 'none' if you don't log.`)

    message.author.flow.state = 'harvestingNew'
}
