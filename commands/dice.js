const def = (ctx) => {
    ctx.deleteMessage(ctx.message.message_id, ctx.message.chat)
    ctx.replyWithDice()
}


module.exports = (bot) => {
    bot.newCommand({ command: 'dice', description: "Бросить кубик" },  def)
}