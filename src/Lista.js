import React, { Component } from 'react';
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

export default observer(Lista);