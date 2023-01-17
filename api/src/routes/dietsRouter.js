const { Router } = require('express');
const {dietsHandler}=require("../handlers/dietHandler")


const dietRouter=Router();


dietRouter.get("/",dietsHandler)

module.exports=dietRouter;

