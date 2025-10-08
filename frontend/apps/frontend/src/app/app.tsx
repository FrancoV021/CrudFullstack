import './app.css';
import Cont from '../Containers/Cont';

import React from 'react';
import {RegistroGym} from '../Entities/RegistroGym';
import ReadCont from '../ContentBox/ReadCont';
import CreateCont from '../ContentBox/CreateCont';
import DeleteCont from '../ContentBox/DeleteCont';
import UpdateCont from '../ContentBox/UpdateCont';

export function App() {
    const [registros, setRegistros] = React.useState<RegistroGym[]>([]); // esto significa que registros es un array de objetos de tipo RegistroGym

    React.useEffect(() => {
      fetch ("http://localhost:8080/gym/registros", {
        method: "GET"
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        }
      return null;
      }).then(data => {
        if (data !== null) {
          setRegistros(data);
        }
      })
    }, []);

    const handleCreateSubmit = (
      nombre: string,
      apellido: string,
      fechaIngreso: string,
      peso: number | string,
      ejercicio: string
      ) => {
      fetch("http://localhost:8080/gym/registros", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({nombre: nombre, apellido: apellido, fechaIngreso: fechaIngreso, peso: peso, ejercicio: ejercicio})
      }).then(response => {
        if (response.status === 201) {
          return response.json()
        }
        return null;
      }).then(data => {
        if (data !== null) {
          setRegistros([...registros, data]);
        }
      })
  };

  const handleDeleteSubmit = (id: number) => {
    fetch(`http://localhost:8080/gym/registros/${id}`, {
      method: "DELETE"
    }).then(response => {
      if (response.status == 200) {
        return response.json()
      }
      return null;
    }).then (data => {
      if (data !== null) {
        setRegistros(registros.filter(registro => registro.id !== data.id));
      }
    });

  };

  const handleUpdateSubmit = (registroActualizado: RegistroGym) => {
    fetch(`http://localhost:8080/gym/registros/${registroActualizado.id}`, {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(registroActualizado)
      }).then(response => {
        if (response.status == 200) {
          return response.json()
        }
        return null;
      }).then (data => {
        if (data !== null) {
          setRegistros(registros.map(registro =>
            registro.id === data.id ? data : registro
          ));
        }
      });
    };


  return (
    <div className="mainCont">
      <div>
        <Cont>
          {
           <div>
             <h2>Create:</h2>
             <CreateCont onSubmit={handleCreateSubmit}/>
           </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
           <div>
             <h2>Read:</h2>
             {
                registros.map(registro => <ReadCont
                  key={`${registro.id}-${registro.nombre}-${registro.apellido}-${registro.fechaIngreso}-${registro.peso}-${registro.ejercicio}`}
                  content={registro}
                />)
             }
          </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
            <div>
              <h2>Update:</h2>
              {
                registros.map(registro => <UpdateCont
                  key={`${registro.id}-${registro.nombre}-${registro.apellido}-${registro.fechaIngreso}-${registro.peso}-${registro.ejercicio}`}
                  onSubmit={handleUpdateSubmit}
                  content={registro}
                />)
              }
            </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
            <div>
              <h2>Delete:</h2>
              {
                registros.map(registro => <DeleteCont
                  key={`${registro.id}-${registro.nombre}-${registro.apellido}-${registro.fechaIngreso}-${registro.peso}-${registro.ejercicio}`}
                  onSubmit={handleDeleteSubmit}
                  content={registro}
                />)
              }
            </div>
          }
        </Cont>
      </div>
    </div>
  );
}

export default App;
