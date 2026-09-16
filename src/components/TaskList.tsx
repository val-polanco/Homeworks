import {
  IonList
} from '@ionic/react';

import TaskItem from './TaskItem';


interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}


interface Props {
  tareas: Tarea[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}


function TaskList({
  tareas,
  onComplete,
  onDelete
}: Props) {

  return (

    <IonList>

      {tareas.map((tarea) => (

        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onComplete={onComplete}
          onDelete={onDelete}
        />

      ))}

    </IonList>

  );
}


export default TaskList;