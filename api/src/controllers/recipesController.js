 const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");
 const {API_KEY} =process.env;
 const { Recipe, Diet } = require("../db.js");


//  const cleanArray= (arr)=>{
//       arr.map((elem)=>{
//          return{
//              id:elem.id,
//              name:elem.title,
//              summary:elem.summary,
//              healthScore:elem.healthScore,
//          }
//      })
//  }

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
          await axios.get("https://apimocha.com/n.s.recipes/allrecipes")
      )
      const API=allApiRecipes.data.results.map(el=>{
        return {

            id:el.id,
             name:el.title,
             summary:el.summary,
             healthScore:el.healthScore,
             steps:(el.analyzedInstructions[0]?.steps?.map(item=>item.step))
        }
      })
      

      //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      //const apiRecipes=cleanArray(API);
     return [...API,...databaseRecipes]
  }


 const searchRecipeByName= async (name) =>{
    // const databaseRecipes= await Recipe.findAll({where:{title:name}});
    
     const apiRecipeRaw=(
         await axios.get("https://apimocha.com/n.s.recipes/allrecipes")
     );
     //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
     //const apiRecipe= cleanArray(apiRecipeRaw.results);
    
     const API=apiRecipeRaw.data.results.map(el=>{
        return {

            id:el.id,
             name:el.title,
             summary:el.summary,
             healthScore:el.healthScore,
             steps:(el.analyzedInstructions[0]?.steps?.map(item=>item.step))
        }
      })

      const filteredApi=API.filter(recipe=>recipe.name.includes(name))



     return filteredApi
 }

 module.exports={getAllRecipes,searchRecipeByName,getRecipeById,createRecipe}

