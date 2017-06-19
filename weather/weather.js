const request = require('request');

let getWeather = (lat, long, callback) => {

    request({
        url: `https://api.darksky.net/forecast/73f2919a085ae278c5da3f5f34114b36/${lat},${long}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200){
    
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }else {
            callback('Unable to fetch weather')
        };
    });

}

module.exports = {
    getWeather
}
