import React, { useState } from 'react';
import Parent from './parent';
import counterContext from './counterContext';

function App() {

  let [stat, setState] = useState(5);

  let contextCounter = useState(0);
  console.log(stat);
  return (
    <counterContext.Provider value={contextCounter} >
      <div >
      <button onClick={() => { setState(++stat) }}>
          increment from parent
        </button>
        <Parent value={stat} />

        


      </div>
    </counterContext.Provider>
  );
}
export default App;
