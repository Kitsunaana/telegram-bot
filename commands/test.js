const createPoll = (ctx) => {
    ctx.replyWithPoll('Лучшая книга', ['Превращение', 'Процесс', 'Замок'], { 
        is_anonymous: true, allows_multiple_answers: true 
    })
}

const sayname = (ctx) => {
    ctx.reply('Дурень')
}

module.exports = (bot) => {
    bot.newCommand({ command: 'create_poll', description: "Создать опрос" }, true, createPoll)
    bot.newCommand({ command: 'sayname', description: "Выводит ваше имя" }, true, sayname)
}