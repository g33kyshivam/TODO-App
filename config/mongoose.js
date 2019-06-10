// require the config files
const mongoose = require('mongoose');


// connect to the database 

mongoose.connect('mongodb://localhost/todo_list_db');


// Acquire the connection (to checkk wether it was succefull or not )


const db = mongoose.connection;
//error

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Succeefully Connected to the DB');
}); 