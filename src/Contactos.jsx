import { useEffect, useState } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

function Contactos() {
    const [contactos, setContactos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const contactosIniciales = [
                {
                    id: 1,
                    nombre: "Ana",
                    telefono: "3001234567"
                },
                {
                    id: 2,
                    nombre: "Carlos",
                    telefono: "3159876543"
                }
            ];

            setContactos(contactosIniciales);
            setCargando(false);
        }, 2000);
    }, []);

    const agregarContacto = (nombre, telefono) => {
        const nuevoContacto = {
            id: Date.now(),
            nombre: nombre,
            telefono: telefono
        };

        setContactos([...contactos, nuevoContacto]);
    };

    const eliminarContacto = (id) => {
        const nuevosContactos = contactos.filter((contacto) => {
            return contacto.id !== id;
        });

        setContactos(nuevosContactos);
    };

    if (cargando) {
        return <h2>Cargando contactos...</h2>;
    }

    return (
        <>
            <h1>Mis Contactos</h1>

            <ContactForm
                onAdd={agregarContacto}
            />

            <ContactList
                contactos={contactos}
                onDelete={eliminarContacto}
            />
        </>
    );
}

export default Contactos;