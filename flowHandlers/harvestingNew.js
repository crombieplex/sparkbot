const messenger = require('../lib/messenger')

module.exports = (message) => {
    let harvesting = message.content
    try {
        message.author.character.harvesting = harvesting
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `What kind of herbs you gathering? What's your level? You can also say 'none' if you don't harvest.`)

    message.author.flow.state = 'idle'
}
