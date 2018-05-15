const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

module.exports ={
    async getAllRecipes(){
        const recipeCollection = await recipes();
        const receipeResult = await recipeCollection.find({}).project({_id:1,title:1}).toArray();
        return receipeResult;
    },
    async getRecipeById(Id){
        const recipeCollection = await recipes();
        const recipeResult =  await recipeCollection.findOne({_id:Id});
        if(recipeResult === null)
            throw `Could not find the recipe with id of ${id}`;
        return recipeResult;
    },
    async addRecipe(title, ingredients, steps) {
        const recipeCollection = await recipes();

        let newRecipe = {
            _id: uuid(),
            title: title,
            ingredients: ingredients,
            steps: steps
        };

        const recipeInserted = await recipeCollection.insertOne(newRecipe);
        if(recipeInserted === null)
            throw "Recipe is not inserted."
        const recipeResult =  await this.getRecipeById(recipeInserted.insertedId);
        return recipeResult;
    },
    async updateRecipe(Id,newRecipe){
        const recipeCollection = await recipes();

        const updatedRecipe = await recipeCollection.updateOne({_id:Id},{$set:newRecipe});
        if(updatedRecipe === null)
            throw "Recipe is not updated.";
        const recipeResult =  await this.getRecipeById(Id);
        return recipeResult;
    },
    async updateRecipeData(Id,newRecipe){
        const recipeCollection = await recipes();
        const updatedRecipe={};

        if(newRecipe.title){
            updatedRecipe.title=newRecipe.title;
        }
        if(newRecipe.ingredients){
            updatedRecipe.ingredients=newRecipe.ingredients;
        }
        if(newRecipe.steps){
            updatedRecipe.steps=newRecipe.steps;
        }
       
        await recipeCollection.updateOne({_id:Id}, {$set:updatedRecipe});
        return await this.getRecipeById(Id);
    },
    async deleteRecipe(Id){
        const recipeCollection = await recipes();   
        const deletionInfo = await recipeCollection.removeOne({ _id: Id });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }
    }
}