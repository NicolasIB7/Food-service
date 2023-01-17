const {getDiet}=require("../controllers/dietController")


const dietsHandler=async (req,res)=>{
    try {
        const result= await getDiet();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }


}


module.exports={dietsHandler}













module.exports={dietsHandler}