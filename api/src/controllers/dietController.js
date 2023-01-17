const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");
 const {API_KEY} =process.env;
 const { Diet } = require("../db.js");

const getDiet=async()=>{
    return await Diet.findAll();
} ;

module.exports={getDiet}
