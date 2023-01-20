import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";


export const SearchBar=({onSearch})=>{
    const[searchInput, setSearchInput]=useState("");

    const changeHandler=(evento)=>{
        setSearchInput(evento.target.value)
    }

    return(
        <div className={style.search}>
            <input type="search" onChange={changeHandler}></input>
            <button onClick={()=>onSearch(searchInput)}>Buscar</button>


        </div>
    )

}