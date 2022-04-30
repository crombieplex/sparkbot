const messenger = require('../lib/messenger')

module.exports = (message) => {
    let mining = message.content
    try {
        message.author.character.mining = mining
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `So, whats your minging level? You can also say 'none' if you don't mine.`)

    message.author.flow.state = 'skinningNew'
}
