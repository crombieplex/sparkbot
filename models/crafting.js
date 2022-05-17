const craftings = require('../data/craftings')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = class Crafting {
    constructor(id, name = null, weaponsmithing = null, weaponsmithingAptitude = null, armoring = null, armoringAptitude = null, engineering = null, engineeringAptitude = null, jewelcrafting = null, jewelcraftingAptitude= null, arcana = null, arcanaAptitude = null, cooking = null, cookingAptitude = null, furnishing = null, furnishingAptitude = null) {
        this.id = id
        this._name = name
        this._weaponsmithing = weaponsmithing
        this._weaponsmithingAptitude = weaponsmithingAptitude
        this._armoring = armoring
        this._armoringAptitude = armoringAptitude
        this._engineering = engineering
        this._engineeringAptitude = engineeringAptitude
        this._jewelcrafting = jewelcrafting
        this._jewelcraftingAptitude = jewelcraftingAptitude
        this._arcana = arcana
        this._arcanaAptitude = arcanaAptitude
        this._cooking = cooking
        this._cookingAptitude = cookingAptitude
        this._furnishing = furnishing
        this._furnishingAptitude = furnishingAptitude
    }

    get name() {
        return this._name
    }

    get weaponsmithing() {
        return this._weaponsmithing
    }

    get weaponsmithingAptitude() {
        return this._weaponsmithingAptitude
    }

    get armoring() {
        return this._armoring
    }

    get armoringAptitude() {
        return this._armoringAptitude
    }

    get engineering() {
        return this._engineering
    }

    get engineeringAptitude() {
        return this._engineeringAptitude
    }

    get jewelcrafting() {
        return this._jewelcrafting
    }

    get jewelcraftingAptitude() {
        return this._jewelcraftingAptitude
    }

    get arcana() {
        return this._arcana
    }

    get arcanaAptitude() {
        return this._arcanaAptitude
    }

    get cooking() {
        return this._cooking
    }

    get cookingAptitude() {
        return this._cookingAptitude
    }

    get furnishing() {
        return this._furnishing
    }

    get furnishingAptitude() {
        return this._furnishingAptitude
    }

    set name(name) {
        if (name.length > 256) {
            logger.warn(`Rejected input "name" attribute value "${name}" for user ${this.id}.`)
            throw `Whoa, that name is way too long. Try something shorter. Again, it should be your character's in-game name.`
        }

        if (name.startsWith("=")) {
            logger.warn(`Rejected input "name" attribute value "${name}" for user ${this.id}.`)
            throw `It looks like you're trying to do some formula injection. Try again without the equal sign.`
        }
        this._name = name
        craftings.setAttribute(this.id, "name", this.name)
    }

    set weaponsmithing(weaponsmithing) {
        let valid = true
        if (!Number.isInteger(weaponsmithing)) {
            valid = false
        } else if (weaponsmithing < 1 || weaponsmithing > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "weaponsmithing" attribute value "${weaponsmithing}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._weaponsmithing = weaponsmithing
        craftings.setAttribute(this.id, "weaponsmithing", this.weaponsmithing)
    }

    set weaponsmithingAptitude(weaponsmithingAptitude) {
        let valid = true
        if (!Number.isInteger(weaponsmithingAptitude)) {
            valid = false
        } else if (weaponsmithingAptitude < 0 || weaponsmithingAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "weaponsmithing aptitude" attribute value "${weaponsmithingAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._weaponsmithingAptitude = weaponsmithingAptitude
        craftings.setAttribute(this.id, "weaponsmithingAptitude", this.weaponsmithingAptitude)
    }

    set armoring(armoring) {
        let valid = true
        if (!Number.isInteger(armoring)) {
            valid = false
        } else if (armoring < 1 || armoring > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "armoring" attribute value "${armoring}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._armoring = armoring
        craftings.setAttribute(this.id, "armoring", this.armoring)
    }

    set armoringAptitude(armoringAptitude) {
        let valid = true
        if (!Number.isInteger(armoringAptitude)) {
            valid = false
        } else if (armoringAptitude < 0 || armoringAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "armoring aptitude" attribute value "${armoringAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._armoringAptitude = armoringAptitude
        craftings.setAttribute(this.id, "armoringAptitude", this.armoringAptitude)
    }

    set engineering(engineering) {
        let valid = true
        if (!Number.isInteger(engineering)) {
            valid = false
        } else if (engineering < 1 || engineering > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "engineering" attribute value "${engineering}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._engineering = engineering
        craftings.setAttribute(this.id, "engineering", this.engineering)
    }

    set engineeringAptitude(engineeringAptitude) {
        let valid = true
        if (!Number.isInteger(engineeringAptitude)) {
            valid = false
        } else if (engineeringAptitude < 0 || engineeringAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "engineering aptitude" attribute value "${engineeringAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._engineeringAptitude = engineeringAptitude
        craftings.setAttribute(this.id, "engineeringAptitude", this.engineeringAptitude)
    }

    set jewelcrafting(jewelcrafting) {
        let valid = true
        if (!Number.isInteger(jewelcrafting)) {
            valid = false
        } else if (jewelcrafting < 1 || jewelcrafting > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "jewelcrafting" attribute value "${jewelcrafting}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._jewelcrafting = jewelcrafting
        craftings.setAttribute(this.id, "jewelcrafting", this.jewelcrafting)
    }

    set jewelcraftingAptitude(jewelcraftingAptitude) {
        let valid = true
        if (!Number.isInteger(jewelcraftingAptitude)) {
            valid = false
        } else if (jewelcraftingAptitude < 0 || jewelcraftingAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "jewelcrafting aptitude" attribute value "${jewelcraftingAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._jewelcraftingAptitude = jewelcraftingAptitude
        craftings.setAttribute(this.id, "jewelcraftingAptitude", this.jewelcraftingAptitude)
    }

    set arcana(arcana) {
        let valid = true
        if (!Number.isInteger(arcana)) {
            valid = false
        } else if (arcana < 1 || arcana > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "arcana" attribute value "${arcana}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._arcana = arcana
        craftings.setAttribute(this.id, "arcana", this.arcana)
    }

    set arcanaAptitude(arcanaAptitude) {
        let valid = true
        if (!Number.isInteger(arcanaAptitude)) {
            valid = false
        } else if (arcanaAptitude < 0 || arcanaAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "arcana aptitude" attribute value "${arcanaAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._arcanaAptitude = arcanaAptitude
        craftings.setAttribute(this.id, "arcanaAptitude", this.arcanaAptitude)
    }

    set cooking(cooking) {
        let valid = true
        if (!Number.isInteger(cooking)) {
            valid = false
        } else if (cooking < 1 || cooking > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "cooking" attribute value "${cooking}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._cooking = cooking
        craftings.setAttribute(this.id, "cooking", this.cooking)
    }

    set cookingAptitude(cookingAptitude) {
        let valid = true
        if (!Number.isInteger(cookingAptitude)) {
            valid = false
        } else if (cookingAptitude < 0 || cookingAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "cooking aptitude" attribute value "${cookingAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._cookingAptitude = cookingAptitude
        craftings.setAttribute(this.id, "cookingAptitude", this.cookingAptitude)
    }

    set furnishing(furnishing) {
        let valid = true
        if (!Number.isInteger(furnishing)) {
            valid = false
        } else if (furnishing < 1 || furnishing > 200) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "furnishing" attribute value "${furnishing}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 200, inclusive. Try again."
        }
        this._furnishing = furnishing
        craftings.setAttribute(this.id, "furnishing", this.furnishing)
    }

    set furnishingAptitude(furnishingAptitude) {
        let valid = true
        if (!Number.isInteger(furnishingAptitude)) {
            valid = false
        } else if (furnishingAptitude < 0 || furnishingAptitude > 500) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "furnishing aptitude" attribute value "${furnishingAptitude}" for user ${this.id}.`)
            throw "Your level has to be an integer between 0 and 500, inclusive. Try again."
        }
        this._furnishingAptitude = furnishingAptitude
        craftings.setAttribute(this.id, "furnishingAptitude", this.furnishingAptitude)
    }


    get embed() {
        let embed = new MessageEmbed()
            .setTitle(this._name).setColor("#DAA520")
        if (this._weaponsmithing && this._weaponsmithing > 0 && this._weaponsmithingAptitude && this._weaponsmithingAptitude > 0) {
            embed.addField("Weaponsmithing", "" + this._weaponsmithing, true)
            embed.addField("Aptitude", "" + this._weaponsmithingAptitude, true)
        } else {
            embed.addField("Weaponsmithing", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        if (this._armoring && this._armoring > 0 && this._armoringAptitude && this._armoringAptitude > 0) {
            embed.addField("Armoring", "" + this._armoring, true)
            embed.addField("Aptitude", "" + this._armoringAptitude, true)
        } else {
            embed.addField("Armoring", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        if (this._engineering && this._engineering > 0 && this._engineeringAptitude && this._engineeringAptitude > 0) {
            embed.addField("Engineering", "" + this._engineering, true)
            embed.addField("Aptitude", "" + this._engineeringAptitude, true)
        } else {
            embed.addField("Engineering", "?", true)
            embed.addField("Aptitude", "?", true)
          }
        if (this._jewelcrafting && this._jewelcrafting > 0 && this._jewelcraftingAptitude && this._jewelcraftingAptitude > 0) {
            embed.addField("Jewelcrafting", "" + this._jewelcrafting, true)
            embed.addField("Aptitude", "" + this._jewelcraftingAptitude, true)
        } else {
            embed.addField("Jewelcrafting", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        if (this._arcana && this._arcana > 0 && this._arcanaAptitude && this._arcanaAptitude > 0) {
            embed.addField("Arcana", "" + this._arcana, true)
            embed.addField("Aptitude", "" + this._arcanaAptitude, true)
        } else {
            embed.addField("Arcana", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        if (this._cooking && this._cooking > 0 && this._cookingAptitude && this._cookingAptitude > 0) {
            embed.addField("Cooking", "" + this._cooking, true)
            embed.addField("Aptitude", "" + this._cookingAptitude, true)
        } else {
            embed.addField("Cooking", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        if (this._furnishing && this._furnishing > 0 && this._furnishingAptitude && this._furnishingAptitude > 0) {
            embed.addField("Furnishing", "" + this._furnishing, true)
            embed.addField("Aptitude", "" + this._furnishingAptitude, true)
        } else {
            embed.addField("Furnishing", "?", true)
            embed.addField("Aptitude", "?", true)
        }
        return embed
    }

    static fromJson(key, value) {
        let crafting = new Crafting(
            key,
            value.name,
            value.weaponsmithing,
            value.weaponsmithingAptitude,
            value.armoring,
            value.armoringAptitude,
            value.engineering,
            value.engineeringAptitude,
            value.jewelcrafting,
            value.jewelcraftingAptitude,
            value.arcana,
            value.arcanaAptitude,
            value.cooking,
            value.cookingAptitude,
            value.furnishing,
            value.furnishingAptitude)
        return crafting
    }
}
