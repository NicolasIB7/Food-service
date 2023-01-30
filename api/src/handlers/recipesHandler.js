 const{
     searchRecipeByName,
     getAllRecipes,
     getRecipeById,
}=require("../controllers/recipesController");

const { Recipe, Diet } = require("../db.js");
const {Op}=require("sequelize");

 const getRecipesHandler=async (req,res)=>{
     const {name}=req.query;

     const result = name ? await searchRecipeByName(name) : await getAllRecipes();

         return res.status(200).json(result)
        }  


 const getRecipeHandler=async (req,res)=>{
     const {id}=req.params;

     const fuente=isNaN(id)?"bdd" : "api";  //me fijo si el id es numerico para saber si pertenece a la API(numerico) o a la base de datos, es decir letras y numeros
        try {
        const recipe=await getRecipeById(id,fuente);
       res.status(200).send(recipe);
         } catch (error) {
        res.status(400).send({error:error.message})
    }
 };

 const createRecipesHandler=async (req,res)=>{
    const {name,summary,healthScore,steps,diets}=req.body;

try {
    
    const newRecipe= await Recipe.create({name,summary,healthScore,steps,diets});

    const findAllDiets= await Diet.findAll({

        where:{name:diets}
       });
    //    {
    //     [Op.in]:diets? diets:[]}
       await newRecipe.addDiet(findAllDiets);

    return res.status(200).json({msg:"Creada correctamente"})
} catch (error) {
    res.status(400).json({error:error.message})
}}



const deleted=async (req,res)=>{
    const {id}=req.params;

    try {
        await Recipe.destroy({
            where:{
                id:id
            }
        })
        res.status(200).send({msg:"The recipe has been deleted."})
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}








// //TRATO DE QUE LOS HANDLERS NO INTERACTUEN CON LA BASE DE DATOS NI CON LA API, POR ESO ACÁ LO MODULARIZO CON LOS CONTROLADORES.


 module.exports={
     getRecipesHandler,
     getRecipeHandler,
     createRecipesHandler,
     deleted
 }










 

