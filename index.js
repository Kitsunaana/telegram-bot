const { Telegraf } = require('telegraf');
const initCommand = require('./commands/index');

const bot = new Telegraf("5982314851:AAHz0JwDC7InggdtBwLw3QSCd9bci_E6lOM");

let commands = []

bot.newCommand = function (...args) {
    commands.push({ name: args[0], help: args[1]})
    const newArgs = args.filter((item, index) => { return index !== 1 })
    bot.command(...newArgs) 
}

initCommand(bot)

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Список доступных команд:\n\n' + commands.map(item => `/${item?.name}: ${item?.help}`).join('\n')));

bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch() ;
