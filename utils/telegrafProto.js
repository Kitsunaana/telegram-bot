const deleteMessage = require('./deleteMessage');

let commands = []

const isObj = (obj) => typeof obj === 'object'

const checkMiddleware = (needReplace) => {
    return (middleware, index) => {
        return index == 2 ? (needReplace ? deleteMessage(middleware) : middleware) : index === 1 ? null : middleware
    }
}

const initProto = (bot) => {
    bot.__proto__.newCommand = (...args) => {
        commands.push(isObj(args[0]) ? args[0] : { command: args[0], description: 'empty command' })
        let newArgs = args.map((item, index) => index === 0 && isObj(item) ? item.command : item)
        if (typeof args[1] === 'boolean' && args[1]) 
            { newArgs = newArgs.map(checkMiddleware(args[1])).filter(item => item !== null) }
    
        bot.command(...newArgs)
    }
}

module.exports = { commands, initProto }