const messenger = require('../lib/messenger')

module.exports = (message) => {
    let skinning = message.content
    try {
        message.author.character.skinning = skinning
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `So you skin them kills! What's your level? You can also say 'none' if you don't skin.`)

    message.author.flow.state = 'fishingNew'
}
