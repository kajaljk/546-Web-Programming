
const mongoCollection = require('./mongoCollections');
const uuidv4 = require('uuid/v4');

const todoItems = mongoCollection.todoItems;

module.exports = {

    async createTask(title, description){
        //try{
            if(!title || typeof title != "string"){
                throw "You must provide string title for your task."
            }
            if(!description || typeof description != "string"){
                throw "You must provide string description for your task"
            }

            const taskCollection = await todoItems();

            let newToDo={
                _id : uuidv4(),
                title : title,
                description : description,
                completed: false,
                completedAt: null
            }

            const insertToDo= await taskCollection.insertOne(newToDo);
            if(insertToDo.insertedCount === 0){
                throw "Could not add task.";
            }

            const newId= insertToDo.insertedId;
            const newTask = await this.getTask(newId);

            return newTask;
        // }
        // catch(error){
        //     console.error(error);
        // }
    },
    async getAllTasks(){
        const taskCollection = await todoItems();
        const allTask = await  taskCollection.find({}).toArray();

        return allTask;
    },
    async getTask(id){
        // try
        // {
            if(!id || typeof id != "string"){
                throw "You must provide string ID to search for task.";
            }
            const taskCollection = await todoItems();

            const newTask = await taskCollection.findOne({_id : id});
            if(newTask === null){
                throw "Could not find task with this ID.";
            }

            return newTask;
        // }
        // catch(error){
        //     console.error(error);
        // }
    },
    async completeTask(taskId){
        if(!taskId || typeof taskId != "string"){
            throw "You must provide string ID to search for task.";
        }
        const taskCollection = await todoItems();

        const updateTask = {
            completed : true,
            completedAt : Date.now()
        };

        const updateInfo = await taskCollection.findOneAndUpdate({_id : taskId},{$set :updateTask});
        if(updateInfo.modifiedCount === 0 ){
            throw "Could not update task.";
        }

        return await this.getTask(taskId);
    },
    async removeTask(id){
        try
        {
            if(!id || typeof id != "string"){
                throw "You must provide string ID to search for task.";
            }
            const taskCollection = await todoItems();

            const removeTask = await  taskCollection.removeOne({_id : id});
            if(removeTask.deletedCount === 0 ){
                throw "Could not delete task.";
            }
        }
        catch(error){
            console.error(error);
        }
    }
}