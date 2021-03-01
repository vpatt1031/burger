//Definitions and Dependencies 
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller')

const PORT = process.env.PORT || 8080;

//Initializing express and assigining that the the app variable
const app = express();

//Middleware section, (basically everything with app.something)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes)

//Listening, ergo my server is going live
app.listen(PORT, () => {
    console.log("We are alive!")
})