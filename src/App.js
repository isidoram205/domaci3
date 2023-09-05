import React from 'react';
import NavBar from './navBar';
import Proizvodi from './pages/prodavnica/proizvodi';
import { Korpa } from './pages/korpa/Korpa';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './footer';
import ONama from './pages/ostale stranice/Onama';
import Kontakt from './pages/ostale stranice/Kontakt';
import proizvodiPodaci from './podaciProizvodi';
import { ProizvodiContextProvider } from './context/ProizvodiContext';

function App() {

  return (
    <div className='App'>
      <ProizvodiContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Proizvodi proizvodi = {proizvodiPodaci}/>}
        />
        <Route path='/korpa' element = {<Korpa/>}/>
        <Route path="/onama"  element={<ONama />} />
        <Route path="/kontakt"  element={<Kontakt />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      </ProizvodiContextProvider>
    </div>
  );
}

export default App;

