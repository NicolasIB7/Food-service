import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipes, getDiets, getRecipes, orderRecipes } from "../../redux/actions";
import Loading from "../../Views/Loading/loading";
import Paginate from "../../Views/Pagination/Paginate";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer =()=>{

    const dispatch=useDispatch();
    const recipes=useSelector(state=>state.recipes) //ESTO ME TRAE EL ARRAY DE RECETAS DE MI STORE, está atento ante algun cambio que suceaa en mi store
    const diet=useSelector(state=>state.diets)
    const [isLoading,setisLoading]=useState(true);
    //paginado

    const [currentPage,setCurrentPage]=useState(1) // creamos un estado local para la pagina actual, lo seteamos en 1 porque es nuestra primera pagina
    const [recipesPerPage,setRecipesPerPage]=useState(9) //le digo cuantas recetas quiero yo por pagina y lo seteo en ese numero
    const indexOfLastRecipe=currentPage*recipesPerPage;
    const indexOfFirstRecipe=indexOfLastRecipe-recipesPerPage;
    const currentRecipes=recipes.slice(indexOfFirstRecipe,indexOfLastRecipe) //agarro un array y lo parto dependiendo lo que yo le pase como parametro, entonces esto me devolverá un arreglo donde me devuelva desde el 0 hasta el 9 y me renderiza solo esas recetas
    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }





    const handlerClick=(e)=>{
        const {name,value}=e.target;

        switch(name){
            case "ORDER":
                return dispatch(orderRecipes(value)) 
                
            // case "FILTER":
            //     return dispatch(filterRecipes(value))   
        }
    }



    const handlerFilter=(e)=>{
        dispatch(filterRecipes(e.target.value))
    }

    const handleClick=(e)=>{
        e.preventDefault();
        dispatch(getRecipes())
    }


    if(currentRecipes.length>0 && isLoading){
        setisLoading(false)
    }


    return(
<div>
        <button onClick={e=>{handleClick(e)}}>Carga todos los personajes</button>

    
        <div>
            <select name="ORDER" onChange={e=>handlerClick(e)}>
                <option value="default">DEFAULT</option>
                <option value= "ascendente">Z-A</option>
                <option value="descendente">A-Z</option>
                <option value="health+">HEALTH ++</option>
                <option value="health-">HEALTH --</option>
            </select>

            <select name="FILTER" onChange={e=>handlerFilter(e)}>
                <option value='All'>Todas las dietas</option>
                <option value='gluten free'>Gluten Free</option>
                <option value='dairy free'>Dairy Free</option>
                <option value='lacto ovo vegetarian'>Lacto Ovo Vegetarian</option>
                <option value='vegan'>Vegan</option>
                <option value='paleolithic'>Paleolithic</option>
                <option value='primal'>Primal</option>
                <option value='whole 30'>Whole 30</option>
                <option value='pescatarian'>Pescatarian</option>
                <option value='fodmap fiendly'>Fodmap Friendly</option>
                <option value='vegetarian'>Vegetarian</option> 
            </select>
        </div>

        
        
        

        <div className={style.container}>
            {currentRecipes.length>0 && !isLoading ? (

            currentRecipes.map(recipe=>{
                return <Card
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                     diets={recipe.diets?.map((r)=>{return(<p>{r}</p>)}) || recipe.Diets.map(e=>e.name)}
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
            })
            ): !currentRecipes.length>0 && isLoading ? (
                <Loading/>
            ):(<div>NOT FOUND</div>
            )}

        </div>
        <Paginate
        recipesPerPage={recipesPerPage}
        recipes={recipes.length}
        paginado={paginado}/>
    </div>

       
    )
}

export default CardsContainer;

//RENDERIZARÁ LAS CARTAS, OBTENDRÁ UN ARRAY DE RECERTAS Y POR CADA RECERTA RENDERIZARÁ UNA CARD DE CADA RECETA.


