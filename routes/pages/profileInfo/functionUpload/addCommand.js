module.exports = async function(req, res) {
    const data = req.body;
    console.log(data);
    global.TG_Commands.push({
        command:data.command,
        send: {
            id: '6294b4d9547e65d0e9a66e9d',
            text: 'sdfds',
            image: null,
            video: null,
            sticker: null,
            audio: null,
        }
    });
    return res.send({ status:true });

};