import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../redux/actions";
import style from "./SearchBar.module.css";



export const SearchBar=()=>{

    const dispatch=useDispatch();
    
    const[searchInput, setSearchInput]=useState("");

    const changeHandler=(evento)=>{
        setSearchInput(evento.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(getRecipeByName(searchInput));
        setSearchInput("");
    }

    return(
        <div >
            <form className={style.search}>
                <input type="search" onChange={changeHandler} value={searchInput}></input>
                <button type="submit" onClick={submitHandler}>Buscar</button>
            </form>

        </div>
    )

}