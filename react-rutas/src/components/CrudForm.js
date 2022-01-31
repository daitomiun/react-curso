import React, { useState, useEffect } from 'react';

const initialForm={
    name:"",
    constellation:"",
    id:null,
}
const CrudForm=({createData, updateData, dataToEdit, setDataToEdit})=>{
    const [form, setForm]=useState(initialForm)

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit])
    
    const HandleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const HandleSubmit=(e)=>{
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert("datos incompletos")
            return;
        }

        if(form.id===null){
            createData(form)
        }else{
            updateData(form)
        }

        HandleReset()
    }

    const HandleReset=(e)=>{
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>{dataToEdit?"editar":"agregar"}</h3>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="name" placeholder="nombre" onChange={HandleChange} value={form.name}></input>
                <input type="text" name="constellation" placeholder="constelacion" onChange={HandleChange} value={form.constellation}></input>
                <input type="submit" value="enviar"></input>
                <input type="reset" value="limpiar" onClick={HandleReset}></input>

            </form>
        </div>
    )
}

export default CrudForm