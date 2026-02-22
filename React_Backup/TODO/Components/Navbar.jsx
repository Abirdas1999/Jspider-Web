import React, { useContext } from 'react';
import ThemeContext from '../Utility/ThemeContext';

function Navbar({ value, setValue}) {

  let {isDark,toggleTheme} =useContext(ThemeContext);



  function handleLogin() {
    setValue(prev => !prev);
  }

  // function handleDark() {
  //   setIsDark(prev => !prev);
  // }


  return (
    <>
      <nav className={`p-4 ${isDark ? "bg-gray-900" : "bg-amber-50"}`}>
        <div className="container mx-auto flex items-center justify-between">
          <h1 className={`text-lg font-bold ${isDark ? "text-amber-600" : "bg-white"}`}>ToDo</h1>

          <div className='flex gap-2.5'>
            <button
              className="px-4 py-2 font-mono bg-amber-400 text-white rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
              onClick={handleLogin}
            >
              {value ? "Logout" : "Login"}
            </button>

            <button
              className={`px-4 py-2 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all duration-300 ${isDark? "bg-amber-50 text-amber-500 hover:bg-amber-100" : "bg-black text-white hover:bg-gray-800"}`}
              onClick={toggleTheme}
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
