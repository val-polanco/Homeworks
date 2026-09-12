import { useState } from "react";

function PatientForm({ onAdd }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cc, setCc] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");

    const agregarPaciente = () => {
        if (
            nombre.trim() === "" ||
            apellido.trim() === "" ||
            cc.trim() === ""
        ) {
            setError("Nombre, apellido y CC son obligatorios");
            return;
        }

        const nuevoPaciente = {
            id: Date.now(),
            nombre,
            apellido,
            cc,
            telefono
        };

        onAdd(nuevoPaciente);

        setNombre("");
        setApellido("");
        setCc("");
        setTelefono("");
        setError("");
    };

    return (
        <>
            <h2>Agregar paciente</h2>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />

            <input
                type="text"
                placeholder="CC"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
            />

            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <button onClick={agregarPaciente}>
                Agregar paciente
            </button>

            {error && <p>{error}</p>}
        </>
    );
}

export default PatientForm;