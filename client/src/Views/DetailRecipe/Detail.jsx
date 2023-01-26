import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getRecipeById } from "../../redux/actions";
import style from "./Detail.module.css";
import LoadingDetail from "./LoadingDetail";



export const Detail= (props)=>{
    const details=useSelector((state)=>state.detail);
    const [isLoading,setisLoading]=useState(true);

    const {id}= useParams();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getRecipeById(id)).then(()=>{
          setisLoading(false)
        })

        
        
    },[dispatch,id]);
    

 

    return(


        
    <div className={style.div}>

        { !isLoading?
<div>
            <div className={style.nombrediv}>
                <h2 className={style.nombre}>{details.name}</h2>
            </div>
            <div className={style.imagen}>
            <img src={details.image} className={style.imagen1}/>
            </div>
           
            <div className={style.dishtypes}>
                <h3 className={style.h3}>Dish Types:</h3>
                <p className={style.valores}>{details.dishTypes}</p>
            </div>

            <div className={style.tipos}>
            <h3 className={style.h3}>Diet Types:</h3>
                <p className={style.valores}>{details.diets?.map((r)=>{return(<ul className={style.dietasP}>{r}</ul>)})}</p>
            </div>

            <div className={style.healthscore}>
            <h3 className={style.h3}>Health Score: </h3>
                <p className={style.valores}>{details.healthScore}</p>
            </div>

            <div className={style.summary}>
                <h3 className={style.h31} >Summary:</h3>
            <p className={style.resumen} > {details.summary?.replace(/<[^>]*>/g, "")} </p>
            </div>

            <h3 className={style.h31}>Steps: </h3>
            <div className={style.steps}>
            
              {details.createdInDb ? (
                <p className={style.stepsdiv2}>{details.steps}</p>
              ) : (
                <div className={style.stepsdetailsdiv}>
                  {details.steps?.map((step, i) => {
                    return (
                      <div key={i}>
                        <p className={style.stepsdiv2}>
                          Step {++i}: {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
                  </div>
                 : <LoadingDetail></LoadingDetail> } 




            {/* <div className={style.steps}>
                <h3 className={style.h31}>Steps: </h3>
                <p>{details.steps} </p>
            </div> */}
            
        
 
    </div>
    
 
    )
    
}

export default Detail;


//DESMONTAR EL COMPONENTE 