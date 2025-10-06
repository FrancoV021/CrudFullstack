import './app.css';
import Cont from '../Containers/Cont';

import React from 'react';
import {RegistroGym} from '../Entities/RegistroGym';

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


  return (
    <div className="mainCont">
      <div>
        <Cont>
          {
           <div>
             <h2>Create:</h2>
           </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
           <div>
             <h2>Read:</h2>
          </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
            <div>
              <h2>Update:</h2>
            </div>
          }
        </Cont>
      </div>
      <div>
        <Cont>
          {
            <div>
              <h2>Delete:</h2>
            </div>
          }
        </Cont>
      </div>
    </div>
  );
}

export default App;
