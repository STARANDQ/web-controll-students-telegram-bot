module.exports = async function(req, res) {
    const text = req.body.text || "None";
    const id = req.body.chatId;

    if(!text || !id) {
        res.send(false);
        return;
    }

    try{
        await global.bot.sendMessage(id, text);
        console.log("Send Message in TG: " + id + " | " + text);
        res.send(true);
    }catch (e){
        console.error(e.message);
        res.send(false);
    }

};