import React from "react";
import classes from'./Topbar.module.css';

const Topbar = () => {

    return(
        <header>
             <nav className ={classes.Topbar}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" alt="Amazon Logo"/>
             </nav>
        </header>
    )

}

export default Topbar;


