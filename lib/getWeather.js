const fetch = require('node-fetch');


require('dotenv').config()//https://www.npmjs.com/package/dotenv
const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`

async function getWeather(){
    let data = await fetch(url, {method: 'GET'});
        return await data.json();
}
    
getWeather()

module.exports = getWeather;