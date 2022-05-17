const messenger = require('../lib/messenger')

module.exports = (message) => {
    let faction = message.content
    try {
        message.author.character.faction = faction
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    if (!message.author.character.faction) {
        messenger.send(message.author, `Welcome to the Sorting Ceremony!!!!!This yearly ritual....Oh wait, you are just a muggle.... Whats your faction then?`)
    } else {
        messenger.send(message.author, `Great to see another member of ${faction}! What is your character\'s current faction?`)
    }

    message.author.flow.state = 'notesNew'
}
