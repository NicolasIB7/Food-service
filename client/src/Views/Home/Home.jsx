import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";

//CUANDO EL COMPONENTE SE MONTA, AHI SE HARÁ EL DISPATCH DE LA ACTION, para montarlo lo haremos con useEffect y para hacer dispatch useDispatch
const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  //const [isLoading,setisLoading]=useState(true);

  useEffect(() => {
    // setisLoading(true);
    !recipes.length && dispatch(getRecipes());
  }, [dispatch]);
  //el array de dependencias lo usamos para poner variables y si una de ellas cambia, el hook lo deteccta y ejecuta nuevamente el dispatch

  return (
    <>
      <CardsContainer />
    </>
  );
};

export default Home;
