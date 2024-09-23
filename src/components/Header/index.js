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
        <div className="logo-container">
            <h4 className="nombre">CINEMANÍA</h4>
        <ul  class="logo">
                <li><img src="./img/logo.jpg" alt=""/></li>
        </ul>
        </div>
    </nav>
   )
}

export default Header;



