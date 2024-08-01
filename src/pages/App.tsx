import React from 'react';
import Cronometro from '../components/Cronometro/index';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;