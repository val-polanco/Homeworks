import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

function Tab2() {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Pacientes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h2>Pacientes</h2>

        <p>
          Consulta de pacientes de MediClinic.
        </p>

        <p>
          La información de esta aplicación es independiente
          de la PWA.
        </p>

      </IonContent>

    </IonPage>
  );
}

export default Tab2;