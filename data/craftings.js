const Crafting = require('../models/crafting')
const lockfile = require('proper-lockfile')
const fs = require('fs')
const tradeSheets = require('./tradesheets')
const logger = require('../lib/logger')
const filterUtil = require('../lib/filter')

const file = "./data/characterDataTrade.json"
let cache = null

const list = (next) => {
    lockfile.lock(file)
        .then((release) => {
            _get((err, obj) => {
                release()
                let result = []
                let entries = Object.entries(obj)
                for (let i = 0; i < entries.length; i++) {
                    let entry = entries[i][1]
                    entry.id = entries[i][0]
                    result.push(entry)
                }
                next(err, result)
            })
        })
        .catch((err) => {
            return next(`Failed to acquire lock for file ${file}: ${err}`, null)
        })
}

const getOrAdd = (id, next) => {
    let newCrafting = { name: id }

    lockfile.lock(file)
        .then((release) => {
            _get((err, obj) => {
                if (err) {
                    release()
                    return next(`Failed to get crafting: ${err}`, null);
                }
                if (obj[id]) {
                    release()
                    next(null, Crafting.fromJson(id, obj[id]))
                    return
                }
                obj[id] = newCrafting
                _set(obj, (err) => {
                    release()
                    if (err) return next(err, null);
                    logger.info(`Created new character for user ${id}.`)
                    next(null, Crafting.fromJson(id, newCrafting))
                })
            })
        })
        .catch((err) => {
            return next(`Failed to acquire lock for file ${file}: ${err}`, null)
        })
}

const filter = (filterString, next) => {
    list((err, obj) => {
        if (err) {
            return next(`Failed to get characters: ${err}`, null)
        }
        next(null, filterUtil.apply(obj, filterString))
    })
}

const setAttribute = (id, attributeName, attributeValue, next = () => { }) => {
    lockfile.lock(file)
        .then((release) => {
            _get((err, obj) => {
                if (err) {
                    release()
                    return next(`Failed to get characters: ${err}`, null);
                }
                obj[id][attributeName] = attributeValue
                _set(obj, (err) => {
                    release()
                    logger.info(`Set attribute "${attributeName}" to "${attributeValue}" for user ${id}.`)
                    next(err, Crafting.fromJson(id, obj[id]))
                })
            })
        })
}

const _get = (next) => {
    if (cache) return next(null, cache)

    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            logger.error(`Failed to read ${file}: ${err}`)
            return next(err, null);
        }
        next(null, JSON.parse(data))
    })
}

const _set = (obj, next) => {
    fs.writeFile(file, JSON.stringify(obj), (err) => {
        if (err) logger.error(`Failed to write to ${file}: ${err}`)
        else cache = obj
        next(err)
    })
    tradeSheets.update(obj)
}

module.exports.getOrAdd = getOrAdd
module.exports.filter = filter
module.exports.list = list
module.exports.setAttribute = setAttribute
