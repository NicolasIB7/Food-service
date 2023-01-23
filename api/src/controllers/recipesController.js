 const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");
 //const {API_KEY} =process.env;
 const { Recipe, Diet } = require("../db.js");
 const {Op}=require("sequelize")
 const API_KEY="160bdeb439294829b87405f71564c879"


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

//  const createRecipe=async (name,summary,healthScore,steps,diets)=>{
//    const newRecipe= await Recipe.create({name,summary,healthScore,steps,diets});

  

//    return newRecipe;

//  };




  const getAllRecipes=async()=>{

      
    

     const allApiRecipes=(
          await axios.get("https://apimocha.com/n.s.recipes/allrecipes")
      )
      const API=allApiRecipes.data.results.map(el=>{
        return {

            id:el.id,
             name:el.title,
             summary:el.summary,
             healthScore:el.healthScore,
             steps:(el.analyzedInstructions[0]?.steps?.map(item=>item.step)),
             image:el.image,
             dishTypes:el.dishTypes?.map(dish=>dish),
             diets:el.diets.map(diet=>diet),
        }
      })

      
      let databaseRecipes=await Recipe.findAll({
        include:[{
          model:Diet,
          //as:"diets",
          attributes:["name"],
          
           through:{
               attributes:[]
          }}]
          
      });
      
      
      // databaseRecipes=databaseRecipes.map(recipe=>modify(recipe));

      //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      //const apiRecipes=cleanArray(API);
     return [...API,...databaseRecipes]
  }

  
  // const modify=(r)=>{
  //   r.Diets=r.Diets.map(diet=>diet.name)
  //   return r;
  // }





  const getRecipeById=async (id,fuente)=>{

    if(fuente==="api"){
           const API=(await axios.get("https://apimocha.com/n.s.recipes/allrecipes"))
           const filterAPI=API.data.results.map(el=>{
            return {
    
                id:el.id.toString(),
                 name:el.title,
                 summary:el.summary,
                 healthScore:el.healthScore,
                 steps:(el.analyzedInstructions[0]?.steps?.map(item=>item.step)),
                 dishTypes:el.dishTypes?.map(dish=>dish),
                 image:el.image,
                 diets:el.diets.map(diet=>diet),
            }
          })

          const filtradoId=filterAPI.find(recipe=>recipe.id===id);

          
          return filtradoId;
    }
 else{

 const bdd= await Recipe.findByPk(id, {
    include:{
        model:Diet,
        attributes:["name"],
        through:{attributes:[]}
    }
 })
  return bdd;
 }
}

 const searchRecipeByName= async (name) =>{
    const databaseRecipes= await Recipe.findAll({include:{
      model:Diet,
      
      attributes:["name"],
       through:{
           attributes:[]
      }},
        where:{name:
            {[Op.substring]:name.toLowerCase()
            }}});

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
          steps:(el.analyzedInstructions[0]?.steps?.map(item=>item.step)),
          image:el.image,
          dishTypes:el.dishTypes?.map(dish=>dish),
          diets:el.diets,
        }
      })

      const filteredApi=API.filter(recipe=>recipe.name.toLowerCase().includes(name.toLowerCase()))



     return [...filteredApi,...databaseRecipes]
 }

 module.exports={getAllRecipes,searchRecipeByName,getRecipeById}

