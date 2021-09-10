import React from 'react';
import { useFetch } from '../hooks/useFetch.js';

export default function HooksPersonalizado(){
    // const url = "https://pokeapi.co/api/v2/pokemon/";
    let url ="https://jsonplaceholder.typicode.com/users"

    let { data, isPending, error }= useFetch(url)
    // console.log(JSON.stringify(useFetch(isPending)))
    
    return(
    <>
        <h2>hook personalizados</h2>

        <h3>{JSON.stringify(useFetch(isPending))}</h3>

        <h3>
            <mark>{JSON.stringify(useFetch(error))}</mark>
        </h3>
        <h3>
            <pre style={{whiteSpace:"pre-wrap"}}>
                <code>{JSON.stringify(useFetch(data))}</code>
            </pre>
        </h3>
    </>

    )
}