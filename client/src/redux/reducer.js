import { GET_BY_ID, GET_RECIPES, GET_RECIPE_BY_NAME,GET_DIETS,ORDER,FILTER } from "./actions";


const initialState={
    recipes:[],
    detail:[],
    diets:[],
    order:[],
    copia:[],
}


const rootReducer=(state=initialState,action)=>{
//retorna un estado NUEVO con alguna modificacion que hagamos, pisa el estado anterior
switch(action.type){
    case GET_RECIPES:
        return {...state,recipes:action.payload,copia:action.payload}
        
    case GET_RECIPE_BY_NAME:
        return {...state,recipes:action.payload}  

    case GET_BY_ID:
        return {...state,detail:action.payload}    
    case GET_DIETS:
        return {...state,diets:action.payload} 
        
    case ORDER:
        const orderCopy=[...state.recipes];
        const order=orderCopy.sort((a,b)=>{
            if(action.payload==="ascendente" && a.name<b.name){
                return 1;
            }else if(action.payload==="ascendente" && a.name>b.name){
                return -1
            }else if(action.payload==="descendente" && a.name>b.name){
                return 1;
            }else if(action.payload==="descendente" && a.name<b.name){
                return -1;
            }else if(action.payload==="health+" && a.healthScore<b.healthScore){return 1}
            else if(action.payload==="health+" && a.healthScore>b.healthScore){return -1}
            else if(action.payload==="health-" && a.healthScore>b.healthScore){return 1}
            else if(action.payload==="health-" && a.healthScore<b.healthScore){return -1}
            else if(action.payload==="default" && a.id>b.id){return 1}
            else if(action.payload==="default" && a.id<b.id){return -1}
            else{return 0};
        })
        
        return {...state,recipes:order}

        case FILTER:
            const recetas=state.copia;
            const filteredList =
            action.payload==="All"? recetas: recetas.filter(item => item.diets?.includes(action.payload) || item.Diets?.some(diet => diet.name === action.payload))
            return {...state,recipes:filteredList}
            
            
        
    default:
        return {...state};

    }

}

export default rootReducer;

