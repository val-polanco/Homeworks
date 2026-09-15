import {
  IonButton,
  IonInput,
  IonItem,
  IonList
} from '@ionic/react';

import { useState } from 'react';

interface Props {
  onAdd: (nombre: string, telefono: string) => void;
}

function ContactForm({ onAdd }: Props) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregar = () => {
    if (nombre.trim() === '' || telefono.trim() === '') {
      return;
    }

    onAdd(nombre, telefono);

    setNombre('');
    setTelefono('');
  };

  return (
    <>
      <IonList>

        <IonItem>
          <IonInput
            label="Nombre"
            labelPlacement="stacked"
            placeholder="Escribe el nombre"
            value={nombre}
            onIonInput={(e) =>
              setNombre(e.detail.value ?? '')
            }
          />
        </IonItem>

        <IonItem>
          <IonInput
            label="Teléfono"
            labelPlacement="stacked"
            placeholder="Escribe el teléfono"
            value={telefono}
            onIonInput={(e) =>
              setTelefono(e.detail.value ?? '')
            }
          />
        </IonItem>

      </IonList>

      <IonButton
        expand="block"
        onClick={agregar}
      >
        Agregar contacto
      </IonButton>
    </>
  );
}

export default ContactForm;