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
        nombre: "Más populares",
        ruta: "/populares"
    },
    {
        nombre: "En cartel",
        ruta: "/cartel"
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
        <ul  class="logo">
            <a href="">
                <li><img src="./img/logo.jpg" alt=""/></li>
            </a>
        </ul>
    </nav>
   )
}

export default Header;



