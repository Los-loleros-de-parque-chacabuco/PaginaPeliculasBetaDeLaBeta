/*VALIDACION INICIO */
// D O M

// Datos del usuario ya registrado anteriormente
const usurioRegistradoEmail = "usuario@gmail.com"
const usurioRegistradoContrasena = "usuario123"

// busco por id los inputs y botones
let email = document.getElementById("email")
let contrasena = document.getElementById("contrasena")
let iniciarSesionBoton = document.getElementById("iniciarSesion")
let registrarse = document.getElementById("registrarse")

let confirmarInicio = () => {
    // guardamos el valor que escribió en el input el usuario, dentro de una variable
        var emailRes = email.value;
        var constrasenaRes = contrasena.value
        // si coincide el valor escrito por el usuario con el valor del usuario ya registrado entonces se redirecciona a la página principal, sin, se manda un alert
    if (emailRes == usurioRegistradoEmail && constrasenaRes=== usurioRegistradoContrasena) {
        window.location.href = "./pagina_principal.html";
    }
    else {
        alert("noooo amigo, te equivocaste, vuelve a casa")
    }
}

iniciarSesionBoton.onclick= ()=>{
confirmarInicio()
}

/* INICIO DE CARRITO */

const carrito = [];
const ValoresPeliculas = [
    250,
    300,
    500,
    550,
    600,
    450,
    700,
    340,
    470,
    640,
    560,
    300
]
const ValoresSeries = [
    350,
    500,
    800,
    750,
    600,
    850,
    500,
    840,
    770,
    940,
    560,
    600
]
const Peliculas = [
    'Corre',
    'Volver al Futuro',
    'Avengers',
    'Harry Potter y el prisionero de azkaban',
    'Busqueda implacable',
    'Halloween kills',
    'Bajo la misma estrella',
    'Coco',
    'Siempre a tu lado',
    'Hasta el ultimo hombre',
    'Grandes heroes',
    'Yo antes de ti'
]
const Series = [
    'La casa de papel',
    'Stranger things',
    'Friends',
    'Game of thrones',
    'El juego del calamar',
    'Mr robot',
    'How i met your mother',
    'The rain',
    'Dama de gambito',
    'Sex education',
    'Love on the Spectrum',
    'Peaky Blinders'
]
let factura = 0
function carritoCompra() {
    var eleccion = confirm("Que desea comprar:\n Peliculas (Clickear Aceptar)\n Series (Clickear Cancelar")
    if (eleccion === true) {
        do {
            var compraPeli = prompt("Ingrese el numero dependiendo de la pelicula \n 1:Corre \n 2:Volver al futuro \n 3:Avengers \n 4:Harry potter \n 5:Busqueda implacable \n 6:Halloween kills \n 7:Bajo la misma estrella \n 8:Coco \n 9:Siempre a tu lado \n 10:Hasta el ultimo hombre \n 11:Grandes heroes \n 12:Yo antes de ti")
            switch (compraPeli) {
                case "1":
                    var pelicula1 = confirm("La pelicula cuesta $250, Queres comprarla?")
                    if (pelicula1 === true) {
                        factura += ValoresPeliculas[0]
                        carrito.push(Peliculas[0])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "2":
                    var pelicula2 = confirm("La pelicula cuesta $300, Queres comprarla?")
                    if (pelicula2 === true) {
                        factura += ValoresPeliculas[1];
                        carrito.push(Peliculas[1])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "3":
                    var pelicula3 = confirm("La pelicula cuesta $500, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[2];
                        carrito.push(Peliculas[2])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "4":
                    var pelicula3 = confirm("La pelicula cuesta $550, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[3];
                        carrito.push(Peliculas[3])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "5":
                    var pelicula3 = confirm("La pelicula cuesta $600, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[4];
                        carrito.push(Peliculas[4])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "6":
                    var pelicula3 = confirm("La pelicula cuesta $450, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[5];
                        carrito.push(Peliculas[5])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "7":
                    var pelicula3 = confirm("La pelicula cuesta $700, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[6];
                        carrito.push(Peliculas[6])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "8":
                    var pelicula3 = confirm("La pelicula cuesta $340, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[7];
                        carrito.push(Peliculas[7])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "9":
                    var pelicula3 = confirm("La pelicula cuesta $470, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[8];
                        carrito.push(Peliculas[8])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "10":
                    var pelicula3 = confirm("La pelicula cuesta $640, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[9];
                        carrito.push(Peliculas[9])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "11":
                    var pelicula3 = confirm("La pelicula cuesta $560, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[10];
                        carrito.push(Peliculas[10])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "12":
                    var pelicula3 = confirm("La pelicula cuesta $300, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += ValoresPeliculas[11];
                        carrito.push(Peliculas[11])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                default:
                    alert("Mastodonte ingresa un numero del 1 al 10, Capichi?")
                    break;
            }
            var confirmar = confirm("Desea comprar algo mas?");
        } while (confirmar === true);
    } else {
        do {
            var compraSerie = prompt("Ingrese el numero dependiendo de la serie \n 1:La casa de papel\n 2:Stranger things \n 3:Friends \n 4:Game of thrones \n 5:El juego del calamar \n 6:Mr robot \n 7:How i met your mother \n 8:The rain \n 9:Dama de gambito \n 10:Sex education \n 11:Love on the sectrum \n 12:Peaky blinders")
            switch (compraSerie) {
                case "1":
                    var series1 = confirm("La serie cuesta $350, Queres comprarla?")
                    if (series1 === true) {
                        factura += ValoresSeries[0];
                        carrito.push(Series[0])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "2":
                    var series2 = confirm("La serie cuesta $500, Queres comprarla?")
                    if (series2 === true) {
                        factura += ValoresSeries[1];
                        carrito.push(Series[1])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "3":
                    var series3 = confirm("La serie cuesta $800, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[2];
                        carrito.push(Series[2])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "4":
                    var series3 = confirm("La serie cuesta $750, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[3];
                        carrito.push(Series[3])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "5":
                    var series3 = confirm("La serie cuesta $600, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[4];
                        carrito.push(Series[4])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "6":
                    var series3 = confirm("La serie cuesta $850, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[5];
                        carrito.push(Series[5])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "7":
                    var series3 = confirm("La serie cuesta $500, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[6];
                        carrito.push(Series[6])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "8":
                    var series3 = confirm("La serie cuesta $840, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[7];
                        carrito.push(Series[7])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "9":
                    var series3 = confirm("La serie cuesta $770, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[8];
                        carrito.push(Series[8])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "10":
                    var series3 = confirm("La serie cuesta $940, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[9];
                        carrito.push(Series[9])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "11":
                    var series3 = confirm("La serie cuesta $560, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[10];
                        carrito.push(Series[10])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                case "12":
                    var series3 = confirm("La serie cuesta $600, Queres comprarla?")
                    if (series3 === true) {
                        factura += ValoresSeries[11];
                        carrito.push(Series[11])
                    } else {
                        alert("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                default:
                    alert("Mastodonte ingresa un numero del 1 al 10, Capichi?")
                    break;
            }
            var confirmar2 = confirm("Desea comprar algo mas?");
        } while (confirmar2 === true);
    }
    alert("Compraste estos films: " + carrito + "\n" + "El precio final es: " + factura + " pesos")
}