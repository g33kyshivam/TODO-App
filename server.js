// Grab the Dependency for the Server
const express = require('express');
const app = express();
const port = 8000;


// Setting the Routes
app.get('/', (req,res) =>{
    res.end('This Sever Is working');
})

// Start the server
app.listen(8000,(err) =>{
    if(err){
        console.log(`Error in running -->: ${err}`);
    }
    console.log(`YEAAHH! Server is Running on port${port}`);
})
