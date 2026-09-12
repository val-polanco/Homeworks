import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <>
            <h2>Contador: {contador}</h2>

            <button onClick={() => setContador(contador + 1)}>
                Sumar
            </button>
        </>
    );
}

export default Contador;