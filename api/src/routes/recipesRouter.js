const { Router } = require('express');
const {getRecipesHandler,getRecipeHandler,createRecipesHandler}=require("../handlers/recipesHandler")


 const recipesRouter=Router();


 recipesRouter.get("/:id", getRecipeHandler);
 recipesRouter.post("/", createRecipesHandler);
recipesRouter.get("/",getRecipesHandler)

module.exports=recipesRouter;