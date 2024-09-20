import React, {Component} from "react";
import DetalleCard from "../DetalleCard";

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state = {movie: null, esCargando: true}
        console.log(props);
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id);
        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
        .then(resp => resp.json())
        .then(data => this.setState({movie: data}))
        .catch(err => console.log(err))
    }

    render(){
        if(this.state.esCargandoesCargando){
            return <h3>Cargando...</h3>
        }
        return(
            <section>
                <DetalleCard
                pelicula={this.state.movie}/>
            </section>
        )
    }
}

export default Detalle

