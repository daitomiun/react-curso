import React from 'react';

const CrudTableRow=({el, setDataToEdit, deleteData})=>{
    let{name,constellation,id}=el;
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                <td>
                    <button onClick={()=>setDataToEdit(el)}>editar</button>
                    <button onClick={()=>deleteData(id)}>eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default CrudTableRow;