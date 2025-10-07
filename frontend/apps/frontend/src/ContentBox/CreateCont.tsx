import React from 'react';
import './Cont.css';

import {RegistroGym} from '../Entities/RegistroGym';

interface ContentBoxProps {
  onSubmit: (
             nombre: string,
             apellido: string,
             fechaIngreso: string,
             peso: number,
             ejercicio: string
             ) => void;
}

const CreateCont: React.FC<ContentBoxProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [fechaIngreso, setFechaIngreso] = React.useState("");
  const [peso, setPeso] = React.useState<number>(0);
  const [ejercicio, setEjercicio] = React.useState("");

  const handleSubmit = () => {
    onSubmit(nombre, apellido, fechaIngreso, peso, ejercicio || 0);
      setNombre("");
      setApellido("");
      setFechaIngreso("");
      setPeso(0);
      setEjercicio("");
  }

   return (
      <div className="contBox">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Introduzca su nombre"
        />
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Introduzca su apellido"
        />
        <input
          type="text"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
          placeholder="Introduzca la fecha de ingreso"
        />
        <input
         type="number"
         value={peso}
         onChange={(e) => setPeso(parseInt(e.target.value))}
         placeholder="Introduzca su peso en kg"
        />
        <input
          type="text"
          value={ejercicio}
          onChange={(e) => setEjercicio(e.target.value)}
          placeholder="Introduzca el ejercicio"
        />
        <button onClick={handleSubmit}>Crear Registro</button>
      </div>
   );
}
export default CreateCont;
