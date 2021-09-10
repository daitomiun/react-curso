import React, {useState,useEffect} from 'react';

export default function ScrollHooks(){
    const [scrollY, setScrollY]= useState(0)

    useEffect(()=>{


        // console.log("noviendo el scroll")
        
        const detectarScroll = ()=> setScrollY(window.pageYOffset)

        window.addEventListener("scroll", detectarScroll)

        // return()=>  {
        //     window.removeEventListener("scroll", detectarScroll)
        //     console.log("fase de desmontaje")

        // }


    },[scrollY])
    // useEffect(()=>{
    //     console.log("fase de montaje")

    // },[])
    // useEffect(()=>{
    //     console.log("fase de actualizacion")

    // })
    
    // useEffect(()=>{
    //     return ()=>{
    //         console.log("fase de desmontaje")
            
    //     }
    // })
    
    return(
        <>
         <h2>hooks - useEffect y el ciclo de vida</h2>
         <p>scroll y del navegador {scrollY}px</p>
        </>
    )
}