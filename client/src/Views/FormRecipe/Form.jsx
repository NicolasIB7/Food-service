import { useState } from "react";
import style from "./Form.module.css"
import { postRecipe,getDiets } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const validate=(form)=>{
    let errors={};
    if(form.name === ""){
        errors.name = "Name required!";   

    } else if(form.name.length < 3) {
        errors.name = 'Minimum 3 letters'

    } else if(!form.summary){
        errors.summary= "summary must be complete";

    } else if(form.summary.length < 20){
        errors.summary = 'Minimum 20 letters';

    }else if(form.healthScore < 0 || form.healthScore> 100 ){
        errors.healthScore = 'Maximum up to 100'

    }else if(!form.steps){
        errors.steps = "required field"
    }
    // }else if(input.type.length !== input.type.length){
    //     errors.type= "it has to be a different diet"
    // }
   
    return errors;
  }




const Form= ()=>{

    const dispatch=useDispatch();

    const diet=useSelector(state=>state.diets)

    const [form,setForm]=useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        diets:[],
    })

    const [errors, setErrors]=useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
    })


    

    const changeHandler=(event)=>{
        const property=event.target.name;
        const value=event.target.value;

       setErrors(validate({...form,[property]:value})); //le doy lo mismo que set form para que no haya delay al momento de validar mi input
        setForm({...form,[property]:value})
        
    }

    const handleSelect=(e)=>{
        if(form.diets.includes(e.target.value)){
            console.log("YA EXISTE")
            return "Diet type already exists"
            
        }else{
            setForm({
                ...form,
                diets:[...form.diets,e.target.value]
            })
        }
    }

    const submitHandler=(event)=>{
         event.preventDefault();
         dispatch(postRecipe(form))
         .then(res=>alert("receta creada correctamente"))
         .catch(err=>alert("No se pudo crear la receta, error"))
    }

    const handleDelete=(e)=>{
        setForm({
            ...form,diets:form.diets.filter(d=>d!==e)
        })
    }

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])
    
    return(

        <div className={style.divForm}>
            <h3 className={style.nombre}>Enjoy creating your own recipe!</h3>
        <form onSubmit={submitHandler}> 
            <div>
                <label className={style.label}>Recipe name:</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" className={style.input}></input>
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label className={style.label}>Summary:</label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary" placeholder="Your recipe summary" className={style.input}></input>
                {errors.summary && <span>{errors.summary}</span>}
            </div>

            <div>
                <label className={style.label}>HealthScore:</label>
                <input type="number" value={form.healthScore} onChange={changeHandler} name="healthScore" placeholder="1-100" className={style.input}></input>
                {errors.healthScore && <span>{errors.healthScore}</span>}
            </div>

            <div className={style.step}>
                <label className={style.label}>Steps:</label>
                {/* <input ></input> */}
                <textarea type="textarea" value={form.steps} onChange={changeHandler} name="steps" placeholder="Step by step" className={style.textarea}></textarea>
                {errors.steps && <span>{errors.steps}</span>}
            </div>

            <div  >
                <select onChange={handleSelect} className={style.diet}>
                    <option value={form.diets} name="diets">Diet type</option>
                    {diet?.map(c=>{
                        return(
                            <option value={c.name}>{c.name}</option>
                        )
                    })}
                </select>

            </div>

            <button type="submit" className={style.submit}>CREATE</button>

        </form>
           
        {form.diets.map(el=>
           <div >
            <p >{el}</p>
            <button onClick={()=>handleDelete(el)} >X</button>
           </div> 
           )}
           
        </div>
    )
}

export default Form;