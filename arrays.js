const frutas = ["manzana", "pera", "uva"];

console.log("Array original:");
console.log(frutas);

// PUSH: agrega un elemento al final
frutas.push("mango");
console.log("Después de push:");
console.log(frutas);

// POP: elimina el último elemento
const frutaEliminada = frutas.pop();
console.log("Elemento eliminado con pop:");
console.log(frutaEliminada);

console.log("Después de pop:");
console.log(frutas);

// CONCAT: une dos arrays
const frutasTropicales = ["piña", "papaya"];
const todasLasFrutas = frutas.concat(frutasTropicales);

console.log("Resultado de concat:");
console.log(todasLasFrutas);

console.log("\n--- SHIFT ---");

const colores = ["rojo", "verde", "azul"];

const primerColor = colores.shift();

console.log("Elemento eliminado:");
console.log(primerColor);

console.log("Array después de shift:");
console.log(colores);


console.log("\n--- UNSHIFT ---");

colores.unshift("amarillo");

console.log("Array después de unshift:");
console.log(colores);


console.log("\n--- SLICE ---");

const numeros = [10, 20, 30, 40, 50];

const parte = numeros.slice(1, 4);

console.log("Array original:");
console.log(numeros);

console.log("Resultado de slice:");
console.log(parte);


console.log("\n--- SPLICE ---");

const animales = ["perro", "gato", "conejo"];

animales.splice(1, 1, "tigre");

console.log("Resultado de splice:");
console.log(animales);

console.log("\n--- FOREACH ---");

const nombres = ["Ana", "Luis", "Carlos"];

nombres.forEach((nombre) => {
    console.log(nombre);
});


console.log("\n--- MAP ---");

const numerosMap = [1, 2, 3, 4];

const dobles = numerosMap.map((numero) => {
    return numero * 2;
});

console.log("Array original:");
console.log(numerosMap);

console.log("Array con el doble:");
console.log(dobles);


console.log("\n--- FILTER ---");

const edades = [15, 22, 17, 30, 18];

const mayoresDeEdad = edades.filter((edad) => {
    return edad >= 18;
});

console.log("Edades:");
console.log(edades);

console.log("Mayores de edad:");
console.log(mayoresDeEdad);


console.log("\n--- FIND ---");

const numerosFind = [5, 8, 12, 20];

const encontrado = numerosFind.find((numero) => {
    return numero > 10;
});

console.log("Primer número mayor que 10:");
console.log(encontrado);

console.log("\n--- SOME ---");

const notas = [2.5, 3.0, 4.2, 2.8];

const hayNotaAlta = notas.some((nota) => {
    return nota >= 4;
});

console.log(hayNotaAlta);


console.log("\n--- EVERY ---");

const edadesGrupo = [20, 25, 19, 30];

const todosMayores = edadesGrupo.every((edad) => {
    return edad >= 18;
});

console.log(todosMayores);


console.log("\n--- INCLUDES ---");

const lenguajes = ["JavaScript", "Python", "C#"];

console.log(lenguajes.includes("Python"));
console.log(lenguajes.includes("Java"));


console.log("\n--- INDEXOF ---");

const animalesIndex = ["perro", "gato", "conejo"];

console.log(animalesIndex.indexOf("gato"));
console.log(animalesIndex.indexOf("tigre"));


console.log("\n--- FINDINDEX ---");

const numerosIndice = [5, 8, 12, 20];

const posicion = numerosIndice.findIndex((numero) => {
    return numero > 10;
});

console.log("Posición del primer número mayor que 10:");
console.log(posicion);


console.log("\n--- FINDLAST ---");

const numerosUltimo = [5, 12, 8, 20, 3];

const ultimoEncontrado = numerosUltimo.findLast((numero) => {
    return numero > 10;
});

console.log("Último número mayor que 10:");
console.log(ultimoEncontrado);


console.log("\n--- FINDLASTINDEX ---");

const ultimaPosicion = numerosUltimo.findLastIndex((numero) => {
    return numero > 10;
});

console.log("Posición del último número mayor que 10:");
console.log(ultimaPosicion);


console.log("\n--- AT ---");

const ciudades = ["Cali", "Bogotá", "Medellín", "Pereira"];

console.log("Primera ciudad:");
console.log(ciudades.at(0));

console.log("Última ciudad:");
console.log(ciudades.at(-1));

console.log("\n--- JOIN ---");

const tecnologias = ["HTML", "CSS", "JavaScript"];

const textoTecnologias = tecnologias.join(" - ");

console.log(textoTecnologias);


console.log("\n--- LASTINDEXOF ---");

const numerosRepetidos = [10, 20, 30, 20, 40];

const ultimaPosicion20 = numerosRepetidos.lastIndexOf(20);

console.log("Última posición del número 20:");
console.log(ultimaPosicion20);


console.log("\n--- REVERSE ---");

const letras = ["A", "B", "C", "D"];

console.log("Array original:");
console.log(letras);

letras.reverse();

console.log("Array invertido:");
console.log(letras);


console.log("\n--- SORT ---");

const nombresOrdenados = ["Carlos", "Ana", "Pedro", "Beatriz"];

console.log("Antes de sort:");
console.log(nombresOrdenados);

nombresOrdenados.sort();

console.log("Después de sort:");
console.log(nombresOrdenados);

console.log("\n--- REDUCE ---");

const precios = [100, 200, 300, 400];

const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
}, 0);

console.log("Total:");
console.log(total);


console.log("\n--- REDUCERIGHT ---");

const palabras = ["Hola", "Mundo", "JavaScript"];

const resultadoDerecha = palabras.reduceRight((acumulador, palabra) => {
    return acumulador + " " + palabra;
}, "");

console.log(resultadoDerecha);


console.log("\n--- FLAT ---");

const numerosAnidados = [1, 2, [3, 4], [5, 6]];

const numerosPlanos = numerosAnidados.flat();

console.log("Array original:");
console.log(numerosAnidados);

console.log("Array plano:");
console.log(numerosPlanos);


console.log("\n--- FLATMAP ---");

const numerosFlatMap = [1, 2, 3];

const resultadoFlatMap = numerosFlatMap.flatMap((numero) => {
    return [numero, numero * 2];
});

console.log(resultadoFlatMap);

console.log("\n--- FILL ---");

const espacios = [1, 2, 3, 4, 5];

espacios.fill(0, 1, 4);

console.log(espacios);


console.log("\n--- COPYWITHIN ---");

const letrasCopy = ["A", "B", "C", "D", "E"];

letrasCopy.copyWithin(0, 3);

console.log(letrasCopy);


console.log("\n--- ENTRIES ---");

const materias = ["Programación", "Diseño", "Redes"];

for (const entrada of materias.entries()) {
    console.log(entrada);
}


console.log("\n--- KEYS ---");

for (const posicion of materias.keys()) {
    console.log(posicion);
}


console.log("\n--- VALUES ---");

for (const materia of materias.values()) {
    console.log(materia);
}


console.log("\n--- TOSTRING ---");

const numerosTexto = [10, 20, 30];

const convertidoTexto = numerosTexto.toString();

console.log(convertidoTexto);


console.log("\n--- TOLOCALESTRING ---");

const preciosLocale = [1000, 2000, 3000];

console.log(preciosLocale.toLocaleString());

console.log("\n--- LENGTH ---");

const animalesLength = ["perro", "gato", "conejo"];

console.log("Cantidad de elementos:");
console.log(animalesLength.length);


console.log("\n--- CONSTRUCTOR ---");

console.log(animalesLength.constructor);

