const def = (ctx, next) => {
    if (ctx.update?.message?.new_chat_members) {
        ctx.reply(`Hello: \n${ ctx.update.message.new_chat_members.map(item => `${item.first_name} ${item?.last_name ? item.last_name : ''} (${item?.username})`).join(',') }`, { 
            reply_to_message_id: ctx.message.message_id }).then((message) => ctx.reply('Как дела'))
    } else { next() }
}

module.exports = (bot) => { bot.use(def) }