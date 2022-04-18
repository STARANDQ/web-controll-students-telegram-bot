const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')

const {Telegraf, Markup, Scenes, session} = require('telegraf')

const bot = new Telegraf('2019192872:AAHAYPXof29I2Mf5uvh_YuZi6ZPvzzlvHZs')

const SceneGenerator = require('./Scenes')
const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://iterhim:igornazar5@cluster0.ieu9k.mongodb.net/PROJETIGOR?retryWrites=true&w=majority')


const CurScene = new SceneGenerator()

const pibScene = CurScene.GenPIBScene()
const numScene = CurScene.GenNumScene()
// const pibvScene = CurScene.GenPIBVScene()
// const numvScene = CurScene.GenNumvScene()
// const arrstud = CurScene.GenArrStudScene()
// const PIBk = CurScene.GenPIBKScene()
// const emK = CurScene.GenEmailKScene()
// const MPk = CurScene.GenPhoneKScene()
// const zakl = CurScene.GenzakladScene()
// const parK = CurScene.GenParKScene()

// const lessname = CurScene.GenLessNameScene()

const stage = new Scenes.Stage([
    pibScene,
    numScene,
    // pibvScene,
    // numvScene,
    // arrstud,
    // lessname,
    // PIBk,
    // emK,
    // MPk,
    // zakl,
    // parK,
]);
bot.use(stage.middleware())


let vykladach = {}


// викладач меню
bot.action('vykl', (ctx) => {
    return ctx.reply('<b>викладач меню</b>', {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback('подивитись список студентів', 'allstud')],//half
                [Markup.button.callback('подивитись список предметів', 'allsubjects')],//not
                [Markup.button.callback('вийти з профілю', 'exit')],//complete
            ])
    })
})

//студент меню
bot.action('student', (ctx) => {
    return ctx.reply('<b>студент меню</b>', {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback('перевірити заборгованість', 'borgi')],//
                [Markup.button.callback('подивитись список предметів', 'allsubjectsstud')],//наполовину
                [Markup.button.callback('вийти з профілю', 'exit')],//готово
            ])
    })
})
//викладач пункти меню
//1
bot.action('allstud', async (ctx) => {
    // masiv students
    await client.connect()
        console.log('всьо ок')
        const users = client.db().collection('students');
        const user = await users.findOne()
        ctx.reply(user)
})
//2
bot.action('allsubjects', async (ctx) => {
    // masiv subjects
    await client.connect()
    console.log('всьо ок')
    const users = client.db().collection('vykladachs');
    const user = await users.findOne()
    ctx.reply(user)
})
// student menu 1
bot.action('borgi', async (ctx, next) => {

    // masiv борги
    await client.connect()
    console.log('всьо ок')
    const users = client.db().collection('vykladachs');
    const user = await users.findOne()
    ctx.reply(user)
})
bot.action('allsubjectsstud', async (ctx, next) => {

    // masiv борги
    await client.connect()
    console.log('всьо ок')
    const users = client.db().collection('vykladachs');
    const user = await users.findOne()
    ctx.reply(user.lesson)
})


// bot.action('fullListVukladachiv', async (ctx, next) => {
//
//         await ctx.reply('масивчик викладачів, яких добавив куратор)')
//
//         await client.connect()
//         console.log('всьо ок')
//         const users = client.db().collection('vykladachs');
//
//         const user = await users.findOne()
//         console.log(user);
//
//         let a = JSON.stringify(user);
//         await ctx.reply(a)
// }, )
// bot.action('fullListstudents', async (ctx, next) => {
//
//         await ctx.reply('масивчик студентів, яких добавив куратор)')
//
//         await client.connect()
//         console.log('всьо ок')
//         const users = client.db().collection('students');
//
//         const user = await users.findOne()
//         console.log(user);
//
//         let a = JSON.stringify(user);
//         await ctx.reply(a)
// }, )


bot.use(session())
bot.use(stage.middleware())
bot.use(Telegraf.log())


// bot.action('addVukladacha', async (ctx, next) => {
//
//     await ctx.reply('ф-ця добавляння викладача)')
//     await ctx.scene.enter('PIBv')
//
// })
// bot.action('addstudenta', async (ctx, next) => {
//
//     await ctx.reply('ф-ця добавляння студента)')
//     await ctx.scene.enter('PIB')
//
// })
// bot.action('newKurator', async (ctx, next) => {
//
//     await ctx.reply('ф-ця добавляння студента)')
//     await ctx.scene.enter('PIBk')
//
// })
//
bot.command('start', async (ctx) => {
    await ctx.scene.enter('PIB')
})
//3
bot.action('exit', async (ctx, next) => {
    await ctx.scene.enter('PIB')
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

