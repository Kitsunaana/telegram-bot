const test = (ctx) => ctx.replyWithPoll('Лучшая книга', ['Превращение', 'Процесс', 'Замок'], { is_anonymous: true, allows_multiple_answers: true })
const sayname = (ctx) => ctx.reply('Дурень')

module.exports = (bot) => {
    bot.newCommand('test', "Это тестовая команда",  test)
    bot.newCommand('sayname', "Выводит ваше имя",  sayname)
}