import { useState } from "react";

function Login({ onLogin }) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const iniciarSesion = () => {
        if (usuario === "medico" && password === "1234") {
            setError("");
            onLogin();
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <>
            <h1>MediClinic</h1>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={iniciarSesion}>
                Iniciar sesión
            </button>

            {error && <p>{error}</p>}
        </>
    );
}

export default Login;