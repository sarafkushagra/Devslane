import React, { useState } from 'react'
import TableRow from './TableRow'

export default function Table() {
     const [num, setNum] = useState(2);
  function nextTable() {
    console.log("Next table clicked"); 
    setNum(num + 1);
  }
  return (
    <>
    <div className="p-2">
    <button onClick={nextTable} className="px-4 py-1 bg-indigo-700 text-white rounded-md">Next</button>
    <TableRow number={num} index={1} />
    <TableRow number={num} index={2} /> 
    <TableRow number={num} index={3} />
    <TableRow number={num} index={4} />
    </div>
    </>
  )
}
