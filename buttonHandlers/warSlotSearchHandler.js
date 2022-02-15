const messenger = require('../lib/messenger')
const menuFactory = require('../lib/menuFactory')
const wars = require('../data/wars')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = (interaction) => {
    let embed = new MessageEmbed()
        .setTitle("Please specify a query string to use for your search. You can also say \"cancel\" to go back.")
        .setDescription("Search Examples; gearscore.gt.560&weight.equals.Heavy,Medium")
    messenger.sendEmbed(interaction.user, embed)
    interaction.user.flow.setStateAndMetadata('warSlotSearch', interaction.customId.split(".").slice(1).join("."))
}
