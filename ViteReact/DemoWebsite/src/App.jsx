import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Setting from './Components/Setting'
import Products from './Components/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="services" element={<Services/>} >
            <Route path="products" element={<Products/>} />
            <Route path="setting" element={<Setting/>} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App