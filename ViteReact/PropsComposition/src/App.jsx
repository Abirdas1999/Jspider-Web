import { useState } from 'react';
import Navbar from './Components/Navbar';
import ToDoApp from './Components/ToDoApp';
import Login from './Components/Login';
import ThemeContext from './Utility/ThemeContext';

function App() {
  const [value, setValue] = useState(false);
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "min-h-screen bg-gray-900" : "min-h-screen bg-amber-50"}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>

        <Navbar value={value} setValue={setValue} />

        {value ? <ToDoApp isDark={isDark} /> : <Login isDark={isDark} />}

      </ThemeContext.Provider>

    </div>
  )
}

export default App;
