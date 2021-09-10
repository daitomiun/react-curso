import React, { useState } from 'react';

export default function  Formularios(){
    // const [nombre, setNombre]=useState("");
    // const [sabor, setSabor]=useState("");
    // const [lenguaje, setLenguaje]=useState("");
    // const [terminos, setTerminos]=useState(false);


    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     alert("se envio el formulario")
    // }

    // return(
    //     <>
    //         <h2>Formularios</h2>
    //         <form onSubmit={handleSubmit}>
    //             <label htmlFor="nombre">nombre:</label>
    //             <input 
    //             type="text" 
    //             id="nombre" 
    //             name="nombre" 
    //             value={nombre} 
    //             onChange={(e)=> setNombre(e.target.value)}></input>
    //             <p>elige tu sabor js favorito</p>
    //             <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e)=> setSabor(e.target.value)} defaultChecked/>
    //             <label htmlFor="vanilla">vanilla</label>
    //             <br/>
    //             <input type="radio" id="react" name="sabor" value="react" onChange={(e)=> setSabor(e.target.value)}/>
    //             <label htmlFor="react">React</label>
    //             <br/>
    //             <input type="radio" id="angular" name="sabor" value="angular" onChange={(e)=> setSabor(e.target.value)}/>
    //             <label htmlFor="angular">angular</label>
    //             <br/>
    //             <input type="radio" id="svelte" name="sabor" value="svelte" onChange={(e)=> setSabor(e.target.value)}/>
    //             <label htmlFor="svelte">svelte</label>
    //             <p>ellige tu lenguaje de programacion</p>
    //             <select name="lenguaje" onChange={(e)=> setLenguaje(e.target.value)} defaultValue="">
    //                 <option value="" >---</option>
    //                 <option value="js">javascript</option>
    //                 <option vaule="php">PHP</option>
    //                 <option value="py">python</option>
    //                 <option value="rb">ruby</option>
    //             </select>
    //             <br/>
    //             <label htmlFor="terminos"> acepto terminos y condiciones</label>
    //             <input type="checkbox" id="terminos" name="terminos" onChange={(e)=> setTerminos(e.target.checked)} defaultValue=""/>
    //             <br/>
    //             <input type="submit"/>
    //         </form>
    //     </>
    // )

    const [form, setForm]=useState({});

    const handleChange =e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleChecked =e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        alert("se envio el formulario")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">nombre:</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={form.nombre} 
                onChange={handleChange} ></input>
                <p>elige tu sabor js favorito</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} defaultChecked/>
                <label htmlFor="vanilla">vanilla</label>
                <br/>
                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange} />
                <label htmlFor="react">React</label>
                <br/>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange} />
                <label htmlFor="angular">angular</label>
                <br/>
                <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange} />
                <label htmlFor="svelte">svelte</label>
                <p>ellige tu lenguaje de programacion</p>
                <select name="lenguaje" onChange={handleChange}  defaultValue="">
                    <option value="" >---</option>
                    <option value="js">javascript</option>
                    <option vaule="php">PHP</option>
                    <option value="py">python</option>
                    <option value="rb">ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos"> acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} defaultValue=""/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )

}