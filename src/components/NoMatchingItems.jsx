import React from 'react';

function NoMatching({children}){
    return (
        <div className='bg-indigo-500 text-white text-center p-2' >
            {children}
        </div>
    );
}
export default NoMatching