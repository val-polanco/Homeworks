import ContactItem from "./ContactItem";

function ContactList({ contactos, onDelete }) {
    return (
        <ul>
            {contactos.map((contacto) => (
                <ContactItem
                    key={contacto.id}
                    contacto={contacto}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default ContactList;