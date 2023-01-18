const {dietas}=require("../controllers/dietController")
const { Diet } = require("../db.js");


const dietsHandler=async (req,res)=>{
    try {
        dietas.forEach((e)=>{
            Diet.findOrCreate({
                where:{name:e.name},
            })
        });

        const allTheTypes=await Diet.findAll();
        res.status(200).send(allTheTypes.map((e)=>e.name))
    } catch (error) {
        res.status(400).json({error:error.message})
    }


}


module.exports={dietsHandler}













module.exports={dietsHandler}