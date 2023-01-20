// import axios from "axios";

// export const GET_RECIPES="GET_RECIPES";
// export const GET_RECIPE="GET_RECIPE";

// export const getRecipes=()=>{
//     return async function(dispatch){
//         const apiData=await axios.get("URL")
//         const recipes=apiData.data;

//         dispatch({type:GET_RECIPES,payload:recipes}) //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
//     }
    
// }

// export const getRecipe=(id)=>{
//     return async function(dispatch){
//         const apiData=await axios.get("URL CON ID EL TEMPLATE STRING")
//         const recipe=apiData.data;

//         dispatch({type:GET_RECIPE,payload:recipe}) //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
//     }
// } 


// export const filter=()=>{
//     dispatch({type:filter})
// }    




//AQUI TAMBIEN SE PONDRAN LOS FILTROS, VER APP RICK Y MORTY