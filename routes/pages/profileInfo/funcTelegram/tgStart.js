const Teacher = require('../../../../models/teacher')
const bot = require('./../../../../server')
module.exports = async function () {


    try {
        console.log('Введіть свій айді')
        const ListTeachers = await Teacher.findOne({_id: "6294e9adb865da11d3010ba1"});
        // await bot.sendMessage('861131555', 'Введіть свій айді')
        // bot.on('message', (msg) => {
        //     console.log(ListTeachers)
        //     const chatId = 861131555;
        //     console.log(chatId)
        //     // send a message to the chat acknowledging receipt of their message
        //     bot.sendMessage(chatId, 'Received your message');
        // })

    } catch (e) {
        console.log(
            e.message
        );
    }

};