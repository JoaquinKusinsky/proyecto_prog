import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class PeliculaUna extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false,
            favorito: false,
        };  
    }

    cambiarVerMas = () => {
        this.setState({ 
            verMas: !this.state.verMas });
    };

    componentDidMount(){
        const guardaFavs = localStorage.getItem('favoritos');
        if (guardaFavs != null){
            const favoritos = JSON.parse(guardaFavs);
            const esFavorito = favoritos.includes(this.props.pelicula.id);
            if(esFavorito){
                this.setState({favorito: true});
            }
        }
    }

    agregaraFavoritos = () => {
        const guardaFavs = localStorage.getItem('favoritos');
        let favoritos = [];
        if(guardaFavs != null){
            favoritos = JSON.parse(guardaFavs);
        }
        favoritos.push(this.props.pelicula.id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        this.setState({ favorito: true });
    }

    sacarDeFavoritos = () => {
        const guardaFavs = localStorage.getItem('favoritos');
        let favoritos = JSON.parse(guardaFavs);
        favoritos = favoritos.filter((id) => id !== this.props.pelicula.id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        this.setState({ favorito: false });
    }

    render() {
        const { pelicula } = this.props;
        const { verMas} = this.state;

        return (
            <li className='containerDepeliculas' key={pelicula.id}>
                <Link to={`/detalle/${pelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} alt={pelicula.title} />
                    <h3>{pelicula.title}</h3>
                </Link>
                
                {verMas && <p>{pelicula.overview}</p>}
                <button onClick={this.cambiarVerMas}>
                    {verMas ? "Ver menos" : "Ver más"}
                </button>
                <button onClick={()=> !this.state.favorito ? this.agregaraFavoritos() : this.sacarDeFavoritos()}>
                    {this.state.favorito ? "Quitar de favoritos" : "Agregar a favoritos"} </button>
            </li>
        );
    }
}

export default PeliculaUna;