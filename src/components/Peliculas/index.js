import React, { Component } from 'react';
import peliculas from './peliculas.css';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            verMasoNo: {},
        };
    }

    componentDidMount() {
        const { url } = this.props;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results
                });
            })
            .catch((err) => console.log(err));
    }

    cambiarVerMas(id) {
        const ver = this.state.verMasoNo;
        ver[id] = !ver[id];

        this.setState({
            verMasoNo: ver
        });
    }



    render() {
        const { cantidadPeliculas } = this.props;

        return (
            <>
            <section>
                <h2>{this.props.title}</h2>
                <ul>
                {this.state.peliculas.length === 0 ? (
                    <h3>Cargando...</h3>
                ) : (
                    this.state.peliculas.slice(0, cantidadPeliculas).map((pelicula) => (
                    <li className='containerDepeliculas' key={pelicula.id}>
                        <a href={`/detalleCard/${pelicula.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} alt="" />
                        <h3>{pelicula.title}</h3>
                        </a>
                        {
                        this.state.verMasoNo[pelicula.id] ?
                            <p>{pelicula.overview}</p> : null
                        }
                        <button onClick={() => this.cambiarVerMas(pelicula.id)}>
                        {this.state.verMasoNo[pelicula.id] ? "Ver menos" : "Ver más"}
                        </button>
                        <button >
                        Agregar a favoritos
                        </button>
                        <button >
                        Quitar de favoritos
                        </button>
                    </li>
                    ))
                )}
                </ul>
            </section>
            </>
        );
    }
}

export default Peliculas;




