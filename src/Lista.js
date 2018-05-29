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
                <li className="list-group-item" key={index}>
                    <span>{valor}</span>
                    <span className="elimininar-tarea" onClick={ () => VarListaData.eliminarTarea(index)}>x</span>
                </li>
            )
        ) );

        return(
            <div className="container-fluid">
                <div className="header row">
                    <div className="mask col-md-12">
                        <h2>My Tasks</h2>
                        <Fecha />
                    </div>
                </div>
                <div className="row">         
                    <div className="content col-md-12">
                        <input onKeyPress={ this.enviarTarea.bind(this) }/>
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