import React from "react";
import style from "./Paginate.module.css";

const Paginate=({recipesPerPage,recipes,paginado})=>{
    const pageNumber=[];

    for(let i=1;i<=Math.ceil(recipes/recipesPerPage);i++){//me va a redondear todos mis personajes sobre los personajes que tengo por pagina
        pageNumber.push(i)
    } 

    return(
        <nav>
            <ul className={style.ul}>
                {pageNumber && pageNumber.map((number)=>(
                    
                    <button onClick={()=>paginado(number)} className={style.button}>{number}</button> 
                    
                ))}
            </ul>


        </nav>

// mapeo ese arreglo para que por cada uno me renderice ese numero
    )


}

export default Paginate;