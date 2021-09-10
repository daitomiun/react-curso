import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable=({data,setDataToEdit, deleteData})=>{
    return(
        <div>
            <h3>tabla de datos</h3>
            <table>
                <thead>
                <tr>
                    <th>nombre</th>
                    <th>constelacion</th>
                    <th>acciones</th>
                </tr>
                </thead>
                <tbody>
                    {data.lenght===0? <tr>
                        <td colSpan="3">sin datos</td>
                        </tr>:data.map((el)=> 
                            <CrudTableRow 
                                key={el.id} 
                                el={el} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData}
                            />
                        )}
                </tbody>   
            </table>
        </div>
    )
}

export default CrudTable