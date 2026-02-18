/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Home } from './Components/Home'
import { productArray } from './Utility/Data'
import Parent from './Components/Parent';
import ChangeBg from './Components/ChangeBg';

function App() {


  let [sname, setSName] = useState("Abirdas");
  const [newName, setNewName] = useState("");

  function getNameFromChild(uName) {
    setNewName(uName);
  }

  return (
    <>
      {/* <ChangeBg/> */}

      
      <h1 className='text-6xl text-center text-amber-600'>App</h1>
      <Parent sname={sname} getName={getNameFromChild} />
      <div className="flex items-center justify-center mt-8">
        <h1 className='text-zinc-950'>New Name is <span className='text-amber-500 font-semibold'>{newName}</span></h1>
      </div>

    </>
  )
}

export default App