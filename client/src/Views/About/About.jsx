import React from "react";
import style from "./About.module.css";

export const About = () => {
  return (
    <div>
      <div className={style.div}>
        <h1 className={style.titulo}>HENRY FOODS</h1>
        <h5 className={style.titulo1}>
          Welcome to Henry Foods, in this site you will find different cards
          with different types of recipes, where you can choose one and enter
          into the creation site with enough details for its preparation, as
          well as another space to create YOUR OWN RECIPE, enjoy it!
        </h5>
        <h3 className={style.about}>
          <u>About the project:</u>{" "}
        </h3>
        <h5 className={style.titulo1}>
          This web page was developed as an individual project for "Soy Henry",
          using differents stacks from starting the server to displaying data on
          the screen, with a good user experience.
        </h5>
      </div>
      <div className={style.datos}>
        <h6 className={style.datos2}>Developed by: Nicolas Bouvet</h6>
        <h6 className={style.datos2}>GitHub: /NicolasIB7</h6>
        <h6 className={style.datos2}>Gmail: nicobouvet7@gmail.com</h6>
      </div>
    </div>
  );
};
