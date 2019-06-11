const Task = require('../models/task');

module.exports = {
 // Show the Home Page
 showHome: (req,res) => {
    // Creating Dummy Data for testing purposes
    // const todoTask = [
    //     {description: "Task 1", category: "Personal", date: "2019/17/21"},
    //     {description: "Task 2", category: "Personal", date: "2019/17/21"},
    //     {description: "Task 3", category: "Work", date: "2019/17/21"}
    // ];
    // return res.render('home', {todo_list: todoTask});
    // Get All Task
    Task.find({}, (err, tasks) =>{
        if(err){
            console.log("There are no Events in the database");
        }
        return res.render('home', {todo_list: tasks});
    })   
 }
};