/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

function Child({ sname, getName }) {
    let [newChildName, setnewChildName] = useState('ChildName');

    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-8">Child</h2>

            <div className="btnOuter align-middle flex items-center justify-center mt-8 ">
                <button className=' hover:bg-amber-200 text-white font-bold py-2 px-4 rounded cursor-pointer bg-amber-400 ' onClick={() => getName(newChildName)}>
                    Click me
                </button>

            </div>
        </>

    )
}

export default Child