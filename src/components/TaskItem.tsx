import {
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/react';


interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}


interface Props {
  tarea: Tarea;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}


function TaskItem({
  tarea,
  onComplete,
  onDelete
}: Props) {

  return (

    <IonItem>

      <IonCheckbox
        slot="start"
        checked={tarea.completada}
        onIonChange={() =>
          onComplete(tarea.id)
        }
      />


      <IonLabel>

        <h2
          style={{
            textDecoration:
              tarea.completada
                ? 'line-through'
                : 'none'
          }}
        >

          {tarea.texto}

        </h2>


        <p>

          {
            tarea.completada
              ? 'Completada'
              : 'Pendiente'
          }

        </p>

      </IonLabel>


      <IonButton
        color="danger"
        onClick={() =>
          onDelete(tarea.id)
        }
      >

        Eliminar

      </IonButton>

    </IonItem>

  );
}


export default TaskItem;