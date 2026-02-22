import React from 'react'
import FormData from './FormData'

function ToDoApp({ isDark }) {
    
    
    return (
        <>
            
            <h1 className="text-2xl font-bold mb-4 text-center text-amber-500">
                ToDo
            </h1>

            <div className={`w-[30%] p-8 mx-auto mt-16 rounded-2xl shadow-xl border border-amber-100 ${isDark ? "bg-amber-50" : "bg-amber-400"}`}>
                <FormData isDark={isDark} />
            </div>



        </>


    )
}

export default ToDoApp