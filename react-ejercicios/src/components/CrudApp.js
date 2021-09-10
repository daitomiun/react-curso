import React, { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable"

const initialDb=[
    {
        id: 1,
        name:"seiya",
        constellation:"pegaso"
    },
    {
        id: 2,
        name:"Shiriu",
        constellation:"dragon"
    },
    {
        id: 3,
        name:"Hyoga",
        constellation:"cisne"
    },
    {
        id: 4,
        name:"shun",
        constellation:"andromeda"
    },
    {
        id: 5,
        name:"ikki",
        constellation:"fenix"
    },
]


const CrudApp =()=>{
    const [db, setDb]=useState(initialDb)
    const [dataToEdit, setDataToEdit]= useState(null)

    const createData=(data)=>{
        data.id=Date.now()
        setDb([...db,data])
        // console.log(data)
    }

    const updateData=(data)=>{
        let newData=db.map(el=> el.id===data.id?data:el)
        setDb(newData)
    }

    const deleteData=(id)=>{
        let isDelete= window.confirm(`¿esta seguro de eliminar el id? '${id}'`)

        if(isDelete){
            let newData=db.filter(el=>el.id!==id)
            setDb(newData)
        }
    }


    return(
        <div>
            <h2>CRUD app</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
            </article>
        </div>
    )
}

export default CrudApp