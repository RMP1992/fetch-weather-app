const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

const getWeather = require('./lib/getWeather');
//use tells express to use this folder
//static tells express that the path is static
//path is used to join these 2 paths
//this html stuff is in the 'public' folder
//tells express that we want to store the html and css inside the public folder 
app.use(express.static(path.join(__dirname, 'public')));
// __dirname is the full path of this folder

app.engine('.hbs', hbs({
    defaultLayout: 'layout',// this makes it so that we don't have write out html layout multiple times
    extname: '.hbs' //adds .hbs to any file that would be .html
}));
app.set('view engine', '.hbs');

app.get('/', async(req, res) =>{ 
    //make this function asynchronous
    let data = await getWeather();
    let temp = data.main.temp
    let humidity = data.main.humidity
    let wind = data.wind.speed
    //wait for getWeather function to run and store it in the data variable
    
    console.log(temp)
    console.log(humidity)
    console.log(wind)
    
    res.render('index', {temp, humidity, wind});//in the curly brackets we haded an object which renders the data stored inside the variables
    //renders the  data on the index.hbs file inside the layout of layout.hbs, takes the content from index.hbs and drops it on the layout.hbs
    //this function is answering the question: what data do you want?
});

app.listen(3000, () =>{
    console.log('server listening on port 3000');
    console.log(__dirname)
});