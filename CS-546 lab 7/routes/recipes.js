const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;


router.get("/", async (req, res) => {
    try {
        const recipeList = await recipesData.getAllRecipes();
        res.json(recipeList);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipesData.getRecipeById(req.params.id);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found with that id." });
    }
});
  
router.post("/",async(req,res)=>{
    try{
        const recipeResult = req.body;
        if(!recipeResult){
            res.status(400).json({error : "You must provide data to create a recipe."});
            return;
        }
        if(!recipeResult.title){
            res.status(400).json({error : "You must provide title to create a recipe."});
            return;
        }
        if(!recipeResult.ingredients){
            res.status(400).json({error : "You must provide ingredients to create a recipe."});
            return;
        }
        if(!recipeResult.steps){
            res.status(400).json({error : "You must provide steps to create a recipe."});
            return;
        }

        const newRecipe = await recipesData.addRecipe(recipeResult.title,recipeResult.ingredients,recipeResult.steps);
        res.json(newRecipe);
    }
    catch(e){
        res.sendStatus(500);
    }
});

router.put('/:id',async(req,res)=>{
    try{
        await recipesData.getRecipeById(req.params.id);
    }
    catch(e){
        res.status(404).json({error : "There is no recipe with this id."});
    }
    try{
        const recipeResult = req.body;
        if(!recipeResult){
            res.status(400).json({error : "You must provide data to update a recipe."});
            return;
        }
        if(!recipeResult.title){
            res.status(400).json({error : "You must provide title to update a recipe."});
            return;
        }
        if(!recipeResult.ingredients){
            res.status(400).json({error : "You must provide ingredients to update a recipe."});
            return;
        }
        if(!recipeResult.steps){
            res.status(400).json({error : "You must provide steps to update a recipe."});
            return;
        }

        const newRecipe=await recipesData.updateRecipe(req.params.id,recipeResult);
        res.json(newRecipe);
    }
    catch(e){
        res.status(500).json({ error: e});
    }
});

router.patch('/:id',async(req,res)=>{
    try{
        await recipesData.getRecipeById(req.params.id);
    }
    catch(e){
        res.status(404).json({error : "There is no recipe with this id."});
    }
    try{
        const recipeResult=req.body;
        const newRecipe=await recipesData.updateRecipeData(req.params.id,recipeResult);
        res.json(newRecipe);
    }
    catch(e){
        res.status(500).json({ error: e});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        await recipesData.getRecipeById(req.params.id);
    }
    catch(e){
        res.status(404).json({error: " There is no recipe with this id."});
    }
    try{
        await recipesData.deleteRecipe(req.params.id);
        res.json();
    }
    catch(e){
        res.status(500).json({error:e});
    }
});

module.exports = router;
