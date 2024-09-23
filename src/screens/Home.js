import React, {Component} from "react";
import Peliculas from "../components/Peliculas";
import { Link } from "react-router-dom";
import Busqueda from "../components/Busqueda";

class Home extends Component {
    render(){  
    return (
        <React.Fragment>
            <Busqueda history={this.props.history}/>
            <h2>Películas más populares <Link className = "link" to="/populares">Ver todas</Link></h2>
            <Peliculas url= {'https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95'} mostrarComponenteControlado={false} mostrarBotonCaragarMas={false} cantidadPeliculas = {5}/> 
            <h2>Películas en cartelera <Link className = "link" to="/cartel">Ver todas</Link></h2>
            <Peliculas url= {'https://api.themoviedb.org/3/movie/now_playing?api_key=9458a99baf5a9ba3fe341cd43217ef95'} mostrarComponenteControlado={false} mostrarBotonCaragarMas={false} cantidadPeliculas = {5} />
        </React.Fragment>
    )}
}

export default Home;