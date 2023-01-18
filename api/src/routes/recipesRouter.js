const { Router } = require('express');
const {getRecipesHandler,getRecipeHandler,createRecipesHandler}=require("../handlers/recipesHandler")
const {validaciones}=require("../middleware/middleware");

 const recipesRouter=Router();

 

 recipesRouter.get("/:id", getRecipeHandler);
 recipesRouter.post("/",validaciones, createRecipesHandler);
recipesRouter.get("/", getRecipesHandler)

module.exports=recipesRouter;