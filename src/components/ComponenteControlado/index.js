import React, { Component} from 'react'
import "./styles.css"

class MiComponenteControlado extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

    controlarInputs(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1)
        )

    }

    render(){
        return(
            <form className='formulario' onSubmit={(event) => this.evitarSubmit(event)} >
                <input className='input' placeholder='Buscar...' onChange={(event)=> this.controlarInputs(event)} value={this.state.valorInput1}
                />
            </form>
        )
    }

}

export default MiComponenteControlado