import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer =()=>{

    const recipes=useSelector(state=>state.recipes) //ESTO ME TRAE EL ARRAY DE RECETAS DE MI STORE, está atento ante algun cambio que suceaa en mi store

    return(
        <div className={style.container}>
            {recipes.map(recipe=>{
                return <Card
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    diets={recipe.diets}
                
                />
            })}

        </div>
    )
}

export default CardsContainer;

//RENDERIZARÁ LAS CARTAS, OBTENDRÁ UN ARRAY DE RECERTAS Y POR CADA RECERTA RENDERIZARÁ UNA CARD DE CADA RECETA.


