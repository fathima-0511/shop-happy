import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Nav from './components/Navbar/Nav';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
           <Nav/>
        </header>
         <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='*' element={<div><h3>Oops!</h3><h4>The page you are looking for is not found...</h4></div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
