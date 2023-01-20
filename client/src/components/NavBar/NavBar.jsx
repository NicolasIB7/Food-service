import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import style from "./NavBar.module.css";

const NavBar= ({onSearch})=>{
    return(
        <div className={style.maincontainer}>
            <SearchBar onSearch={onSearch} />
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <Link to="/about">ABOUT</Link>
            
    
    
        </div>
    )
}

export default NavBar;