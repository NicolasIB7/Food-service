 const{
     searchRecipeByName,
     getAllRecipes,
     getRecipeById,
     createRecipe,

}=require("../controllers/recipesController");

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
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
 };

 const createRecipesHandler=async (req,res)=>{
     const {name,summary,healthScore}=req.body;

try {
    const newRecipe= await createRecipe(name,summary,healthScore);
    res.status(201).json("Creado exitosamente");
} catch (error) {
    res.status(400).json({error:error.message})
}}








// //TRATO DE QUE LOS HANDLERS NO INTERACTUEN CON LA BASE DE DATOS NI CON LA API, POR ESO ACÁ LO MODULARIZO CON LOS CONTROLADORES.


 module.exports={
     getRecipesHandler,
     getRecipeHandler,
     createRecipesHandler,
 }










 

