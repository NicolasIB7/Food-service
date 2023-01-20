import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardContainer/CardsContainer";
import { getRecipe, getRecipes } from "../../redux/actions";



//CUANDO EL COMPONENTE SE MONTA, AHI SE HARÁ EL DISPATCH DE LA ACTION, para montarlo lo haremos con useEffect y para hacer dispatch useDispatch
const Home= ()=>{

    // const dispatch=useDispatch();
        
    // useEffect(()=>{
    //     dispatch(getRecipes())
    // },[]) //el array de dependencias lo usamos para poner variables y si una de ellas cambia, el hook lo deteccta y ejecuta nuevamente el dispatch


    return(
    <>
        <h1>
            Esta es la vista de HOME

        </h1>

        <CardsContainer/>
    
    
    </>
    )
}

export default Home;