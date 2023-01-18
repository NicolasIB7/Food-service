const {Diet} =require ("../db");

const cargaDietas= async ()=>{
    const dietas=[
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Whole30",
    ];

    dietas.forEach(
        async (elemento)=>
        await Diet.findOrCreate({
            where:{name:elemento},
        })
    )
}

module.exports={cargaDietas}