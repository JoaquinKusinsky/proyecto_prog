import React from "react";
import Headers from "../Headers";
import "./styles.css"
const opciones = [
    {
        nombre: "Home",
        ruta:"/"
    },
    {
        nombre: "Favoritos",
        ruta: "/favoritos"
    },
    {
        nombre: "Ver todas",
        ruta: "/verTodas"
    }
]

function Header(props){
    return( 
   <nav>
        <ul class="main-header">
            {
                opciones.map((elm) => <Headers name={elm} />)
            }
        </ul>
        <ul class="logo">
            <li><img src="./img/logo.jpg" alt=""/></li>
        </ul>
    </nav>
   )
}

export default Header;



