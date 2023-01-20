import { Link } from "react-router-dom";

const Landing= ()=>{
    return(
    <>
        <h1>
            Esta es la vista de LANDING

        </h1>


        <div>
            <Link to="/home">Pagina inicial</Link>
        </div>
    
    
    </>
    )
}

export default Landing;