import React, { Component } from 'react';
import VarListaData from './ListaData';
class Lista extends Component{
    enviarTarea(e){
        //enviar valor cuando se aprete Intro
        if (e.which === 13) {
            VarListaData.agregarTarea(e.target.value);
        }
    }
    render(){
        let lista = [];
        const agregar = VarListaData.tareas.forEach((valor, index) => (
            lista.push(<li key={index}>{valor}</li>)
        ) );

        return(
            <div>
                <h2>Lista</h2>
                <input onKeyPress={ this.enviarTarea.bind(this) }/>
                <div>
                    <div>
                        <ul>
                            {lista}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lista;