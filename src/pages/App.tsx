import React from 'react';
import Cronometro from '../components/Cronometro/index';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import { useState } from 'react';
import { ITarefs } from '../types/tarefa';

  
function App() {
  const [tarefas, setTarefas] = useState<ITarefs[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;