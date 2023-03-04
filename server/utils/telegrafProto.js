const deleteMessage = require('./deleteMessage')
const { Composer } = require('telegraf');

let commands = []

const isObj = (obj) => typeof obj === 'object'

const checkMiddleware = (needReplace) => {
    return (middleware, index) => {
        return index == 2 ? (needReplace ? deleteMessage(middleware) : middleware) : index === 1 ? null : middleware
    }
}

Composer.prototype.newCommand = function () {
    commands.push(isObj(arguments[0]) ? arguments[0] : { command: arguments[0], description: 'empty command' })

    let newArgs = Object.values(arguments).map((item, index) => index === 0 && isObj(item) ? item.command : item)

    if (typeof arguments[1] === "boolean" && arguments[1])
        { newArgs = newArgs.map(checkMiddleware(arguments[1])).filter(item => item !== null) }

    this.command(...newArgs)
}

module.exports = { commands }