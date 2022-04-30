const messenger = require('../lib/messenger')

module.exports = (message) => {
    let fishing = message.content
    try {
        message.author.character.fishing = fishing
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Tell me you fish! What's your level? You can also say 'none' if you don't fish.`)

    message.author.flow.state = 'loggingNew'
}
