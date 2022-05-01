const characters = require('../data/characters')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = class gatheringCharacter {
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
        characters.setAttribute(this.id, "mining", this.mining)
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
        characters.setAttribute(this.id, "skinning", this.skinning)
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
        characters.setAttribute(this.id, "fishing", this.fishing)
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
        characters.setAttribute(this.id, "logging", this.logging)
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
        characters.setAttribute(this.id, "harvesting", this.harvesting)
    }

    get embed() {
        let embed = new MessageEmbed()
            .setTitle(this._name).setColor("#DAA520")
        if (this._mining && this._mining > 0) {
            embed.addField("Mining", "" + this._mining, true)
        } else {
            embed.addField("Mining", "None", true)
        }
        if (this._gearscore && this._gearscore > 0) {
            embed.addField("Gearscore", "" + this._gearscore, true)
        } else {
            embed.addField("Gearscore", "?", true)
        }
        embed.addField("Weapon 1", this._primaryWeapon || "?", false)
        embed.addField("Weapon 2", this._secondaryWeapon || "?", false)
        embed.addField("Weight", this._weight || "?", false)
        embed.addField("DPS", this._dps || "?", false)
        if (this._notes) {
            embed.addField("Notes", this._notes, false)
        }
        return embed
    }

    static fromJson(key, value) {
        let character = new Character(
            key,
            value.name,
            value.company,
            value.level,
            value.gearscore,
            value.primaryWeapon,
            value.secondaryWeapon,
            value.weight,
            value.dps,
            value.notes)
        return character
    }
}
