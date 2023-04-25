import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx/SearchBar";
import style from "./NavBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.imagen}>
          <Link to='/home'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/6505/6505958.png'
              alt='Imagen'
              className={style.logo}
            />
          </Link>
        </div>

        <SearchBar onSearch={onSearch} className={style.search} />

        <Link to='/create' className={style.links}>
          Create your recipe
        </Link>
        <Link to='/about' className={style.links}>
          About
        </Link>
        <Link to='/favorites' className={style.links}>
          Favorites
        </Link>
      </div>
      <div className={style.linksresponsive}>
        <PopupState
          variant='popover'
          popupId='demo-popup-menu'
          sx={{ backgroundColor: "black" }}>
          {(popupState) => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                sx={{ backgroundColor: "black" }}>
                <MenuIcon />
              </Button>
              <Menu {...bindMenu(popupState)}>
                <NavLink
                  to='/create'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>
                    Create your recipe
                  </MenuItem>
                </NavLink>
                <NavLink
                  to='/favorites'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Favorites</MenuItem>
                </NavLink>
                <NavLink
                  to='/about'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>About</MenuItem>
                </NavLink>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </>
  );
};

export default NavBar;
