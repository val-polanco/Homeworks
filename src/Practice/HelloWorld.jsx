const nombreApp = "Contactos React";
const version = 1;

function HelloWorld() {
    return (
        <>
            <h1>Hola Mi Nombre es Valeria</h1>
            <p>Esta es mi primera aplicación en React</p>

            <h2>{nombreApp}</h2>
            
            <p>Versión: {version}</p>
        </>
    );
}

export default HelloWorld;