import { useState } from "react";

function ContactForm({ onAdd }) {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");

    const agregar = () => {
        onAdd(nombre, telefono);

        setNombre("");
        setTelefono("");
    };

    return (
        <>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <button onClick={agregar}>
                Agregar contacto
            </button>
        </>
    );
}

export default ContactForm;