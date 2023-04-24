const { Router } = require("express");
const {
  getRecipesHandler,
  getRecipeHandler,
  createRecipesHandler,
  deleted,
  updated,
} = require("../handlers/recipesHandler");
const { validaciones } = require("../middleware/middleware");

const recipesRouter = Router();

recipesRouter.get("/:id", getRecipeHandler);
recipesRouter.post("/", createRecipesHandler);
recipesRouter.get("/", getRecipesHandler);
recipesRouter.delete("/:id", deleted);
recipesRouter.put("/:id/:attribute", updated);

module.exports = recipesRouter;
