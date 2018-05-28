import { extendObservable } from 'mobx';

class ListaData {
    constructor(){
        extendObservable(this,
            {tareas: ['React',
                      'Javascript'
                    ]}
        );
    }
    agregarTarea(tarea){
        console.log(tarea);
        this.tareas.push(tarea);
    }
}

var VarListaData = new ListaData();

export default VarListaData;