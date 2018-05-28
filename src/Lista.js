import React, { Component } from 'react';
import VarListaData from './ListaData';
class Lista extends Component{
    render(){
        let lista = [];
        const agregar = VarListaData.tareas.forEach((valor, index) => (
            lista.push(<li>{valor}</li>)
        ) );

        return(
            <div>
                <h2>Lista</h2>
                <input/>
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