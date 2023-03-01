const sayname = (ctx) => {
    ctx.reply('Дурень')
}

module.exports = (bot) => {
    bot.newCommand({ command: 'sayname', description: "Выводит ваше имя" }, true, sayname)
}