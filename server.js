// Grab the Dependency for the Server
const express = require('express');
const app = express();
const port = 8000;


// Setting the Routes
app.use('/', require('./routes/routes'));

// Start the server
app.listen(8000,(err) =>{
    if(err){
        console.log(`Error in running -->: ${err}`);
    }
    console.log(`YEAAHH! Server is Running on port${port}`);
})
