//const {dietas}=require("../controllers/dietController")
const { Diet,Recipe } = require("../db.js");
const axios =require("axios")
 const {API_KEY} =process.env;

const dietsHandler=async (req,res)=>{
    try {
        const APIdietas=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const types=await APIdietas.data.results.map((t)=>t.diets);
        const diets=types.flat(1);
        const typesDiets=[...new Set(diets),"vegetarian"];
         typesDiets.forEach(async(d)=>{
            await Diet.findOrCreate({
                where:{name:d},
            })
         })
         const allDiets=await Diet.findAll();

        return allDiets;
    } catch (error) {
        console.log(error)
    }}

    const dietas=async (req,res)=>{
        try {
            const d=await Diet.findAll();
            res.status(200).json(d);
        } catch (e) {
            res.status(404).json({msg:"error"})
        }
    }



module.exports={dietsHandler,dietas}

