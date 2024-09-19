import React, { Component } from "react";

import PeliculaUna from "../components/PeliculaUna";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = { peliculas: [] };
    }

    obtenerDetallesPelicula(id) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
            .then(response => response.json())
            .catch(err => {
                return err;
            });
    }

    componentDidMount() {
        const guardaFavs = localStorage.getItem('favoritos');
        if (guardaFavs != null) {
            const favoritosIds = JSON.parse(guardaFavs);
            let peliculas = [];

            favoritosIds.map((id) => {
                this.obtenerDetallesPelicula(id).then((data) => {
                    if (data) {
                        peliculas.push(data);
                        if (peliculas.length === favoritosIds.length) {
                            this.setState({ peliculas });
                        }
                    }
                });
            });
        }
    }

    render() {
        return (
            <section>
                <h2>Favoritos</h2>
                <ul>
                    {
                        this.state.peliculas.length > 0 ? (
                            this.state.peliculas.map((pelicula) => (
                                <PeliculaUna
                                    key={pelicula.id}
                                    pelicula={pelicula}
                                />
                            ))
                        ) : (
                            <p>No tienes películas favoritas.</p>
                        )
                    }
                </ul>
            </section>
        );
    }
}

export default Favoritos;
