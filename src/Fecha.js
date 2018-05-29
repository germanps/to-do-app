import React, { Component } from 'react';

class Fecha extends Component{
   render(){
      const full = new Date();
      const meses = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dia = full.getDate(),
            sem = full.getDay(),
            mes = full.getMonth();
      const fecha = `${dias[sem]} ${dia}  ${meses[mes]}`; 

      return(
         <div className="fecha">
            <p>{fecha}</p>
         </div>
      )
   }
}
export default Fecha;
