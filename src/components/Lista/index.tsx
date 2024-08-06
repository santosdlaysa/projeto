
import { ITarefs } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({tarefas}: { tarefas: ITarefs[] }) {
 
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia </h2>
      <ul>
        {tarefas.map((item: any, index: number) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;