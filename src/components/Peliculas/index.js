import React, { Component } from 'react';
import PeliculaUna from '../PeliculaUna';
import './peliculas.css';
import MiComponenteControlado from '../ComponenteControlado';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
        )

        this.setState({
            peliculas: peliculasFiltradas
        })
        
    }

    componentDidMount() {
        const { url } = this.props;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { cantidadPeliculas, title } = this.props;
    
        return (
            <section>
                <h2>{title}</h2>
                {this.props.mostrarComponenteControlado && (
                <MiComponenteControlado filtrarPeliculas={ (nombre) => this.filtrarPeliculas(nombre) } />
                )}
                <ul>
                    {this.state.peliculas.length === 0 ? (
                        <h3>Cargando...</h3>
                    ) : (
                        this.state.peliculas.slice(0, cantidadPeliculas).map((pelicula) => (
                            <PeliculaUna
                                key={pelicula.id}
                                pelicula={pelicula}
                            />
                        ))
                    )}
                </ul>
            </section>
        );
    }
}

export default Peliculas;


