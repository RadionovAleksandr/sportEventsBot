const buttons = (values) => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: [values]
        })
    };
}

module.exports = {
    buttons
}
