const colors = require('colors');
const fs = require('fs');

let SETTINGS = JSON.parse(fs.readFileSync('settings.json').toString());

class Logger{
    static Message(title, text, ip){
        if(SETTINGS.Logger) console.log(this.getDateNow(ip) + " " + title + " " + text);
    }

    static Warn(title, text, ip){
        if(SETTINGS.Logger) console.log(this.getDateNow(ip) +  " " + title + " " + ("[ WARN ] ").yellow  + text);
    }

    static Error(title, text, ip){
        console.log(this.getDateNow(ip) + " " + title + " " + ("[ ERROR ] ").red + (text).toString().red);
    }

    static getDateNow(ip){
        let date = new Date();
        return ( (ip) ? ip.toString().yellow + "\t" : "" ) + ( date.toDateString() + " | " + date.toLocaleTimeString()).magenta;
    }


    // red | green | yellow | blue | magenta | cyan | gray
    static Mode = {
        SERVER: "[ Server ]".green,
        REGISTER: "[ Register ]".cyan,
        PROFILE: "[ Profile ]".blue
    }
}

module.exports = Logger;