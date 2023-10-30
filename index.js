const { eventRoute, eventView } = require('./events')
const { bot } = require('./event.service')
const { buttons } = require('./utils')

const gameButtons = [
    [{ text: `(8/8) Трен-ка(B/C) 
      01.11 20:00 - Чернова`,
      callback_data: 'Тренировка 01.11 20:00'
    }],
    [{ text: `(4/8) Трен-ка(C/D)
      02.11 20:00 - Чернова`,
      callback_data: 'Тренировка 02.11 20:00'
    }],
    [{ text: `(8/8) Игры(B/C)
      03.11 20:00 - Чернова`,
      callback_data: 'Тренировка 03.11 20:00'
    }],
    [{ text: `(4/8) Игры(C/D) 
      04.11 20:00 - Чернова`,
      callback_data: 'Тренировка 04.11 20:00'
    }],
];

const eventOptions = { reply_markup: JSON.stringify({
  inline_keyboard: [
      [{ text: 'Записаться в резерв', callback_data: 'ок' }],
      [{ text: 'Назад', callback_data: 'сancel' }],
  ]
})};

bot.request('setMyCommands', {
    commands: [
        { command: '/games', description: 'Игры' },
        { command: '/my_games', description: 'Мои игры' },
        eventRoute,
    ]
}).then()

bot.on('message', async resp => {
    const text = resp.text;
    const chatId = resp.chat.id;

    if (text === '/start') {
        console.log('start bot', resp);
        await bot.sendMessage(chatId, `Добро пожаловать ${resp.from.first_name} ${resp.from.last_name}`)
        await bot.sendMessage(chatId, `(8/8) Трен-ка(B/C) 01.11 20:00 - Чернова`,
            buttons([{
                text: `Перейти`,
                callback_data: 'Тренировка 01.11 20:00'
            }])
        );
        await bot.sendMessage(chatId, `(4/8) Трен-ка(С/D) 02.11 20:00 - Чернова`,
            buttons([{
                text: `Перейти`,
                callback_data: 'Тренировка 02.11 20:00'
            }])
        );
        await bot.sendMessage(chatId, `(8/8) Игры(B/C) 03.11 20:00 - Чернова`,
            buttons([{
                text: `Перейти`,
                callback_data: 'Тренировка 03.11 20:00'
            }])
        );
        await bot.sendMessage(chatId, `(4/8) Игры(C/D) 04.11 20:00 - Чернова`,
            buttons([{
                text: `Перейти`,
                callback_data: 'Тренировка 02.11 20:00'
            }])
        );
        return
    }
    if (text === '/my_games') {
        return await bot.sendMessage(chatId, 'Мои игры', buttons(gameButtons))
    }

    // if (text === '/games') {
    //     return await bot.sendMessage(chatId, 'Доступные игры', buttons(gameButtons))
    // }

    if (text === '/event') {
        return await bot.sendMessage(chatId, eventView(resp), eventOptions)
    }

    return await bot.sendMessage(chatId, 'Не понял команду, попробуй еще раз')
});

bot.on('callback_query', async resp => {
    console.log('callback_query', resp)
    const chatId = resp.message.chat.id;

    return await bot.sendMessage(chatId, eventView(resp), eventOptions)
})
