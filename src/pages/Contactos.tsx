import {
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useEffect, useState } from 'react';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

interface Contacto {
  id: number;
  nombre: string;
  telefono: string;
}

function Contactos() {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setContactos([
        {
          id: 1,
          nombre: 'Ana',
          telefono: '3001234567'
        },
        {
          id: 2,
          nombre: 'Carlos',
          telefono: '3159876543'
        }
      ]);

      setCargando(false);

    }, 1500);
  }, []);

  const agregarContacto = (
    nombre: string,
    telefono: string
  ) => {

    const nuevoContacto = {
      id: Date.now(),
      nombre,
      telefono
    };

    setContactos([
      ...contactos,
      nuevoContacto
    ]);
  };

  const eliminarContacto = (id: number) => {

    setContactos(
      contactos.filter(
        (contacto) => contacto.id !== id
      )
    );
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Mis Contactos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        {cargando ? (

          <div style={{ textAlign: 'center' }}>
            <IonSpinner />
            <p>Cargando contactos...</p>
          </div>

        ) : (

          <>
            <ContactForm
              onAdd={agregarContacto}
            />

            <ContactList
              contactos={contactos}
              onDelete={eliminarContacto}
            />
          </>

        )}

      </IonContent>

    </IonPage>
  );
}

export default Contactos;