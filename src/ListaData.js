import { extendObservable } from 'mobx';

class ListaData {
    constructor(){
        extendObservable(this,
            {tareas: []}
        );
    }
    agregarTarea(tarea){
        console.log(tarea);
        this.tareas.push(tarea);
    }
    eliminarTarea(index){
        //Splice borra desde el index la cantidad que le indiquemos (1)
        this.tareas.splice(index, 1);
    }
}

var VarListaData = new ListaData();

export default VarListaData;