const { Telegraf } = require('telegraf')
const loader = require('./utils/loader')
const { commands, initProto } = require('./utils/telegrafProto')

const bot = new Telegraf("5982314851:AAHz0JwDC7InggdtBwLw3QSCd9bci_E6lOM")

initProto(bot)
loader({ path: "./middleware", type: "middleware" }, bot)
loader({ path: "./commands", type: "command" }, bot)

bot.telegram.setMyCommands(commands.sort((left, right) => left.command.localeCompare(right.command)))

bot.start((ctx) => ctx.reply('Welcome'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch() 
