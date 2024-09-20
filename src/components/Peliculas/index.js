import React, { Component } from 'react';
import PeliculaUna from '../PeliculaUna';
import './peliculas.css';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
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


