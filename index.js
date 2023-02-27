const { Telegraf } = require('telegraf')
const initCommand = require('./commands/index')
const { commands, initProto } = require('./utils/telegrafProto')

const bot = new Telegraf("5982314851:AAHz0JwDC7InggdtBwLw3QSCd9bci_E6lOM")

bot.use((ctx, next) => {
    if (ctx.update?.message?.new_chat_members) {
        console.log(ctx.update?.message?.new_chat_members)
        ctx.reply(`Hello: \n${ ctx.update.message.new_chat_members.map(item => `${item.first_name} ${item?.last_name ? item.last_name : ''} (${item?.username})`).join(',') }`, { 
            reply_to_message_id: ctx.message.message_id })
    } else {
        next()
    }
})

initProto(bot)
initCommand(bot)

bot.telegram.setMyCommands(commands.sort((left, right) => left.command.localeCompare(right.command)))

bot.start((ctx) => ctx.reply('Welcome'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch() 
