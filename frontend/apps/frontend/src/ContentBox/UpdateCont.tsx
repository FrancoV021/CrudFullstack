import React from 'react';
import './Cont.css';

import {RegistroGym} from '../Entities/RegistroGym';

interface ContentBoxProps {
  onSubmit: (registro: RegistroGym) => void;
  content: RegistroGym;
}

const UpdateCont: React.FC<ContentBoxProps> = ({ onSubmit, content }) => {
  const [registro, setRegistro] = React.useState<RegistroGym>(content);


  const handleSubmit = () => {
    onSubmit(registro);
  }

   return (
      <div className="contBox">
         <input
            type="text"
            value={registro.nombre || ''}
            onChange={(e) => setRegistro({...registro, nombre: e.target.value})}
            placeholder="Introduzca su nombre"
         />
         <input
           type="text"
           value={registro.apellido || ''}
           onChange={(e) => setRegistro({...registro, apellido: e.target.value})}
           placeholder="Introduzca su apellido"
         />
         <input
           type="text"
           value={registro.fechaIngreso || ''}
           onChange={(e) => setRegistro({...registro, fechaIngreso: e.target.value})}
           placeholder="Introduzca la fecha de ingreso"
         />
         <input
           type="number"
           value={registro.peso?.toString() || ''}
           onChange={(e) => setRegistro({...registro, peso: parseInt(e.target.value)})}
           placeholder="Introduzca su peso en kg"
         />
         <input
           type="text"
           value={registro.ejercicio || ''}
           onChange={(e) => setRegistro({...registro, ejercicio: e.target.value})}
           placeholder="Introduzca el ejercicio"
         />
         <button onClick={handleSubmit}>Actualizar Registro</button>
      </div>
   );
}
export default UpdateCont;
