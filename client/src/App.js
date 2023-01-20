import { Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Detail,Form,Home,Landing} from "./Views"
import { About } from './Views/About/About';

function App() {

  const location=useLocation();
  return (
    <div className="App">

      {location.pathname!=="/" && <NavBar/>}

      <Route path="/create">
        <Form/>
      </Route>
      <Route path="/detail">
        <Detail/>
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <Route exact path="/">
        <Landing/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>
      
    </div>
  );
}

export default App;
