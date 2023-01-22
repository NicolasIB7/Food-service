import { useState } from "react";
import axios from "axios";
import { postRecipe } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Form= ()=>{

    const dispatch=useDispatch();

    const [form,setForm]=useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
    })

    const [errors, setErrors]=useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
    })


    // const validate=(form)=>{
    //     if("EXPRESION REGULAR".test(form.name)){
    //         setErrors({...errors,name:""})
    //     }else{
    //         setErrors({...errors,name:"Hay un error en el nombre"})//TENER EN CUENTA CUANDO YO DEJO EN BLANCO QUE DESAPAREZCA EL MENSAJE DE ERROR
    //     }
    // }

    const changeHandler=(event)=>{
        const property=event.target.name;
        const value=event.target.value;

       // validate({...form,[property]:value}); //le doy lo mismo que set form para que no haya delay al momento de validar mi input
        setForm({...form,[property]:value})
        
    }

    const submitHandler=(event)=>{
         event.preventDefault();
         dispatch(postRecipe(form))
         .then(res=>alert("recera creada correctamente"))
         .catch(err=>alert("No se pudo crear la receta, error"))
    }
    
    return(
        <form onSubmit={submitHandler}> 
            <div>
                <label>Nombre:</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
                {/* {errors.name && <span>{errors.name}</span>} */}
            </div>

            <div>
                <label>Resumen del plato:</label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary"></input>
            </div>

            <div>
                <label>Nivel de comida saludable:</label>
                <input type="number" value={form.healthScore} onChange={changeHandler} name="healthScore"></input>
            </div>

            <div>
                <label>Paso a paso:</label>
                <input type="text" value={form.steps} onChange={changeHandler} name="steps"></input>
            </div>

            <button type="submit">SUBMIT</button>



        </form>
    )
}

export default Form;