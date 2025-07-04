
import { useState } from "react";
import Table from "./Components/Table";


function App() {
  const [flip, setFlip] = useState(false);

  let k1 = 't1';
  let k2 = 't2';

  if (flip) {
    k1 = 't2';
    k2 = 't1';
  }

  function flipTables() {
    console.log("Flip tables clicked"); 
    setFlip(!flip);
  }

  return (
    <>
    

    <div className="flex gap-3">
      <Table key={k1} />
      <Table key={k2} />
    </div>
    <button onClick={flipTables} className="px-4 py-2 bg-red-500 rounded-md">Flip
      </button>
    
    </>
  )
}

export default App
