import {
  IonButton,
  IonInput,
  IonItem
} from '@ionic/react';

import { useState } from 'react';


interface Props {
  onAdd: (texto: string) => void;
}


function TaskForm({ onAdd }: Props) {

  const [texto, setTexto] = useState('');


  const agregar = () => {

    if (texto.trim() === '') {
      return;
    }

    onAdd(texto);

    setTexto('');
  };


  return (

    <>

      <IonItem>

        <IonInput
          label="Nueva tarea"
          labelPlacement="stacked"
          placeholder="Escribe una tarea"
          value={texto}
          onIonInput={(e) =>
            setTexto(
              e.detail.value ?? ''
            )
          }
        />

      </IonItem>


      <IonButton
        expand="block"
        onClick={agregar}
      >

        Agregar tarea

      </IonButton>

    </>

  );
}


export default TaskForm;