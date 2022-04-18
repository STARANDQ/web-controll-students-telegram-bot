const cron = require('node-cron');

let task = {};

const text = '0-59';

const {Telegraf, Markup, Scenes, session} = require('telegraf')

const bot = new Telegraf('2019192872:AAHAYPXof29I2Mf5uvh_YuZi6ZPvzzlvHZs')


bot.action('exit', async (ctx, next) => {
    await ctx.scene.enter('PIB')
})
bot.start(async (ctx) => {
    try {
        ctx.reply('asd')
        console.log(ctx)
    task.organization = cron.schedule(`${text} 30-59 11 * 1-6,9-12 Monday-sunday`, () => {
        ctx.reply(null);
        ctx.reply(text)
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });


    task.mon = cron.schedule('15 8 * 1-6,9-12 monday',  () => {
        bot.sendMessage(chatId, 'ПРОГРАМУВАННЯ ЛЕКЦІЯ:https://meet.google.com/apz-vckx-nqz');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })


    task.mon1 = cron.schedule('15 8 * 1-6,9-12 monday', () => {
        ctx.reply('ПРОГРАМУВАННЯ ЛЕКЦІЯ:https://meet.google.com/apz-vckx-nqz');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })
    task.mon2 = cron.schedule('45 9 * 1-6,9-12 monday', () => {
        ctx.reply('ВИЩА МАТЕМ ЛЕКЦІЯ https://meet.google.com/tod-voqx-trq aбо КОМП\'ЮТЕРНА АРИФМЕТИКА ЛЕКЦІЯ:  https://meet.google.com/xjd-cjpg-ukg');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })
    task.tue1 = cron.schedule('0 15 8 * 1-6,9-12 tuesday', () => {
        ctx.reply('ФІЗИКА: https://meet.google.com/lookup/g2zadkf4lw?authuser=0&hs=179');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })
    task.tue2 = cron.schedule('1-59 42 15 * 1-6,9-12 tuesday', () => {
        ctx.reply('ФІЗИКА: https://meet.google.com/lookup/g2zadkf4lw?authuser=0&hs=179');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })
    task.tue3 = cron.schedule('0 25 11 * 1-6,9-12 tuesday', () => {
        ctx.reply('ФІЗИКА (ЛР): https://meet.google.com/vyo-jzjg-roo');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    })
    task.wed1 = cron.schedule('0 15 8 * 1-6,9-12 Wednesday', () => {
        ctx.reply('КОМП\'ЮТЕРНА АРИФМЕТИКА ПР: https://meet.google.com/awa-xzmo-ssh ');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.wed2 = cron.schedule('0 45 9 * 1-6,9-12 Wednesday', () => {
        ctx.reply('ВИЩА МАТЕМ ПР: https://meet.google.com/ark-ezfh-bvf');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.wed3 = cron.schedule('0 25 11 * 1-6,9-12 Wednesday', () => {
        ctx.reply('АНГЛІЙСЬКА: https://meet.google.com/oiq-qwpz-ukj');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.wed4 = cron.schedule('0 55 12 * 1-6,9-12 Wednesday', () => {
        ctx.reply('ПРОГРАМУВАННЯ ЛР (1): https://meet.google.com/zcd-asyr-nvq  (2): https://meet.google.com/ayw-vuwh-wnf  ');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.thu1 = cron.schedule('0 15 8 * 1-6,9-12 Thursday', () => {
        ctx.reply('Зараз ще можна відпочити 90 хвилинок)))');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.thu2 = cron.schedule('0 45 9 * 1-6,9-12 Thursday', () => {
        ctx.reply('ПРОГРАМУВАННЯ ЛР (1): https://meet.google.com/zcd-asyr-nvq  (2): https://meet.google.com/ayw-vuwh-wnf');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.thu3 = cron.schedule('0 25 11 * 1-6,9-12 Thursday', () => {
        ctx.reply('ВИЩА МАТЕМ ПР: https://meet.google.com/ark-ezfh-bvf');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.thu4 = cron.schedule('0 55 12 * 1-6,9-12 Thursday', () => {
        ctx.reply('ДИСКРЕТНА МАТЕМ ПР: https://meet.google.com/wer-fgep-bvc');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.fri1 = cron.schedule('0 15 8 * 1-6,9-12 friday', () => {
        ctx.reply('ДИСКРЕТНА МАТЕМ ЛЕКЦІЇ: https://meet.google.com/ngi-yrpo-dpt');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.fri2 = cron.schedule('0 45 9 * 1-6,9-12 friday', () => {
        ctx.reply('ВИЩА МАТЕМ ЛЕКЦІЯ: https://meet.google.com/tod-voqx-trq');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });
    task.fri3 = cron.schedule('0 25 11 * 1-6,9-12 friday', () => {
        ctx.reply('ПРОГРАМУВАННЯ ЛЕКЦІЯ: https://meet.google.com/apz-vckx-nqz');
    }, {
        scheduled: true,
        timezone: "Europe/Kiev"
    });

    const chatId = ctx.chat.id;
    // console.log(msg)


    ctx.reply(`привіт ${ctx.chat.first_name} `);

    task.organization.start()

    task.mon1.start()
    task.mon2.start()

    task.thu1.start()
    task.thu2.start()
    task.thu3.start()

    task.wed1.start()
    task.wed2.start()
    task.wed3.start()
    task.wed4.start()

    task.thu1.start()
    task.thu2.start()
    task.thu3.start()
    task.thu4.start()

    task.fri1.start()
    task.fri2.start()
    task.fri3.start()


    } catch
        (e) {
        console.log(e)
    }
})
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command('/scene', async (ctx) => {
    // ctx.scene.enter('age')
})

bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

