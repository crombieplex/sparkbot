const gathering = require('../data/gathering')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = class Gathering {
    constructor(id, mining = null, skinning = null, fishing = null, logging = null, harvesting = null) {
        this.id = id
        this._mining = mining
        this._skinning = skinning
        this._fishing = fishing
        this._logging = logging
        this._harvesting = harvesting
    }

    get mining() {
        return this._mining
    }

    get skinning() {
        return this._skinning
    }

    get fishing() {
        return this._fishing
    }

    get logging() {
        return this._logging
    }

    get harvesting() {
        return this._harvesting
    }

    set mining(mining) {
        let valid = true
        if (!Number.isInteger(mining)) {
            valid = false
        } else if (mining < 1 || mining > 600) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "mining" attribute value "${mining}" for user ${this.id}.`)
            throw "Your mining has to be an integer between 1 and 600, inclusive. Try again."
        }
        this._mining = mining
        gathering.setAttribute(this.id, "mining", this.mining)
    }

    set skinning(skinning) {
        let valid = true
        if (!Number.isInteger(skinning)) {
            valid = false
        } else if (skinning < 1 || skinning > 600) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "skinning" attribute value "${skinning}" for user ${this.id}.`)
            throw "Your skinning has to be an integer between 1 and 600, inclusive. Try again."
        }
        this._skinning = skinning
        gathering.setAttribute(this.id, "skinning", this.skinning)
    }

    set fishing(fishing) {
        let valid = true
        if (!Number.isInteger(fishing)) {
            valid = false
        } else if (fishing < 1 || fishing > 600) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "fishing" attribute value "${fishing}" for user ${this.id}.`)
            throw "Your fishing has to be an integer between 1 and 600, inclusive. Try again."
        }
        this._fishing = fishing
        gathering.setAttribute(this.id, "fishing", this.fishing)
    }

    set logging(logging) {
        let valid = true
        if (!Number.isInteger(logging)) {
            valid = false
        } else if (logging < 1 || logging > 600) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "logging" attribute value "${logging}" for user ${this.id}.`)
            throw "Your logging has to be an integer between 1 and 600, inclusive. Try again."
        }
        this._logging = logging
        gathering.setAttribute(this.id, "logging", this.logging)
    }

    set harvesting(harvesting) {
        let valid = true
        if (!Number.isInteger(harvesting)) {
            valid = false
        } else if (harvesting < 1 || harvesting > 600) {
            valid = false
        }

        if (!valid) {
            harvesting.warn(`Rejected input "harvesting" attribute value "${harvesting}" for user ${this.id}.`)
            throw "Your harvesting has to be an integer between 1 and 600, inclusive. Try again."
        }
        this._harvesting = harvesting
        gathering.setAttribute(this.id, "harvesting", this.harvesting)
    }

    get embed() {
        let embed = new MessageEmbed()
            .setTitle(this._name).setColor("#DAA520")
        if (this._mining && this._mining > 200) {
            embed.addField("Mining", "" + this._mining, true)
        } else {
            embed.addField("Mining", "0", true)
        }
        if (this._mining && this._mining < 200) {
            embed.addField("Aptitude", "" + this._gearscore - 200, true)
        } else {
            embed.addField("Aptitude", "0", true)
        }

        if (this._skinning && this._skinning > 200) {
            embed.addField("Skinning", "" + this._skinning, true)
        } else {
            embed.addField("Skinning", "0", true)
        }
        if (this._skinning && this._skinning < 200) {
            embed.addField("Aptitude", "" + this._skinning - 200, true)
        } else {
            embed.addField("Aptitude", "0", true)
        }

        if (this._fishing && this._fishing > 200) {
            embed.addField("Fishing", "" + this._fishing, true)
        } else {
            embed.addField("Fishing", "0", true)
        }
        if (this._fishing && this._fishing < 200) {
            embed.addField("Aptitude", "" + this._fishing - 200, true)
        } else {
            embed.addField("Aptitude", "0", true)
        }

        if (this._logging && this._logging > 200) {
            embed.addField("Logging", "" + this._logging, true)
        } else {
            embed.addField("Logging", "0", true)
        }
        if (this._logging && this._logging < 200) {
            embed.addField("Aptitude", "" + this._logging - 200, true)
        } else {
            embed.addField("Aptitude", "0", true)
        }

        if (this._harvesting && this._harvesting > 200) {
            embed.addField("Harvesting", "" + this._harvesting, true)
        } else {
            embed.addField("Harvesting", "0", true)
        }
        if (this._harvesting && this._harvesting < 200) {
            embed.addField("Aptitude", "" + this._harvesting - 200, true)
        } else {
            embed.addField("Aptitude", "0", true)
        }

        return embed
    }

    static fromJson(key, value) {
        let character = new Character(
            key,
            value.mining,
            value.skinning,
            value.fishing,
            value.logging,
            value.harvesting)
        return character
    }
}
