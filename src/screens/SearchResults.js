import React, {Component} from "react";
import PeliculaUna from "../components/PeliculaUna";

class SearchResults extends Component{
   constructor(props){
       super(props);
       this.state = {
           pelis: [],
           estaCargando: true,
       }
   }

componentDidMount(){
   this.setState({
       estaCargando: true
   })
   fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=9458a99baf5a9ba3fe341cd43217ef95`)
   .then((resp) => resp.json())
   .then((data) => {this.setState({pelis: data.results, estaCargando: false})})
   .catch((err) => console.log(err))
}

render(){
   return(
       <div>
        <h1>Resultados:</h1>
        <ul>
    {this.state.pelis.length > 0 ? (
        this.state.pelis.map((movie, id) => (
            <PeliculaUna key={id} pelicula={movie} />
        ))
    ) : (
        <h3>No se encontraron resultados.</h3>
    )}
    </ul>
       </div>
   )
}
}

export default SearchResults;