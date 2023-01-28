const { Router } = require('express');
const {getRecipesHandler,getRecipeHandler,createRecipesHandler,deleted}=require("../handlers/recipesHandler")
const {validaciones}=require("../middleware/middleware");

 const recipesRouter=Router();

 

 recipesRouter.get("/:id", getRecipeHandler);
 recipesRouter.post("/",validaciones, createRecipesHandler);
recipesRouter.get("/", getRecipesHandler);
recipesRouter.delete("/:id", deleted);


module.exports=recipesRouter;