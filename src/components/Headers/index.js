import React from "react";
import {Link} from "react-router-dom";

export default function Headers(props){
    return(
    
        <li>
            <Link to={props.name.ruta}>
            {props.name.nombre}
            </Link>
        </li>
    )
}