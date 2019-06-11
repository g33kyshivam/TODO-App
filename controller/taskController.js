const Task = require('../models/task');

module.exports = {
    createTask : (req,res) =>{
    console.log(req.body);
        // This is not working, not sure why ?
        // create a new task
        // const task = new Task({
        //     description: req.body.description,
        //     category: req.body.work,
        //     date: req.body.calendar
        // })
        // // Saving the Event
        // task.save((err) => {
        //     if(err){
        //         console.log('Error in creating a Task'); 
        //         return;
        //     }

        //     return res.redirect('back');
        // })
        Task.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.calendar
        }, (err, newTask) => {
            if(err){console.log('Error in creating a task'); return;}
    
            console.log('*********', newTask);
            res.redirect('back');
    
    
        })


    },
    deleteTask : (req,res) =>{
    console.log(req.query)
    // Get the Id from the request 
    let id = req.query.id;

    // Find the Contact and Delete it 

    Task.findByIdAndDelete(id, (err) => {
        if(err){
            console.log("There was some error in deleting");
            return;
        }
        return res.redirect('back');
    });

    }
}