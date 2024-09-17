import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Peliculas from "../components/Peliculas";

function Cartel(){
    return(
        <React.Fragment>
        <h1>Películas en cartel:</h1>
            <Footer/>
        </React.Fragment>
    )
}

export default Cartel;