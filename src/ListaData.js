import { extendObservable } from 'mobx';

class ListaData {
    constructor(){
        extendObservable(this,
            {tareas: ['React',
                      'Javascript'
                    ]}
        );
    }
}

var VarListaData = new ListaData;

export default VarListaData;