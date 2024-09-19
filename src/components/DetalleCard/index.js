import "./styles.css"
import React, {Component} from "react";

class DetalleCard extends Component{
    constructor(props){
        super(props)
        console.log(props);
    }


render(){
    const pelicula = this.props;
    return(
        
        <div className="detalle-card">
        <section>
            <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} alt={pelicula.title} />
        </section>
        <section>
        <h3>{pelicula.title}</h3>
        <ul>
            <li>Calificación: {pelicula.vote_average}</li>
            <li>Fecha de estreno: {pelicula.release_date}</li>
            <li>Duración: {pelicula.runtime}</li>
            <li>Género {pelicula.genre}</li>
        </ul>
        <p>{pelicula.overview}</p>
        </section>
        </div>
        
    )
}}

export default DetalleCard