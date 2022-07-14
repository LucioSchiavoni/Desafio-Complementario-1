class Alfajor {
    constructor(nombre, tipo, precio, stock) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
    }
}
const alfajores1 = new Alfajor("havanna cacao", "70% cacao", 60, 4);
const alfajores2 = new Alfajor("havanna super", "dulce de leche", 50, 5);
const alfajores3 = new Alfajor("havanna clasico", "chocolate", 40, 10);
const alfajores4 = new Alfajor("havanna blanco", "merengue", 30, 10);
const alfajores5 = new Alfajor("havanna nuez", "nueces", 50, 6);

const alfajores = [alfajores1, alfajores2, alfajores3, alfajores4, alfajores5];

///Array-Buscar///
function BuscarAlfajor(alfajores) {
    let NombreAlfajor = prompt("Que alfajor desea").toLowerCase();
    console.log(NombreAlfajor);
    let AlfajorBuscado = alfajores.find(
        (alfajor) => alfajor.nombre == NombreAlfajor
    );
    console.log(AlfajorBuscado);
    if (AlfajorBuscado === undefined) {
        console.log("Este alfajor no se encuentra");
    } else {
        alert(`Genial, seleccionaste ${AlfajorBuscado.nombre}`);
    }
}

///Array-Precio///
function PrecioAlfajor(alfajores) {
    let BuscarPrecio = parseFloat(prompt("Ingrese el precio que busca"));
    let EncontrarPrecio = alfajores.filter(
        (alfajores) => alfajores.precio >= BuscarPrecio
    );

    if (EncontrarPrecio.length == 0) {
        console.log("No se encuentra");
    } else {
        console.log(EncontrarPrecio);
    }
}
////Array-Ordenar///
function OrdenarPrecios(alfajores) {
    let Ordenar = parseInt(
        prompt(
            "Ingrese 1 para ordenar de menor a mayor precio, 2 para ordenar de mayor a menor precio"
        )
    );

    if (Ordenar === 1) {
        console.log(alfajores.sort((a, b) => a.precio - b.precio));
    } else if (Ordenar === 2) {
        console.log(alfajores.sort((a, b) => b.precio - a.precio));
    }
}

let respuesta;
do {
    respuesta = parseInt(
        prompt(`Ingrese una opcion:
    1-Buscar Alfajor
    2-Buscar Precio
    3-Ordenar Precios
    `)
    );
} while (respuesta < 1 || respuesta > 3);

switch (respuesta) {
    case 1:
        BuscarAlfajor(alfajores);
        break;
    case 2:
        PrecioAlfajor(alfajores);
        break;
    case 3:
        OrdenarPrecios(alfajores);
        break;
    default:
        alert("Opcion no valida");
        break;
}