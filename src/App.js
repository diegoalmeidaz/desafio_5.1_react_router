

import 'bootstrap/dist/css/bootstrap.css';

import Head from './components/Head'
import Cardholder from './layouts/Cardholder'
import Foot from './components/Foot'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './layouts/Contacto'
import NotFound from './layouts/NotFound'
import Home from './layouts/Home'



function App () {
  return (
    <div className='"App' >
    <>
    <BrowserRouter>
    <Head></Head>
      <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/cardholder' element={<Cardholder/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    <Foot></Foot>
    </>

    </div>

  );
}

export default App;