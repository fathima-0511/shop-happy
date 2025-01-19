import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Nav from './components/Navbar/Nav';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
     
          <Route  path='home' element={<Home/>}></Route>
          <Route path='shop' element={<Shop/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
