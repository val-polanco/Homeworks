function PatientList({ pacientes }) {
    return (
        <>
            <h2>Pacientes</h2>

            {pacientes.length === 0 ? (
                <p>No hay pacientes</p>
            ) : (
                <ul>
                    {pacientes.map((paciente) => (
                        <li key={paciente.id}>
                            {paciente.nombre} {paciente.apellido}
                            {" - CC: "}
                            {paciente.cc}
                            {" - Tel: "}
                            {paciente.telefono}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default PatientList;