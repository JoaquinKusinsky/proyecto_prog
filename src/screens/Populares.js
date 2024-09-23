import React from "react";
import Peliculas from "../components/Peliculas";

function Populares(){
    return(
        <React.Fragment>
        <h1>Películas más populares:</h1>
        <Peliculas url= {`https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95`} 
            mostrarComponenteControlado={true}
            mostrarBotonCargarMas={true} 
            cantidadPeliculas = {20}
            />
        </React.Fragment>
    )
}

export default Populares;