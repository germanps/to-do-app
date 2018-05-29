import React, { Component } from 'react';
import Fecha from './Fecha';
import VarListaData from './ListaData';
import { observer } from 'mobx-react';

class Lista extends Component{
    enviarTarea(e){
        //enviar valor cuando se aprete Intro
        if (e.which === 13) {
            VarListaData.agregarTarea(e.target.value);
            e.target.value = "";
        }
    }
    render(){
        let lista = [];
        VarListaData.tareas.forEach((valor, index) => (
            lista.push(
                <li className="list-group-item" onClick={ () => VarListaData.eliminarTarea(index)} key={index}>{valor}</li>
            )
        ) );

        return(
            <div className="container">
                <div className="header">
                    <h2>Lista</h2>
                    <Fecha />
                </div>
                <input onKeyPress={ this.enviarTarea.bind(this) }/>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {lista}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Lista);