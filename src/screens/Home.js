import React from "react";
import Peliculas from "../components/Peliculas";




function Home() {
    return (
        <React.Fragment>
            <h2>Películas más populares <a href="populares">Ver todas</a></h2>
            <Peliculas url= {'https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95'} cantidadPeliculas = {5}/> 
            <h2>Películas en cartelera <a href="cartel">Ver todas</a></h2>
            <Peliculas url= {'https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95'} cantidadPeliculas = {5} />
        </React.Fragment>
    )
}

export default Home;