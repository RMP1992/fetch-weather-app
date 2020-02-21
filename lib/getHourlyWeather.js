const fetch = require('node-fetch');


require('dotenv').config()//https://www.npmjs.com/package/dotenv



async function getWeather(location, countryCode){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&appid=${process.env.APPID}`
    let data = await fetch(url, {method: 'GET'});
        return await data.json();//the data is now being store and can be used
}
    


module.exports = getWeather;//exports the getWeather to the index.js
