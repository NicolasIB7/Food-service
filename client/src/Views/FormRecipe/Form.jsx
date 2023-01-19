import { useState } from "react";

const Form= ()=>{

    const [form,setForm]=useState({
        name:"",
        resumen:"",
        healthScore:"",
        steps:"",
    })

    const [errors, setErrors]=useState({
        name:"",
        resumen:"",
        healthScore:"",
        steps:"",
    })


    const validate=(form)=>{
        if("EXPRESION REGULAR".test(form.name)){
            setErrors({...errors,name:""})
        }else{
            setErrors({...errors,name:"Hay un error en el nombre"})//TENER EN CUENTA CUANDO YO DEJO EN BLANCO QUE DESAPAREZCA EL MENSAJE DE ERROR
        }
    }

    const changeHandler=(event)=>{
        const property=event.target.name;
        const value=event.target.value;

        validate({...form,[property]:value}); //le doy lo mismo que set form para que no haya delay al momento de validar mi input
        setForm({...form,[property]:value})
        
    }
    return(
        <form>
            <div>
                <label>Nombre:</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Resumen del plato:</label>
                <input type="text" value={form.resumen} onChange={changeHandler} name="resumen"></input>
            </div>

            <div>
                <label>Nivel de comida saludable:</label>
                <input value={form.healthScore} onChange={changeHandler} name="healthScore"></input>
            </div>

            <div>
                <label>Paso a paso:</label>
                <input value={form.steps} onChange={changeHandler} name="steps"></input>
            </div>

            <div>
                <label>Submit</label>
                <input></input>
            </div>



        </form>
    )
}

export default Form;