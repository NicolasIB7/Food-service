import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { removeFavorites } from "../../redux/actions";
import style from "./Favorites.module.css";

function Favorites(props) {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favorites);
  const recipes = useSelector((state) => state.recipes);

  const cardsFavoritas = recipes.filter((recipe) =>
    favoritos.includes(recipe.id)
  );

  const handleRemoveFavorites = (id) => {
    dispatch(removeFavorites(id));
  };

  return (
    <div className={style.container}>
      {cardsFavoritas.length > 0 ? (
        cardsFavoritas?.map((favorito) => (
          <Card
            key={favorito.id}
            id={favorito.id}
            name={favorito.name}
            image={
              favorito.createdInDb
                ? "https://pbs.twimg.com/profile_images/1247183406/recetas_de_cocina_400x400.jpg"
                : favorito.image
            }
            diets={
              favorito.diets?.map((r) => {
                return <ul>{r}</ul>;
              }) || favorito.Diets.map((e) => <ul>{e.name}</ul>)
            }
            createdInDb={favorito.createdInDb}
            onRemoveFavorites={handleRemoveFavorites}
            isFavorite={true}
          />
        ))
      ) : (
        <div className={style.noRecipe}>
          You have no recipes in your favorites.{" "}
        </div>
      )}
    </div>
  );
}

export default Favorites;
