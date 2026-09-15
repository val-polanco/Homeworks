import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

function VisitDetail() {

  const { id } = useParams();

  const visitasGuardadas = localStorage.getItem('visitas');

  const visitas = visitasGuardadas
    ? JSON.parse(visitasGuardadas)
    : [];

  const visitaEncontrada = visitas.find(
    (visita: any) => visita.id === Number(id)
  );

  const [estado, setEstado] = useState(
    visitaEncontrada?.estado || 'pendiente'
  );

  const cambiarEstado = () => {

    let nuevoEstado = estado;

    if (estado === 'pendiente') {
      nuevoEstado = 'en_camino';
    } else if (estado === 'en_camino') {
      nuevoEstado = 'finalizada';
    }

    const nuevasVisitas = visitas.map(
      (visita: any) => {

        if (visita.id === Number(id)) {

          return {
            ...visita,
            estado: nuevoEstado
          };

        }

        return visita;
      }
    );

    localStorage.setItem(
      'visitas',
      JSON.stringify(nuevasVisitas)
    );

    setEstado(nuevoEstado);
  };

  if (!visitaEncontrada) {

    return (
      <IonPage>
        <IonContent className="ion-padding">
          Visita no encontrada
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonButtons slot="start">

            <IonBackButton
              defaultHref="/visitas"
            />

          </IonButtons>

          <IonTitle>
            Detalle de visita
          </IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">

        <h2>{visitaEncontrada.paciente}</h2>

        <p>
          Hora: {visitaEncontrada.hora}
        </p>

        <p>
          Estado: {estado}
        </p>

        {estado !== 'finalizada' && (

          <IonButton
            expand="block"
            onClick={cambiarEstado}
          >

            Cambiar estado

          </IonButton>

        )}

      </IonContent>

    </IonPage>
  );
}

export default VisitDetail;