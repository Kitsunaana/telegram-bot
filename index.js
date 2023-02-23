const { Telegraf } = require('telegraf')
const initCommand = require('./commands/index')
const { commands, initProto } = require('./utils/telegrafProto')

const bot = new Telegraf("5982314851:AAHz0JwDC7InggdtBwLw3QSCd9bci_E6lOM")

initProto(bot)
initCommand(bot)

bot.telegram.setMyCommands(commands.sort((left, right) => left.command.localeCompare(right.command)))

bot.start((ctx) => ctx.reply('Welcome'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch() 
