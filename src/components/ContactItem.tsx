import {
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react';

interface Contacto {
  id: number;
  nombre: string;
  telefono: string;
}

interface Props {
  contacto: Contacto;
  onDelete: (id: number) => void;
}

function ContactItem({ contacto, onDelete }: Props) {
  return (
    <IonItem>

      <IonLabel>
        <h2>{contacto.nombre}</h2>
        <p>{contacto.telefono}</p>
      </IonLabel>

      <IonButton
        color="danger"
        onClick={() => onDelete(contacto.id)}
      >
        Eliminar
      </IonButton>

    </IonItem>
  );
}

export default ContactItem;