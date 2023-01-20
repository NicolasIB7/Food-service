import axios from "axios";

export const GET_RECIPES="GET_RECIPES";
// export const GET_RECIPE="GET_RECIPE";
export const GET_RECIPE_BY_NAME="GET_RECIPE_BY_NAME";
export const POST_RECIPE="POST_RECIPE";
export const GET_BY_ID="GET_BY_ID";

export const getRecipes=()=>{
    return async function(dispatch){
        const apiData=await axios.get('http://localhost:3001/recipes')
        const recipes=apiData.data;

        dispatch({type:GET_RECIPES,payload:recipes}) //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
    }
    
}



export const getRecipeByName=(name)=>{
    return async function(dispatch){
        const apiData=await axios.get(`http://localhost:3001/recipes?name=${name}`)
        const recipe=apiData.data;

        dispatch({type:GET_RECIPE_BY_NAME,payload:recipe}) //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
    }
    
}

export const postRecipe=(id)=>{
    return async function(dispatch){
        const apiData=await axios.post('http://localhost:3001/recipes',id)
        const post=apiData.data;

        dispatch({type:POST_RECIPE,payload:post}) //despacha la action, no importo el hook porque acá no interesa, estamos en redux, el archivo que va a usar esta funcion sí tednrá que importar useDispatch
    }
    
}

export const getRecipeById=(id)=>{
    return async function(dispatch){
        const apiData=await axios.get(`http://localhost:3001/recipes/${id}`)
        const getId=apiData.data;

        dispatch({type:GET_BY_ID,payload:getId})
    }
}

 


// export const filter=()=>{
//     dispatch({type:filter})
// }    




//AQUI TAMBIEN SE PONDRAN LOS FILTROS, VER APP RICK Y MORTY