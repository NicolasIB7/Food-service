import axios from "axios";

export const GET_RECIPES="GET_RECIPES";
// export const GET_RECIPE="GET_RECIPE";
export const GET_RECIPE_BY_NAME="GET_RECIPE_BY_NAME";
export const POST_RECIPE="POST_RECIPE";
export const GET_BY_ID="GET_BY_ID";
export const GET_DIETS="GET_DIETS";
export const ORDER="ORDER";
export const FILTER="FILTER;"

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

export const getDiets=()=>{
    return async function(dispatch){
        const apiData=await axios.get("http://localhost:3001/diets")
        const Dietas=apiData.data;

        dispatch({type:GET_DIETS,payload:Dietas})
    }
} 

export const orderRecipes=(id)=>{
    return {type:ORDER,payload:id}
}

export const filterRecipes=(payload)=>{
    console.log(payload)
    return {type:FILTER,payload}
}

    