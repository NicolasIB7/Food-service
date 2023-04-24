import React from "react";
import style from "./Notfound.module.css";

const notFound = () => {
  return (
    <div className={style.a}>
      <p className={style.not}>Sorry, the recipe does not exists</p>
    </div>
  );
};

export default notFound;
