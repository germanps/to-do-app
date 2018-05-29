import React, { Component } from 'react';

class Fecha extends Component{
   render(){
      const full = new Date();
      const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      const dias = [
         'Domingo',
         'Lunes',
         'Martes',
         'Miercoles',
         'Jueves',
         'Viernes',
         'Sábado',
      ]
      const dia = full.getDate(),
            sem = full.getDay(),
            mes = full.getMonth(),
            anio = full.getFullYear();
      const fecha = `${dias[sem]} ${dia}  ${meses[mes]}`; 

      return(
         <div className="fecha">
            <p>{fecha}</p>
         </div>
      )
   }
}
export default Fecha;
