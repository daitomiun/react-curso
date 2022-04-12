import React from "react";
import "./Loader.css"

const Loader =()=>{
    return(
        <div>
            <h2>loader</h2>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;