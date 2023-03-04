const createPoll = (ctx) => {
    ctx.replyWithPoll('Лучшая книга', ['Превращение', 'Процесс', 'Замок'], { 
        is_anonymous: true, allows_multiple_answers: true 
    })
}

module.exports = (bot) => {
    bot.newCommand({ command: 'create_poll', description: "Создать опрос" }, true, createPoll)
}