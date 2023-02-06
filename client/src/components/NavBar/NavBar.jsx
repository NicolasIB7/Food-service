import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import style from "./NavBar.module.css";


const NavBar= ({onSearch})=>{
    const location=useLocation();
    const [currentRoute,setCurrentRoute]=useState(location.pathname)
    return(
        <div className={style.maincontainer}>
            <div className={style.imagen}>
             <Link to="/home"  >
                <img src="https://cdn-icons-png.flaticon.com/512/6505/6505958.png" alt="Imagen" className={style.logo}/>
             </Link>
             </div>
             {currentRoute!=="/create" &&
             <SearchBar onSearch={onSearch}/>}
            
           
            <Link to="/create" className={style.links} >Create your recipe</Link>
            <Link to="/about" className={style.links}>About</Link>
        </div>
    )
}

export default NavBar;

