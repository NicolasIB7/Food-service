const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");
 const {API_KEY} =process.env;


const dietas=[
    {name:"Gluten Free"},
    {name:"Ketogenic"},
    {name:"Vegetarian"},
    {name:"Lacto-Vegetarian"},
    {name:"Ovo-Vegetarian"},
    {name:"Vegan"},
    {name:"Pescetarian"},
    {name:"Paleo"},
    {name:"Primal"},
    {name:"Whole30"},
];

module.exports={dietas}
