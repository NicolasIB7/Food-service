import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipes, getDiets, getRecipes, orderRecipes } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer =()=>{
    const dispatch=useDispatch();
    const recipes=useSelector(state=>state.recipes) //ESTO ME TRAE EL ARRAY DE RECETAS DE MI STORE, está atento ante algun cambio que suceaa en mi store
    const diet=useSelector(state=>state.diets)

   

    const handlerClick=(e)=>{
        const {name,value}=e.target;

        switch(name){
            case "ORDER":
                return dispatch(orderRecipes(value)) 
                
            case "FILTER":
                return dispatch(filterRecipes(value))   
        }
    }

    // const handlerFilter=(e)=>{
    //     e.preventDefault();
    //     dispatch(filterRecipes(e.target.value))
    // }
    return(
<div>
        <div>
            <select name="ORDER" onChange={handlerClick}>
                <option value="default">DEFAULT</option>
                <option value= "ascendente">Z-A</option>
                <option value="descendente">A-Z</option>
                <option value="health+">HEALTH ++</option>
                <option value="health-">HEALTH --</option>
            </select>
            {/* <select name="FILTER" onChange={handlerClick}>
                <option value="all">Filter by diet type</option>
                {diet.map(diets=>{
                    return <option value={diets.name}>{diets.name}</option>
                })}
   
            </select> */}
            <select name="FILTER" onChange={handlerClick}>
                <option value="all">ELEGIR DIETA</option>
                <option value="gluten free">Gluten Free</option>
                <option value="dairy free">Dairy Free</option>
                <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole 30</option>
                {/* <option value="pescatarian">Pescatarian</option>
                <option value="fodmap fiendly">Fodmap Friendly</option>
                <option value="vegetarian">Vegetarian</option> */}
            </select>
        </div>


        <div className={style.container}>
            {recipes.map(recipe=>{
                return <Card
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                     diets={recipe.diets || recipe.Diets.map(e=>e.name)}
                    healthScore={recipe.healthScore}
                    // diets={
                    //     recipe.createdInDb ?
                    //     recipe.Diets?.map((r)=>(
                            
                    //             <p>{r.name}</p>
                            
                    //     )):recipe.diets?.map((r)=>{
                    //         return(
                                
                    //                 <p>{r}</p>
                                
                    //         )
                    //     })
                    // }
                
                />
            })}

        </div>
    </div>

       
    )
}

export default CardsContainer;

//RENDERIZARÁ LAS CARTAS, OBTENDRÁ UN ARRAY DE RECERTAS Y POR CADA RECERTA RENDERIZARÁ UNA CARD DE CADA RECETA.


