import { useEffect, useState } from "react";
import Login from "./Components/Login";
import PatientForm from "./Components/PatientForm";
import PatientList from "./Components/PatientList";

function App() {
    const [sesion, setSesion] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const sesionGuardada = localStorage.getItem("sesion");
        const pacientesGuardados = localStorage.getItem("pacientes");

        if (sesionGuardada === "true") {
            setSesion(true);
        }

        if (pacientesGuardados) {
            setPacientes(JSON.parse(pacientesGuardados));
        }
    }, []);

    const iniciarSesion = () => {
        localStorage.setItem("sesion", "true");
        setSesion(true);
    };

    const cerrarSesion = () => {
        localStorage.removeItem("sesion");
        setSesion(false);
    };

    const agregarPaciente = (nuevoPaciente) => {
        const nuevosPacientes = [...pacientes, nuevoPaciente];

        setPacientes(nuevosPacientes);

        localStorage.setItem(
            "pacientes",
            JSON.stringify(nuevosPacientes)
        );
    };

    const pacientesFiltrados = pacientes.filter((paciente) => {
        const texto = busqueda.toLowerCase();

        return (
            paciente.nombre.toLowerCase().includes(texto) ||
            paciente.apellido.toLowerCase().includes(texto) ||
            paciente.cc.includes(busqueda)
        );
    });

    if (!sesion) {
        return <Login onLogin={iniciarSesion} />;
    }

    return (
        <>
            <h1>MediClinic - Pacientes</h1>

            <button onClick={cerrarSesion}>
                Cerrar sesión
            </button>

            <PatientForm
                onAdd={agregarPaciente}
            />

            <h2>Buscar paciente</h2>

            <input
                type="text"
                placeholder="Buscar por nombre, apellido o CC"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <PatientList
                pacientes={pacientesFiltrados}
            />
        </>
    );
}

export default App;