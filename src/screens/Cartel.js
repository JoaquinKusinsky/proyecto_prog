import React from "react";
import Peliculas from "../components/Peliculas";

function Cartel() {
    return (
        <React.Fragment>
            <h1>Películas en cartelera:</h1>
            <Peliculas url= {'https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95'} 
            mostrarComponenteControlado={true} 
            cantidadPeliculas = {6} />
        </React.Fragment>
    )
}

export default Cartel;