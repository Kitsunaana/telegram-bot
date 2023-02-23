const test = (ctx) => {
    ctx.deleteMessage(ctx.message.message_id, ctx.message.chat)
    ctx.replyWithPoll('Лучшая книга', ['Превращение', 'Процесс', 'Замок'], { 
        is_anonymous: true, allows_multiple_answers: true 
    })
}

const sayname = (ctx) => {
    ctx.deleteMessage(ctx.message.message_id, ctx.message.chat)
    ctx.reply('Дурень')
}

module.exports = (bot) => {
    bot.newCommand({ command: 'create_poll', description: "Создать опрос" },  test)
    bot.newCommand({ command: 'sayname', description: "Выводит ваше имя" },  sayname)
}