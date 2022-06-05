module.exports = async function(req, res) {
    const data = req.body;
    try{
        const infoProfile = await Profile.findOne({_id: data.id});
        const telegramId = infoProfile.TelegramID;if(data.text && data.text !== "") {
            await bot.sendMessage(telegramId, data.text);
        }
        if(data.image){
            let photoList = [];
            for (const image of data.image) {
                photoList.push( {
                    type:"photo",
                    media: image.serverName
                });
            }
            await bot.sendMediaGroup(telegramId, photoList);
        }
        if(data.video){
            let videoList = [];
            for (const video of data.video) {
                videoList.push( {
                    type:"video",
                    media: video.serverName
                });
            }
            await bot.sendMediaGroup(telegramId, videoList);
        }
        if(data.sticker){
            for (const sticker of data.sticker) {
                await bot.sendSticker(telegramId, sticker.serverName);
            }
        }
        if(data.audio){
            for (const audio of data.audio) {
                await bot.sendAudio(telegramId, audio.serverName);
            }
        }

        res.send({
            status:true
        });
    }catch (e){
        res.send({
            status: false,
            error: e.message
        });
    }

};