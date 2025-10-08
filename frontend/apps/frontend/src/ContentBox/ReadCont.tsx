import React from 'react';
import './Cont.css';
import {RegistroGym} from '../Entities/RegistroGym';

interface ContentBoxProps {
  content: RegistroGym;
}

const ReadCont: React.FC<ContentBoxProps> = ({ content }) => {
   const [registro, setRegistro] = React.useState<RegistroGym>(content);

   return (
      <div className="contBox">
         <p>Nombre: {registro.nombre}</p>
         <p>Apellido: {registro.apellido}</p>
         <p>Fecha de ingreso: {registro.fechaIngreso}</p>
         <p>Peso: {registro.peso} Kg</p>
         <p>Ejercicio: {registro.ejercicio}</p>
      </div>
   );
}
export default ReadCont;
