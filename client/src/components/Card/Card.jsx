import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecipe, getRecipes } from "../../redux/actions";
import style from "./Card.module.css";

const Card = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = (event) => {
    event.preventDefault();
    dispatch(deleteRecipe(props.id))
      .then(alert("The recipe has been deleted succesfully"))
      .then(dispatch(getRecipes()))
      .catch((err) => console.log(err));
  };

  const handleFavoriteClick = () => {
    if (!props.isFavorite) {
      props.onAddFavorites(props.id);
    } else {
      props.onRemoveFavorites(props.id);
    }
  };

  return (
    <div className={style.card}>
      {props.isFavorite ? (
        <button onClick={handleFavoriteClick} className={style.fav}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavoriteClick} className={style.fav}>
          🤍
        </button>
      )}
      <Link to={`/home/${props.id}`} className={style.link}>
        <p className={style.nombres}>{props.name} </p>
      </Link>

      <img src={props.image} alt='imagen API' className={style.imagenes} />
      <p className={style.dietas}>{props.diets}</p>
      {props.createdInDb && (
        <button onClick={deleteHandler} className={style.delete}>
          X
        </button>
      )}
    </div>
  );
};

export default Card;

//ESTE COMPONENTE DEBERÁ MOSTRAR LA INFO DE CADA RECETA MAPEADA Y DARNOS UN LINK PARA IR A DETALLE DE LA RECETA EN CUESTION
