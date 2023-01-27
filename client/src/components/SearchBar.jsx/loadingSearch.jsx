import React from "react";
import style from "./loadingSearch.module.css"

const LoadingSearch=()=>{
    return(
        <div className={style.a}>
            <span className={style.loader}></span>
        </div>
    )
}

export default LoadingSearch;