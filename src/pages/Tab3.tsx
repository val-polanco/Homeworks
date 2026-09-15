import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

function Tab3() {

  const cerrarSesion = () => {
    localStorage.removeItem('ionicSesion');

    window.location.reload();
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h2>Perfil médico</h2>

        <p>
          Usuario: medico
        </p>

        <IonButton
          expand="block"
          color="tertiary"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </IonButton>

      </IonContent>

    </IonPage>
  );
}

export default Tab3;