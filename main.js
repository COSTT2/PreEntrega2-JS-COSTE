// Tercera pre entrega - Prueba interactiva de recoleccion de objetos y decisiones para un futuro juego con la adiccion de deteccion de eventos por DOM y estilo html.

// ------> DOM
const textoHTML = document.getElementById("texto");
const botonOpciones = document.getElementById("opciones");
// <-----


// -----> OBJETO USUARIO
const usuario = {
    nombre: "",
    inventario: [],
    dinero: 0,
    mascota: false,
};
// <------

// -----> FUNCIONES UTILIZADAS A LO LARGO DEL PROYECTO
function agregarDinero(nuevoDinero) {
    usuario.dinero += nuevoDinero
};

function sacarDinero(dineroAPagar) {
    usuario.dinero -= dineroAPagar
}

function agregarObjeto(nuevoObjeto) {
    usuario.inventario.push(nuevoObjeto);
}

function mostrarInvetario() {
    if (usuario.inventario.length != 0) {
        return (alert(`Tienes ${usuario.dinero} monedas y en tu inventario hay: ${usuario.inventario}`));
    } else {
        return (alert(`Tienes ${usuario.dinero} monedas`));
    }
};
// <------

// ----> FUNCION CONSTRUCTIVA DE OBJETO PARA FUTURA MASCOTA
function Mascota(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
};
// <------

// ----> INICIO
alert("Bienvenido al simulador interactivo donde realizaras decisiones, este es una prueba para un futuro juego. Pulsa aceptar para continuar");
usuario.nombre = prompt("Antes de empezar, cual es tu nombre?");
alert(`Bienvenido al simulador ${usuario.nombre}`);
// <-----


//PREMIO INICIAL
let premio = parseInt(prompt("Caminando por las afueras de tu hogar te encuentras a un señor, este te ofrece la posibilidad de elegir una caja, de las que puedes elegir 1 entre 3 solamente. (escribe 1, 2 o 3 para elegir)."));

if (premio == 1) {
    agregarDinero(100);
    alert("Has elegido la primera caja, la abres y encuentras 100 monedas!");
    mostrarInvetario();

} else if (premio == 2) {
    agregarDinero(150);
    agregarObjeto("pan");
    alert("Has elegido la segunda caja, la abres y encuentras 150 monedas y un pan!");
    mostrarInvetario();

} else if (premio == 3) {
    agregarDinero(80);
    alert("Has elegido la tercera caja, la abres y encuentras 80 monedas!");
    mostrarInvetario();
} else {
    alert("Confundido, sigues tu camino");
};
// <-----

//ADQUIRIR OBJETOS
let bolsa = prompt("Mientras caminas te encuentras una bolsa tirada, la abres? si/no").toLowerCase();

if (bolsa == "si") {
    agregarObjeto("manzana");
    agregarObjeto("manzana");
    alert("Adentro de la bolsa habian dos manzanas, las agregas a tu mochila");
    mostrarInvetario();
} else {
    alert("sigues tu camino y dejas la bolsa sin tocar");
};
// <-----


// ----- > OBJETO TIENDA
const tienda = {
    entra: false,
    productos: [{ nombre: "", precio: 10 }, { nombre: "Abrigo", precio: 20 }, { nombre: "Botas", precio: 15 }, { nombre: "Agua", precio: 5 }, { nombre: "Comida para mascota", precio: 10 }],
    dineroAPagar: 0,
    carrito: [],
};
// <-----

// ----> FUNCIONES DE LA TIENDA
// ---- funcion para saber si el usuario entra a la tienda
let opTienda = prompt("Pasas por una tienda, quieres entrar? si/no").toLowerCase();
if (opTienda == "si") {
    tienda.entra = true;
} else {
    tienda.entra = false;
};

// ----- funcion para mostrar los objetos disponibles
function mostrarProductos() {
    for (const producto of tienda.productos) {
        if (producto.nombre != "") {
            alert(`${producto.nombre} y vale ${producto.precio}`);
        };
    };
};

// ----- funcion para comprar productos
const comprar = (index) => {
    if (index != -1) {
        if (usuario.dinero >= tienda.productos[index].precio) {
            sacarDinero(tienda.productos[index].precio);
            agregarObjeto(tienda.productos[index].nombre);
            alert(`Has comprado ${tienda.productos[index].nombre} por ${tienda.productos[index].precio} monedas`);
            tienda.productos.splice(index, 1);
            mostrarInvetario();
        } else {
            // SI EL USUARIO NO TIENE SUFICIENTES MONEDAS
            let elec1 = prompt("Perdon pero no tienes suficientes monedas para comprar ese objeto, quieres ver otro producto? (escribe si o no)");
            if (elec1 == "si") {
                alert(`A ver si hay algo de su gusto!`);
                mostrarProductos();
                let eleccion2 = prompt("Quieres comprar algo? (escribir si o no)")
                if (eleccion2 == "no") {
                    alert("Esta bien, hasta la proxima viajero!");
                    alert("Dejas la tienda atras y sigues tu camino.");
                } else {
                    let productoCompra2 = prompt(`Perfecto!, que quieres comprar? ${tienda.productos[1].nombre}, ${tienda.productos[2].nombre}, ${tienda.productos[3].nombre}, ${tienda.productos[4].nombre} (escribir 1, 2, 3 o 4 )`);
                    comprar(productoCompra2);
                };

            } else {
                alert("Esta bien, hasta la proxima viajero!");
                mostrarInvetario();
                alert("Dejas la tienda atras y sigues tu camino.");
            };
        };
    } else {
        alert("ese producto no lo tengo lamentablemente")
        let elec2 = prompt("Quieres ver otro producto? (escribe si o no)");
        if (elec2 == "si") {

        } else {
            alert("Esta bien, hasta la proxima viajero!");
            mostrarInvetario();
            alert("Dejas la tienda atras y sigues tu camino.");
        };
    };
}
// <-----


// ----> DESARROLLO DE LA TIENDA
if (tienda.entra == true) {

    // si el usuario entra
    alert("Bienvenido a la tienda, te mostraré los objetos que puede comprar");
    mostrarInvetario();
    alert(`Tenemos ${nmb = (tienda.productos.length) - 1} productos disponibles en este momento`);
    mostrarProductos();
    let eleccion = prompt("Quieres comprar algo? (escribir si o no)")

    // si el usuario luego de entrar decide irse
    if (eleccion == "no") {
        alert("Esta bien, hasta la proxima viajero!");
        alert("Dejas la tienda atras y sigues tu camino.");
        mostrarInvetario();
    } else {
        let productoCompra = prompt(`Perfecto!, que quieres comprar? ${tienda.productos[1].nombre}, ${tienda.productos[2].nombre}, ${tienda.productos[3].nombre}, ${tienda.productos[4].nombre} (escribir 1, 2, 3 o 4 )`);
        comprar(productoCompra);
    };

    // si el usuario no entra
} else if (tienda.entra == false) {
    alert("Dejas la tienda atras y sigues tu camino.");
    mostrarInvetario();
};

// let elecCamino = prompt("Mientras caminas regresando a tu hogar escuchas un ruido extraño a la distancia, quieres ir a investigar? (si o no");

// if (elecCamino == "si"){
//     if ((usuario.inventario.includes("pan")) or (usuario.inventario.includes("manzana")));
//     let elecCamino1 = prompt("vas a investigar y te encuentras atras de un arbol escondido a un perro cachorro, parece que tiene hambre")
// } else if (elecCamino == "no") {

// } else if (elecCamino == ""){

// }

// let elecMascota = prompt("")