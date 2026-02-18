import React from 'react'

function ToDoDisplay({ taskobj, onDelete, onToggle,onEdit }) {



    return (

        <>
            <li className='list-none rounded-2xl bg-gray-200 flex items-center justify-between mb-5'>

                <div className="msg">
                    <input
                        type="checkbox"
                        checked={taskobj.isChecked}
                        className=" mx-3  accent-emerald-500 cursor-pointer"
                        onChange={() => onToggle(taskobj.id)}
                    />

                    <span className={`px-3 font-mono ${taskobj.isChecked ? "line-through text-gray-400 opacity-60" : ""}`}>{taskobj.task}</span>
                    <span className={`text-sm italic font-extralight ${taskobj.isChecked ? "line-through text-gray-400 opacity-60" : ""}`}>{taskobj.desc}</span>
                </div>
                

                <div className="btn flex bg-amber-400 rounded-2xl overflow-hidden">

                    {/* Edit Button */}
                    <button
                        onClick={() => onEdit(taskobj.id)}
                        className={`px-4 py-1 text-white transition-all duration-200 ${taskobj.isChecked ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 cursor-pointer" }`}
                    >
                        ✏️
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(taskobj.id)}
                        className="px-4 py-1 bg-amber-400 hover:bg-amber-500 text-white transition-all duration-200 cursor-pointer"
                    >
                        ❌
                    </button>

                </div>


            </li>

        </>
    )
}

export default ToDoDisplay