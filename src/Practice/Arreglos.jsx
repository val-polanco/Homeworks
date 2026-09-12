import { useState } from "react";

function Arreglos() {
    const [frutas, setFrutas] = useState(["Manzana", "Pera"]);
    const [nuevaFruta, setNuevaFruta] = useState("");

    const agregarFruta = () => {
        setFrutas([...frutas, nuevaFruta]);
        setNuevaFruta("");
    };

    return (
        <>
            <h2>Lista de frutas</h2>

            <input
                type="text"
                placeholder="Escribe una fruta"
                value={nuevaFruta}
                onChange={(e) => setNuevaFruta(e.target.value)}
            />

            <button onClick={agregarFruta}>
                Agregar fruta
            </button>

            <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>
                        {fruta}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Arreglos;