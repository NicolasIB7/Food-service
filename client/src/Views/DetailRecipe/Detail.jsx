import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getRecipeById } from "../../redux/actions";


export const Detail= (props)=>{
    const details=useSelector((state)=>state.detail);

    const {id}= useParams();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getRecipeById(id))
    },[dispatch,id]);
    

    return(
        
    <div>
        <h2>holaaa</h2>
            <div>
                <h1>{details.name}</h1>
            </div>
            <div>
                <p>{details.steps}</p>
            </div>
            <div>
                <h1>{details.dishTypes}</h1>
            </div>
            <div>
                <h1>{details.diets}</h1>
            </div>
            <div>
                <h1>{details.healthScore}</h1>
            </div>
            <div>
            <img src={details.image}/>
            </div>
            <div>
            <p> {details.summary}</p>
            </div>
        
 
    </div>
    )
}

export default Detail;


//DESMONTAR EL COMPONENTE 