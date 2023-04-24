import React from "react";
import style from "./Paginate.module.css";

const Paginate = ({
  recipesPerPage,
  recipes,
  paginado,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    //me va a redondear todos mis personajes sobre los personajes que tengo por pagina
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className={style.ul}>
        {!pageNumber.length <= 0 && (
          <button onClick={() => previousPage()} className={style.button}>
            🢀
          </button>
        )}

        {pageNumber &&
          pageNumber.map((number) => (
            <button
              key={number}
              onClick={() => paginado(number)}
              className={currentPage === number ? style.b : style.button}>
              {number}
            </button>
          ))}
        {!pageNumber.length <= 0 && (
          <button
            onClick={() => nextPage(pageNumber.length)}
            className={style.button}>
            🢂
          </button>
        )}
      </ul>
    </nav>

    // mapeo ese arreglo para que por cada uno me renderice ese numero
  );
};

export default Paginate;
