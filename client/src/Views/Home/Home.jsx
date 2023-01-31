import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getRecipes } from "../../redux/actions";
import CardsContainer from "../../components/CardContainer/CardsContainer.jsx";




//CUANDO EL COMPONENTE SE MONTA, AHI SE HARÁ EL DISPATCH DE LA ACTION, para montarlo lo haremos con useEffect y para hacer dispatch useDispatch
const Home= ()=>{

    const dispatch=useDispatch();
    //const [isLoading,setisLoading]=useState(true);
 
    useEffect(() => {
        // setisLoading(true);
         dispatch(getRecipes())
     }, [dispatch])
     //el array de dependencias lo usamos para poner variables y si una de ellas cambia, el hook lo deteccta y ejecuta nuevamente el dispatch
     

    
    return(
    <>
        <CardsContainer/>
    </>
    )
}

export default Home;