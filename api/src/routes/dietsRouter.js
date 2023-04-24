const { Router } = require("express");
const { dietsHandler, dietas } = require("../handlers/dietHandler");

const dietRouter = Router();

dietRouter.get("/", dietas);

module.exports = dietRouter;
