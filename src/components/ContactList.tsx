import { IonList } from '@ionic/react';
import ContactItem from './ContactItem';

interface Contacto {
  id: number;
  nombre: string;
  telefono: string;
}

interface Props {
  contactos: Contacto[];
  onDelete: (id: number) => void;
}

function ContactList({ contactos, onDelete }: Props) {
  return (
    <IonList>

      {contactos.map((contacto) => (
        <ContactItem
          key={contacto.id}
          contacto={contacto}
          onDelete={onDelete}
        />
      ))}

    </IonList>
  );
}

export default ContactList;