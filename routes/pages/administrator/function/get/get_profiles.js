module.exports = async function(req, res) {

    //Зчитати з бази даних

    //const data = await User.find(); -- Дістати все з бази даних ( повернеться масив )
    //const data = await User.find( {login:"qwerty123"} ); -- дістати всіх користувачів з бази даних в кого логін qwerty123 ( повернеться масив )
    //const data = await User.findOne( {login:"qwerty123"} ); -- дістати одного (першого) користувача з бази даних в кого логін qwerty123 ( повернеться об'єкт );


    const data = await User.find();

    return res.render('./list.ejs', {users: data});
};