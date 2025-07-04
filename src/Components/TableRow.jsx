import React from 'react'

export default function TableRow({number,index}) {
  return (
    <div className='p-2 text-xl text-indigo-700'>
      {number} X {index} = {number * index}
    </div>
  )
}
