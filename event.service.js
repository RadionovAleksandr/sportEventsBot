const TelegramApi = require('node-telegram-bot-api');
const fetch = require('node-fetch');

const TOKEN = '6522652762:AAFRnC-py5bZv17dxx0G_tcAvKmyBPoJ0f0';
const bot = new TelegramApi(TOKEN, { polling: true });

bot.request = async function (command, json) {
    return fetch(`https://api.telegram.org/bot${TOKEN}/${command}`, {
        method: 'post',
        body: JSON.stringify(json),
        headers: { 'Content-Type': 'application/json' }
    });
};

module.exports = {
    bot
}
