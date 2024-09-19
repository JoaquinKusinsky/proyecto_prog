import React from "react";
import Footer from "../components/Footer";
import Peliculas from "../components/Peliculas";
import PeliculaUna from "../components/PeliculaUna";

function Favoritos(){
    return(
        <React.Fragment>
        <h1>Películas favoritas:</h1>
        <PeliculaUna/>
            <Footer/>
        </React.Fragment>
    )
}

export default Favoritos;