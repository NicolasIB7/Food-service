 const axios =require("axios");
// const recipesRouter = require("../routes/recipesRouter");

 const { Recipe, Diet } = require("../db.js");
 const {Op}=require("sequelize")
 
 const {API_KEY} =process.env;


const modifyData=(el)=>{

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
}



  const getAllRecipes=async()=>{

    const allApiRecipes=(
        await axios.get("https://apimocha.com/n.s.recipes/allrecipes")
      )
     // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
     
    const API=allApiRecipes.data.results.map((el)=>modifyData(el))

      
    let databaseRecipes=await Recipe.findAll({
        include:[{
          model:Diet,
          //as:"diets",
          attributes:["name"],
          
           through:{
               attributes:[]
          }}]
          
      });
      
    return [...API,...databaseRecipes]
  }

  






  const getRecipeById=async (id,fuente)=>{

    if(fuente==="api"){
           const API=(await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`))
           //"https://apimocha.com/n.s.recipes/allrecipes"

           //USANDO URL DE TODAS LAS RECETAS:
          // const filterAPI=API.data.results.map((el)=>modifyData(el))

          // const filtradoId=filterAPI.find(recipe=>recipe.id.toString()===id);
          //USANDO URL DE ID
          const filtradoId=modifyData(API.data)
          
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

    
   

    const API=apiRecipeRaw.data.results.map((el)=>modifyData(el))

    const filteredApi=API.filter(recipe=>recipe.name.toLowerCase().includes(name.toLowerCase()))

     return [...filteredApi,...databaseRecipes]
 }

 module.exports={getAllRecipes,searchRecipeByName,getRecipeById}

