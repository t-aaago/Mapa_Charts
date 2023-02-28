import * as React from 'react';
import { NavBairros } from './components/NavBairros';
import { Jurunas } from './components/pages/Jurunas';
import { Guama } from './components/pages/Guama';
import { Home } from './components/pages/Home';
import { Route, Routes} from 'react-router-dom';

import './App.css';

export const App = () => {
  const jurunas = '/jurunas'
  const guama = '/guama'
  const home = '/'

  return (
    <div>
      <NavBairros/>

      <Routes>
        <Route path= {home} element={<Home/>}/>
        <Route path= {jurunas} element={<Jurunas/>}/>
        <Route path={guama} element={<Guama/>}/>
      </Routes>
    </div>
  )
}

