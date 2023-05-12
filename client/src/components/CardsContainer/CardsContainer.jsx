import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipe,
  filterRecipes,
  getRecipes,
  orderRecipes,
  getFavorites,
  removeFavorites,
} from "../../redux/actions";
import Loading from "../../Views/Loading/loading";
import Notfound from "../../Views/Not found/Notfound";
import Paginate from "../../Views/Pagination/Paginate";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes); //ESTO ME TRAE EL ARRAY DE RECETAS DE MI STORE, está atento ante algun cambio que suceaa en mi store
  const [isLoading, setisLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  //------------------------------------PAGINADO---------------------------------------------------------//
  const [currentPage, setCurrentPage] = useState(1); // creamos un estado local para la pagina actual, lo seteamos en 1 porque es nuestra primera pagina
  const [recipesPerPage] = useState(9); //le digo cuantas recetas quiero yo por pagina y lo seteo en ese numero
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe); //agarro un array y lo parto dependiendo lo que yo le pase como parametro, entonces esto me devolverá un arreglo donde me devuelva desde el 0 hasta el 9 y me renderiza solo esas recetas

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    currentPage - 1 && paginado(currentPage - 1);
  };
  const nextPage = (i) => {
    currentPage !== i && paginado(currentPage + 1);
  };
  //---------------------------------------------FILTROS Y ORDENAMIENTOS-------------------------------------------//
  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(orderRecipes(e.target.value));
    setCurrentPage(1);
  };

  const handlerFilter = (e) => {
    e.preventDefault();
    dispatch(filterRecipes(e.target.value));
    setCurrentPage(1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipes());
    setCurrentPage(1);
  };

  if (currentRecipes.length > 0 && isLoading) {
    setisLoading(false);
  }

  const handleFvorite = (id) => {
    dispatch(getFavorites(id));
    setFavorites([...favorites, id]);
  };

  const handleRemoveFavorites = (id) => {
    dispatch(removeFavorites(id));
    setFavorites(favorites.filter((i) => i !== id));
  };

  return (
    <div>
      <div className={style.divFiltrados}>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className={style.cargatodo}>
          All the recipes
        </button>
        {/* <div className={style.filtro}> */}

        <select
          name='ORDER'
          onChange={(e) => handlerClick(e)}
          className={style.ordenados}>
          <option value='default'>Order</option>
          <option value='ascendente'>Z-A</option>
          <option value='descendente'>A-Z</option>
          <option value='health+'>HEALTH ++</option>
          <option value='health-'>HEALTH --</option>
        </select>

        <select
          name='FILTER'
          onChange={(e) => handlerFilter(e)}
          className={style.filtrados}>
          <option value='All'>Diet´s filter</option>
          <option value='gluten free'>Gluten Free</option>
          <option value='dairy free'>Dairy Free</option>
          <option value='lacto ovo vegetarian'>Lacto Ovo Vegetarian</option>
          <option value='vegan'>Vegan</option>
          <option value='paleolithic'>Paleolithic</option>
          <option value='primal'>Primal</option>
          <option value='whole 30'>Whole 30</option>
          <option value='pescatarian'>Pescatarian</option>
          <option value='fodmap fiendly'>Fodmap Friendly</option>
          <option value='vegetarian'>Vegetarian</option>
        </select>
        {/* </div> */}
      </div>

      <div className={style.container}>
        {currentRecipes.length > 0 && !isLoading ? (
          currentRecipes?.map((recipe) => {
            return (
              <Card
                onAddFavorites={handleFvorite}
                onRemoveFavorites={handleRemoveFavorites}
                isFavorite={favorites?.includes(recipe.id)}
                id={recipe.id}
                name={recipe.name}
                image={
                  recipe.createdInDb
                    ? "https://pbs.twimg.com/profile_images/1247183406/recetas_de_cocina_400x400.jpg"
                    : recipe.image
                }
                diets={
                  recipe.diets?.map((r) => {
                    return <ul>{r}</ul>;
                  }) || recipe.Diets.map((e) => <ul>{e.name}</ul>)
                }
                createdInDb={recipe.createdInDb}
              />
            );
          })
        ) : !currentRecipes.length > 0 && isLoading ? (
          <Loading className={style.loading} />
        ) : (
          <Notfound></Notfound>
        )}
      </div>
<div className={style.paginado}>
      <Paginate
        recipesPerPage={recipesPerPage}
        recipes={recipes.length}
        paginado={paginado}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
        
      />
      </div>
    </div>
  );
};

export default CardsContainer;

//RENDERIZARÁ LAS CARTAS, OBTENDRÁ UN ARRAY DE RECERTAS Y POR CADA RECERTA RENDERIZARÁ UNA CARD DE CADA RECETA.
