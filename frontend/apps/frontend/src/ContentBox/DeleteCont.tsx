import React from 'react';
import './Cont.css';

import {RegistroGym} from '../Entities/RegistroGym';

interface ContentBoxProps {
  onSubmit: (id: number) => void;
  content: RegistroGym;
}

const DeleteCont: React.FC<ContentBoxProps> = ({ onSubmit, content }) => {
  const [registro, setRegistro] = React.useState<RegistroGym>(content);


  const handleSubmit = () => {
    onSubmit(registro.id);
  }

   return (
      <div className="contBox">
         <p>Nombre: {registro.nombre}</p>
         <p>Apellido: {registro.apellido}</p>
         <p>Fecha de ingreso: {registro.fechaIngreso}</p>
         <p>Peso: {registro.peso} Kg</p>
         <p>Ejercicio: {registro.ejercicio}</p>
         <button onClick={handleSubmit}>Eliminar Registro</button>
      </div>
   );
}
export default DeleteCont;
