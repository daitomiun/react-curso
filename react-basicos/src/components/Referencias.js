import React, {createRef, useRef} from 'react';

export default function Referencias(){

    // let refMenu =createRef(),
    let refMenu =useRef(),
        refMenuBtn = useRef()

    console.log(refMenu,refMenuBtn)
    const handleToggleMenu = (e)=>{
        // const $menu = document.getElementById("menu")


        // if(e.target.textContent === "Menu"){
        //     e.target.textContent ="cerrar"
        //     $menu.style.display="block"
        // }else{
        //     e.target.textContent ="Menu"
        //     $menu.style.display="none"
        // }

        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent ="cerrar"
            refMenu.current.style.display="block"
        }else{
            refMenuBtn.current.textContent ="Menu"
            refMenu.current.style.display="none"
        }
        
    }

    return (
        <>
            <h2> Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>menu</button>
            <nav id="menu" ref={refMenu} style={{ display:"none"}}>
                <a href="#">1</a> <br/>
                <a href="#">2</a> <br/>
                <a href="#">3</a> <br/>
                <a href="#">4</a> <br/>
                <a href="#">5</a> 
            </nav>
        </>
    )
}