import React, { Component } from 'react';
import PeliculaUna from '../PeliculaUna';
import './peliculas.css';
import MiComponenteControlado from '../ComponenteControlado';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasBackUp: [],
            cantidadMostrar: props.cantidadPeliculas,
        }}

    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculasBackUp.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
        )
        this.setState({
            peliculas: peliculasFiltradas
        })}

    componentDidMount() {
        const { url } = this.props;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {this.setState({peliculas: data.results, peliculasBackUp: data.results})})
            .catch((err) => console.log(err));
    }

    cargarMasPeliculas = () => {
        this.setState(prevState => ({
            cantidadMostrar: prevState.cantidadMostrar + 6
        }),
    );
    }
 
    render() {
        const { cantidadMostrar, peliculas } = this.state;
        const { mostrarBotonCargarMas} = this.props;
    
        return (
            <section>
                <h2>{this.props.title}</h2>
                {this.props.mostrarComponenteControlado && (
                <MiComponenteControlado filtrarPeliculas={ (nombre) => this.filtrarPeliculas(nombre) } />
                )}
                <ul>
                    {peliculas.length === 0 ? (
                        <h3>Cargando...</h3>
                    ) : (
                        peliculas.slice(0, cantidadMostrar).map((pelicula) => (
                            <PeliculaUna
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    )}
                </ul>
                {mostrarBotonCargarMas && cantidadMostrar < peliculas.length && (
                    <button className='kusa' onClick={this.cargarMasPeliculas}>Cargar más</button>
                )}
            </section>
        );
    }
}

export default Peliculas;


