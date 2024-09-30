import "./styles.css"
import React, {Component} from "react";

class DetalleCard extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {favorito: false}
    }

render(){
    const pelicula = this.props.pelicula;
    if (pelicula == null) {
        return <p>Cargando...</p>;
    } //mientras pelicula sea null va a retornar este "cargando", sino retorna lo de abajo
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
            <li>Géneros: {pelicula.genres && pelicula.genres.length > 0 ? (pelicula.genres.map((genre , id) => <li key={id}>{genre.name}</li>)) : (<li>No se encontraron géneros</li>)}</li>
        </ul>
        <p>{pelicula.overview}</p>
        </section>
        </div>
        
    )
}}

export default DetalleCard