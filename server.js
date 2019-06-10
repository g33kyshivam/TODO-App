// Grab the Dependency for the Server
const express = require('express');
const app = express();
const port = 8000;

// Grabbing Exteranl Dependency Too
const expressLayouts = require('express-ejs-layouts');


//Confiure the application 
// 1. Where to look for assets folder 
app.use(express.static('./assets'))
// 2. Set ejs as out templating engines
app.set('view engine', 'ejs');
// 3. Setting up the defualt Directory Structure 
app.set('views', './views');
// 4. Using Express layouts
app.use(expressLayouts);



// Setting the Routes
app.use('/', require('./routes/routes'));

// Start the server
app.listen(8000,(err) =>{
    if(err){
        console.log(`Error in running -->: ${err}`);
    }
    console.log(`YEAAHH! Server is Running on port${port}`);
})
