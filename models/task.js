const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create A Schema 

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        default: 'Personal'
    },
    date:{
        type: String,
        // required: true
        // TODO : Setting Up a defualt Value
        default: Date.now().toString()
    }

})

// Create the model
const taskModel = mongoose.model('Task', taskSchema);
// Export the Model
module.exports = taskModel;