 const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");
 const {API_KEY} =process.env;
 const { Recipe, Diet } = require("../db.js");


 const cleanArray=(arr)=>{
     arr.map((elem)=>{
         return{
             id:elem.id,
             name:elem.title,
             summary:elem.summary,
             healthScore:elem.healthScore,
         }
     })
 }

 const createRecipe=async (name,summary,healthScore)=>{
    return await Recipe.create({name,summary,healthScore});
 };

const getRecipeById=async (id,fuente)=>{

    const recipe=
    fuente==="api"
?(await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
: await Recipe.findByPk(id)
 return recipe;
}

  const getAllRecipes=async()=>{

      const databaseRecipes=await Recipe.findAll();

     const allApiRecipes=(
          await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
      ).data;

      const apiRecipes=cleanArray(allApiRecipes);
     return [...databaseRecipes,...apiRecipes]
  }


 const searchRecipeByName= async (name) =>{
     const databaseRecipes= await Recipe.findAll({where:{name:name}});

     const apiRecipeRaw=(
         await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
     ).data;

     const apiRecipe= cleanArray(apiRecipeRaw);

     const filteredApi=apiRecipe.filter((recipe)=>recipe.name===name);

     return [...filteredApi,...databaseRecipes]
 }

 module.exports={getAllRecipes,searchRecipeByName,getRecipeById,createRecipe}