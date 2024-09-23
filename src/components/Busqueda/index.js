import React, { Component } from 'react';
import "./styles.css"


class Busqueda extends Component {
   constructor(props) {
       super(props);
       this.state = {
           query: ""
       };
   }


   handleChange(event){
       this.setState({ query: event.target.value });
   };


   handleSubmit(event){
       event.preventDefault();
       //this.props.onSearch(this.state.query);
   };


   handleFormSubmit(){
       this.props.history.push("/buscar" , {query: this.state.query})
   }


   render() {
       return (
           <form className='formulario' onSubmit={(event) => this.handleSubmit(event)}>
           <input type="text" className='input' placeholder="Buscar películas" value={this.state.query} onChange={(event) => this.handleChange(event)}/>
           <button type="submit" className='boton' onClick={() => this.handleFormSubmit()}>Buscar</button>
           </form>
       );
   }
}


export default Busqueda;