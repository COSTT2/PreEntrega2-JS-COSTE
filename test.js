const textoHTML = document.getElementById('texto');
const botonesDeOpciones = document.getElementById('opciones');

let estadoUsuario = {}

// -----> OBJETO USUARIO
const usuario = {
    nombre: "",
    inventario: [],
    dinero: 0,
    mascota: false,
};
// <------


//Funcion ara llamar a la funcion que presenta los textos y sus opciones
function comenzarJuego() {
    estadoUsuario = {}
    mostrarTexto(1)
}

//funcion para mostrar los textos 
function mostrarTexto(indiceTexto) {
    //busca los id del texto indicado por parametro para luego modificar el html 
    const textos = desarrollo.find(textos => textos.id === indiceTexto);
    textoHTML.innerText = textos.texto;
    // elimina las opciones para luego llamarlas dependiendo de las que se necesiten
    while (botonesDeOpciones.firstChild) {
        botonesDeOpciones.removeChild(botonesDeOpciones.firstChild)
    };

    // crea objetos dependiendo de las opciones que se necesiten
    textos.opciones.forEach(opcion => {
        if (mostrarOpcion(opcion)) {
            const boton = document.createElement('button')
            boton.innerText = opcion.texto
            boton.classList.add('boton')
            boton.addEventListener('click', () => seleccionarOpcion(opcion))
            botonesDeOpciones.appendChild(boton)
        }
    })
}

// devuelve true si se necesita un estado especifico para poder utilizar esa opcion
function mostrarOpcion(opcion) {
    return opcion.seRequiere == null || opcion.seRequiere(estadoUsuario)
}


function seleccionarOpcion(opcion) {
    const idSiguenteTexto = opcion.siguienteTexto
    if (idSiguenteTexto <= 0) {
        return comenzarJuego()
    }
    // seRequiere = Object.assign(estadoUsuario, opcion.nuevoEstadoUsuario)
    // mostrarTexto(idSiguenteTexto)
}

function agregarObjeto(nuevoObjeto) {
    usuario.inventario.push(nuevoObjeto);
}
function agregarDinero(nuevoDinero) {
    usuario.dinero += nuevoDinero
};
function sacarDinero(dineroAPagar) {
    usuario.dinero -= dineroAPagar
}

const desarrollo = [
    {
        id: 1,
        texto: 'Sales de tu hogar y en la puerta te encuentras una bolsa de tela cerrada',
        opciones: [
            {
                texto: 'Abres la bolsa',
                estado: { monedas: 100 },
                siguienteTexto: 2
            },
            {
                texto: 'Dejas la bolsa atras',
                siguienteTexto: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Has abierto la bolsa y te has encontrado 100 monedas, parece que alguien las ha dejado o se las ha olvidado',
        options: [
            {
                texto: 'continuar tu camino',
                siguienteTexto: 4
            },
            {
                texto: 'ver inventario',
                siguienteTexto: 3
            },

        ]
    },
    // {
    //     id: 3,
    //     text: `Tu inventario hasta el momento cuenta con ${usuario.dinero} monedas y en tu inventario hay: ${usuario.inventario}`,
    //     options: [
    //         {
    //             texto: 'continuar tu camino',
    //             siguienteTexto: siguienteTexto - 1
    //         },
    //     ]
    // },
    // {
    //     id: 4,
    //     text: 'En tu camino te encuentras con una tienda, parece estar abierta, al entrar el comerciante te ofrece un par de objetos a cambio de monedas',
    //     options: [
    //         {
    //             text: 'Comprar unas botas por 40 monedas',
    //             seRequiere: usuario.dinero > 40,
    //             dinero: dineroAPagar(40),
    //             siguienteTexto: 5
    //         },
    //         {
    //             text: 'Comprar un escudo por 60 monedas',
    //             seRequiere: usuario.dinero > 60,
    //             dinero: dineroAPagar(40),
    //             siguienteTexto: 5
    //         },
    //         {
    //             text: 'No tienes monedas, sigues tu camino',
    //             seRequiere: (usuario.dinero < 0),
    //             dinero: dineroAPagar(40),
    //             siguienteTexto: 5
    //         },
    //         {
    //             text: 'Sigues tu camino',
    //             siguienteTexto: 5
    //         }
    //     ]
    // },
]

comenzarJuego()