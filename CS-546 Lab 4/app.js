
const todo = require('./todo');
const connection = require('./mongoConnection');

const main = async() => {

    let addTask = todo.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

    let addNewTask = addTask.then((task) => {
       console.log(task);

       return todo.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");
    });

    let allTask = addNewTask.then(() => {
        return todo.getAllTasks().then((tasks) =>{
            console.log(tasks);
            return tasks;
        }).catch((error) =>{
            console.error(error);
        });
    });

    let removeTask = allTask.then((tasks) => {
        return todo.removeTask(tasks[0]._id).then()
        .catch((error) =>{
            console.error(error);
        });
    });

    let getRemainingTask = removeTask.then(()=>{
        return todo.getAllTasks().then((tasks) =>{
            console.log(tasks);
            return tasks;
        }).catch((error) =>{
            console.error(error);
        });
    });

    let setTaskComplete = (taskId) =>{
        return todo.completeTask(taskId).then((updatedTask) => {
            console.log(updatedTask);
        }).catch((error)=>{
            console.error(error);
        });
    }

    let completeTask = getRemainingTask.then((allTasks)=>{
        console.log(allTasks);

        for (let i = 0, len = allTasks.length; i < len; i++) {
            task = allTasks[i];
            setTaskComplete(task._id);
        }
    });

    let allNewTask = completeTask.then(() =>{
        return todo.getAllTasks().then((tasks) =>{
            console.log(tasks);
            return tasks;
        }).catch((error) =>{
            console.error(error);
        });
    });

    // todo.createTask(undefined,undefined);
    // todo.createTask({"bad":"input"}, {"not":"good"});
     todo.getTask(undefined);
    // todo.getTask({"foo":"bar"});
    // todo.removeTask(undefined);
    // todo.removeTask({"foo":"bar"});
}

main().catch(error => {
    console.log(error);
});