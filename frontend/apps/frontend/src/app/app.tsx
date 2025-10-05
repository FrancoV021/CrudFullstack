import './app.css';
import Cont from '../Containers/Cont';

export function App() {
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
