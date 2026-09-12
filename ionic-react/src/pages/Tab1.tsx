import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useNavigate } from 'react-router-dom';

const visitasIniciales = [
  {
    id: 1,
    paciente: 'Ana López',
    hora: '08:00',
    estado: 'pendiente'
  },
  {
    id: 2,
    paciente: 'Carlos Pérez',
    hora: '10:30',
    estado: 'en_camino'
  },
  {
    id: 3,
    paciente: 'Laura Gómez',
    hora: '14:00',
    estado: 'finalizada'
  }
];

function Tab1() {

  const navigate = useNavigate();

  const visitasGuardadas = localStorage.getItem('visitas');

  let visitas = visitasIniciales;

  if (visitasGuardadas) {
    visitas = JSON.parse(visitasGuardadas);
  } else {
    localStorage.setItem(
      'visitas',
      JSON.stringify(visitasIniciales)
    );
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Visitas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h2>Visitas del día</h2>

        <IonList>

          {visitas.map((visita) => (

            <IonItem
              key={visita.id}
              button
              onClick={() =>
                navigate(`/visitas/${visita.id}`)
              }
            >

              <IonLabel>

                <h2>{visita.paciente}</h2>

                <p>
                  Hora: {visita.hora}
                </p>

                <p>
                  Estado: {visita.estado}
                </p>

              </IonLabel>

            </IonItem>

          ))}

        </IonList>

      </IonContent>

    </IonPage>
  );
}

export default Tab1;