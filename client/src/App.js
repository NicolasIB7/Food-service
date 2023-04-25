import { Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Detail, Form, Home, Landing } from "./Views";
import { About } from "./Views/About/About";
import axios from "axios";
import Favorites from "./Views/Favorites/Favorites";
axios.defaults.baseURL = "http://localhost:3001/";
// 'http://localhost:3001/  https://pi-foods-production-e8a6.up.railway.app/


function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== "/" && <NavBar />}

      <Route path='/create'>
        <Form />
      </Route>
      <Route exact path='/home/:id'>
        <Detail />
      </Route>

      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/'>
        <Landing />
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/favorites'>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
