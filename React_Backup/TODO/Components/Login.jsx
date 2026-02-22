import React, { useRef } from 'react'

function Login() {
    let inputRef = useRef("gg");
    let pRef = useRef(null);
    function handleButton() {
        console.log(inputRef)
        console.log(inputRef.current.value);
        console.log(inputRef.current)
        console.log("<<------------->>")
        console.log(pRef.current)
        console.log(pRef);
    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-center text-amber-500">Please Login! ...</h1>

            <div className="uncontroledForm">
                <input className='bg-amber-100' type="text" ref={inputRef} placeholder='Enter a text' />
                <p className='' ref={pRef}>This is p</p>
                <button className='px-4 py-2 font-mono bg-amber-400 text-white rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700' onClick={handleButton}>Click me</button>
            </div>

        </>
    )
}

export default Login