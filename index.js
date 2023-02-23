const { Telegraf } = require('telegraf');
const initCommand = require('./commands/index');

const bot = new Telegraf("5982314851:AAHz0JwDC7InggdtBwLw3QSCd9bci_E6lOM");

let commands = []

Telegraf.prototype.newCommand = (...args) => {
    commands.push(typeof args[0] === 'object' ? args[0] : { command: args[0], description: 'empty command' })
    const newArgs = args.map((item, index) => { 
        return index === 0 && typeof item === 'object' ? item.command : item 
    })
    bot.command(...newArgs) 
}

initCommand(bot)

bot.telegram.setMyCommands(commands.sort((left, right) => left.command.localeCompare(right.command)))

bot.start((ctx) => ctx.reply('Welcome'));

bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch() ;
