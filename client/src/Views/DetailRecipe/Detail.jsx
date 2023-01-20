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
                <h2>{details.steps}</h2>
            </div>
            <div>
                <h3>{details.dishTypes}</h3>
            </div>
            <div>
                <h1>{details.diets}</h1>
            </div>
            <div>
                <h1>{details.healthScore}</h1>
            </div>
            <image src={details.image}></image>
        
 
    </div>
    )
}

export default Detail;


//DESMONTAR EL COMPONENTE 