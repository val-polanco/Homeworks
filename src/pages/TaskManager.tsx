import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useState } from 'react';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';


interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}


function TaskManager() {

  const [tareas, setTareas] = useState<Tarea[]>([
    {
      id: 1,
      texto: 'Estudiar Ionic',
      completada: false
    },
    {
      id: 2,
      texto: 'Terminar Challenge 03',
      completada: false
    }
  ]);


  const agregarTarea = (texto: string) => {

    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto,
      completada: false
    };

    setTareas([
      ...tareas,
      nuevaTarea
    ]);
  };


  const completarTarea = (id: number) => {

    setTareas(
      tareas.map((tarea) =>

        tarea.id === id

          ? {
              ...tarea,
              completada: !tarea.completada
            }

          : tarea
      )
    );
  };


  const eliminarTarea = (id: number) => {

    setTareas(
      tareas.filter(
        (tarea) => tarea.id !== id
      )
    );
  };


  return (

    <IonPage>

      <IonHeader>

        <IonToolbar color="primary">

          <IonTitle>
            Task Manager
          </IonTitle>

        </IonToolbar>

      </IonHeader>


      <IonContent className="ion-padding">

        <TaskForm
          onAdd={agregarTarea}
        />

        <TaskList
          tareas={tareas}
          onComplete={completarTarea}
          onDelete={eliminarTarea}
        />

      </IonContent>

    </IonPage>

  );
}


export default TaskManager;