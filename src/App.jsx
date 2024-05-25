import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './page/Inicio'
import Footer from './components/Footer'
import Licor from './page/Licor'
import Detalles from './page/Detalles'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='licor/:id/:tipo' element={<Licor />} />
          <Route path='detalles/:id/' element={<Detalles />} />
          <Route path='*' element={<Inicio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App