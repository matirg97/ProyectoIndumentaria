
//Variables y constantes.

const valorPantalones = 8995;
const valorRemeras = 3995;
const valorZapatillas = 9995;


//Objeto para las prendas
class Prenda {
    constructor(id, producto, tamanio, color, stock, precio) {

        this.id = id;
        this.producto = producto;
        this.tamanio = tamanio;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
    }

    restaDeStock() {
        this.stock = this.stock - 1;
    }
}

//Pantalones

const jean00 = new Prenda("jean00", "Jean Indigo", 30, "Azul", 15, 8995);
const jean01 = new Prenda("jean01", "Jean Indigo", 32, "Azul", 15, 8995);
const jean02 = new Prenda("jean02", "Jean Indigo", 34, "Azul", 15, 8995);
const jean03 = new Prenda("jean03", "Jean Indigo", 36, "Azul", 15, 8995);

const chino00 = new Prenda("chino00", "Chino", 30, "Beige", 15, 8995);
const chino01 = new Prenda("chino01", "Chino", 32, "Beige", 15, 8995);
const chino02 = new Prenda("chino02", "Chino", 34, "Beige", 15, 8995);
const chino03 = new Prenda("chino03", "Chino", 36, "Beige", 15, 8995);

let arrayPantalones = [jean00, jean01, jean02, jean03, chino00, chino01 ,chino02, chino03];

//Remeras

const remera01B = new Prenda("remera00B", "Remera Básica", "M", "Negro", 15, 3995);
const remera00B = new Prenda("remera01B", "Remera Básica", "S", "Negro", 15, 3995);
const remera02B = new Prenda("remera02B", "Remera Básica", "L", "Negro", 15, 3995);
const remera03B = new Prenda("remera03B", "Remera Básica", "XL", "Negro", 15, 3995);

const remera00R = new Prenda("remera00R" ,"Remera Rayada", "S", "Blanca", 15, 3995);
const remera01R = new Prenda("remera01R" ,"Remera Rayada", "M", "Blanca", 15, 3995);
const remera02R = new Prenda("remera02R" ,"Remera Rayada", "L", "Blanca", 15, 3995);
const remera03R = new Prenda("remera03R" ,"Remera Rayada", "XL", "Blanca", 15, 3995);

let arrayRemeras = [remera00B, remera01B, remera02B, remera03B, remera00R, remera01R, remera02R, remera03R];

//Zapatillas

const zapatillas00D = new Prenda("zapatillas00D" ,"Daddy shoes", 40, "Negro", 15, 9995);
const zapatillas01D = new Prenda("zapatillas01D" ,"Daddy shoes", 41, "Negro", 15, 9995);
const zapatillas02D = new Prenda("zapatillas02D" ,"Daddy shoes", 42, "Negro", 15, 9995);
const zapatillas03D = new Prenda("zapatillas03D" ,"Daddy shoes", 43, "Negro", 15, 9995);
const zapatillas04D = new Prenda("zapatillas04D" ,"Daddy shoes", 44, "Negro", 15, 9995);

const zapatillas00B = new Prenda("zapatilllas00B","Calzado Bryan", 40, "Verde", 15, 9995);
const zapatillas01B = new Prenda("zapatilllas01B","Calzado Bryan", 41, "Verde", 15, 9995);
const zapatillas02B = new Prenda("zapatilllas02B","Calzado Bryan", 42, "Verde", 15, 9995);
const zapatillas03B = new Prenda("zapatilllas03B","Calzado Bryan", 43, "Verde", 15, 9995);
const zapatillas04B = new Prenda("zapatilllas04B","Calzado Bryan", 44, "Verde", 15, 9995);

let arrayZapatillas = [zapatillas00D, zapatillas01D, zapatillas02D, zapatillas03D, zapatillas04D, zapatillas00B, zapatillas01B, zapatillas02B,zapatillas03B, zapatillas04B];

//Finaliza el objeto.


//Variables que toman los value de los select pertenecientes al HTML.
valueJean0 = document.getElementById("talleJean");

valueChino0 = document.getElementById("talleChino");

valueRemera0R = document.getElementById("talleRemeraRayada");

valueRemera0B = document.getElementById("talleRemeraBasica");

valueZapatillas0B = document.getElementById("talleZapatillasBryan");

valueZapatillas0D = document.getElementById("talleZapatillasDaddyShoes");

//Función que agrega los jeans al carrito con sus respectivos talles/stock.
function jeanAlCarrito(){
    
    if (valueJean0.value == "30" ) {

        shoppingCart.push(jean00);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "32"){

        shoppingCart.push(jean01);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "34" ){

        shoppingCart.push(jean02);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueJean0.value == "36"){

        shoppingCart.push(jean03);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleJean").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleJean").fadeIn("slow")
        .fadeOut("slow");
    }

}

//Función que agrega los chinos al carrito con sus respectivos talles/stock.
function chinoAlCarrito (){

    if (valueChino0.value == "30" ) {

        shoppingCart.push(chino00);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "32"){

        shoppingCart.push(chino01);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "34" ){

        shoppingCart.push(chino02);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueChino0.value == "36"){

        shoppingCart.push(chino03);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleChino").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleChino").fadeIn("slow")
        .fadeOut("slow");
    }

}

//Función que agrega las remeras rayadas al carrito con sus respectivos talles/stock.
function remeraRayadaAlCarrito() {

    if (valueRemera0R.value == "S" ) {

        shoppingCart.push(remera00R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "M"){

        shoppingCart.push(remera01R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "L" ){

        shoppingCart.push(remera02R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0R.value == "XL"){

        shoppingCart.push(remera03R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleRR").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleRemeraRayada").fadeIn("slow")
        .fadeOut("slow");
    }

}

//Función que agrega las remeras basicas al carrito con sus respectivos talles/stock.
function remeraBasicaAlCarrito(){

    if (valueRemera0B.value == "S" ) {

        shoppingCart.push(remera00B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "M"){

        shoppingCart.push(remera01B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "L" ){

        shoppingCart.push(remera02B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueRemera0B.value == "XL"){

        shoppingCart.push(remera03B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleRB").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleRemeraBasica").fadeIn("slow")
        .fadeOut("slow");
    }

}

//Función que agrega a las zapatillas bryan al carrito con sus respectivos talles/stock.
function zapatillasBryanAlCarrito(){

    if (valueZapatillas0B.value == "40" ) {

        shoppingCart.push(zapatillas00B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "41"){

        shoppingCart.push(zapatillas01B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "42" ){

        shoppingCart.push(zapatillas02B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0B.value == "43"){

        shoppingCart.push(zapatillas03B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if ( valueZapatillas0B.value == "44"){

        shoppingCart.push(zapatillas04B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleZB").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleZapatillasBryan").fadeIn("slow")
        .fadeOut("slow");
    }

}

//Función que agrega a las zapatillas daddy shoes al carrito con sus respectivos talles/stock.
function zapatillasDaddyShoesAlCarrito() {

    if (valueZapatillas0D.value == "40" ) {

        shoppingCart.push(zapatillas00D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "41"){

        shoppingCart.push(zapatillas01D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "42" ){

        shoppingCart.push(zapatillas02D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if (valueZapatillas0D.value == "43"){

        shoppingCart.push(zapatillas03D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else if ( valueZapatillas0D.value == "44"){

        shoppingCart.push(zapatillas04D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));

    } else {
        console.log("no escogio talle");
        $("#contenidoDivNoEscogioTalleZD").replaceWith(`
        <div class="alert alert-info" role="alert">
        Seleccione el talle.
        </div>
        `);
        $("#divNoEscogioTalleZapatillasDaddyShoes").fadeIn("slow")
        .fadeOut("slow");
    }
}

//Función de calculo de IVA
function calcularIva(producto) {
    let calculoIva = producto * iva + producto;

    return calculoIva;
}

//Función para eliminar los productos del carrito.

function eliminarProductos() {
    {
        localStorage.removeItem('carrito');
        console.log("Muchas gracias. Carrito vacío.")
    }

}

//Función que finaliza la compra("Evalúa" el cobro) y vacía el carrito.

function finalCompra(){

        for (prenda of shoppingCart) {
            prenda.restaDeStock();
        }
        localStorage.removeItem('carrito');

        $("#mensajeCompra").replaceWith(
            `
            <div id="mensajeCompra" class="alert alert-success">
                Muchas gracias por la compra!
            </div>
            `
        );
        $("#mensajeCompra").slideDown("slow")
        .delay("1000")
        .slideUp("slow");

    }


// Formularios de pago (Aplica al uso del boton verde en el header).

//Objeto que va a acumular todos los datos del cliente.

    class Clientes {
        constructor(nombre, apellido, direccion, provincia, localidad, codigoPostal, mail) {

            this.nombre = nombre,
            this.apellido = apellido;
            this.direccion = direccion;
            this.provincia = provincia;
            this.localidad = localidad;
            this.codigoPostal = codigoPostal;
            this.mail = mail;
        }
    };

const planillaClientes = [];

//ID que capturan los values/inputs del formulario

    let inputNombre = document.querySelectorAll("#inputNombre")[0];
    let inputApellido = document.querySelectorAll("#inputApellido")[0];
    let inputDireccion = document.querySelectorAll("#inputDireccion")[0];
    let inputCity = document.querySelectorAll("#inputCity")[0];
    let inputLocalidad = document.querySelectorAll("#inputLocalidad")[0];
    let inputZip = document.querySelectorAll("#inputZip")[0];
    let inputMail = document.querySelectorAll("#inputMail")[0];
    let inputTarjetaDeCredito = document.querySelectorAll("#inputTarjetaDeCredito")[0];
    let inputVencimiento = document.querySelectorAll("#inputVencimiento")[0];

//Funcion que habilita evalúa las resputas y muestra los checks o los errores con iconos elegidos
    function operacionPayment (input, iconoSuccess, iconoError){

        if (input.value != ""){
            console.log(`El ingreso del ${input} fue exitoso`);
            $(iconoSuccess).show();
            $(iconoError).hide();
        }else{
            console.log(`El ingreso del ${input} fue erroneo`);
            $(iconoError).show();
            $(iconoSuccess).hide();
        }
    }

    function operacionTarjetasNumeroPayment(input, iconoSuccess, iconoError){

        if( input.value.length === 16 ){
            console.log(`El ingreso del ${input} fue exitoso`);
            $(iconoSuccess).show();
            $(iconoError).hide();
        }else{
            console.log(`El ingreso del ${input} fue erroneo`);
            $(iconoError).show();
            $(iconoSuccess).hide();
        }
    }

    function operacionTarjetasVencimientoPayment(input, iconoSuccess, iconoError){

        if( input.value.length === 5 ){
            console.log(`El ingreso del ${input} fue exitoso`);
            $(iconoSuccess).show();
            $(iconoError).hide();
        }else{
            console.log(`El ingreso del ${input} fue erroneo`);
            $(iconoError).show();
            $(iconoSuccess).hide();
        }

    }

//Funcion que evalúa todos los inputs y que no falte ningun dato.
    function paymentMethod (){

        operacionPayment(inputNombre, "#iconCheckNombre", "#iconExclamationNombre");
        operacionPayment(inputApellido, "#iconCheckApellido", "#iconExclamationApellido");
        operacionPayment(inputDireccion, "#iconCheckDireccion", "#iconExclamationDireccion");
        operacionPayment(inputCity, "#iconCheckProvincia", "#iconExclamationProvincia");
        operacionPayment(inputLocalidad, "#iconCheckLocalidad", "#iconExclamationLocalidad");
        operacionPayment(inputZip, "#iconCheckZip", "#iconExclamationZip");
        operacionPayment(inputMail, "#iconCheckMail", "#iconExclamationMail");

        operacionTarjetasNumeroPayment(inputTarjetaDeCredito, "#iconCheckTarjetaNumeros", "#iconExclamationTarjetaNumeros");
        operacionTarjetasVencimientoPayment(inputVencimiento, "#iconCheckTarjetaVencimiento", "#iconExclamationTarjetaVencimiento");

        if( ( inputNombre.value != "") && (inputApellido.value != "") && (inputDireccion.value != "") && (inputCity.value != "") && (inputLocalidad.value != "") && (inputZip.value != "") && (inputMail.value != "") && (inputTarjetaDeCredito.value.length === 16) && (inputVencimiento.value.length === 5) ){

            planillaClientes.push(new Clientes(
                inputNombre.value.toString().toLowerCase(),
                inputApellido.value.toString().toLowerCase(),
                inputDireccion.value.toString().toLowerCase(),
                inputCity.value.toString().toLowerCase(),
                inputLocalidad.value.toString().toLowerCase(),
                inputZip.value.toString().toLowerCase(),
                inputMail.value.toString().toLowerCase()
                ));

            for (prenda of shoppingCart) {
                    prenda.restaDeStock();
                }
            localStorage.removeItem('carrito');

            $("#staticBackdrop").modal('show');

        } else {
        console.log("nose guardo");
        $("#divError").replaceWith(`
        <div class="alert alert-warning" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
        <path
            d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
        <path
            d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
        </svg>
        Por favor, rellene los campos vacíos! :).
    </div>
        `);
        }

}

//Boton de pago perteneciente al header.
//$("#botonPagarPrendas").click(finalCompra);
$("#buttonSolapaPayment").click(paymentMethod);

//Elementos del carrito que se van a guardar

const carritoLocal = localStorage.getItem("carrito");
const shoppingCart = [];

if (carritoLocal != null) {
    const carritoLocalObject = JSON.parse(carritoLocal);
    for (const prod of carritoLocalObject) {
        shoppingCart.push(new Prenda(prod.id , prod.producto, prod.tamanio, prod.stock, prod.precio));
    }
}

//Funcion para mostrar el carrito.

let productosCarrito = "";
let precioCarrito = 0;

function muestraCarrito(){
    
    for (elemento of shoppingCart) {
        productosCarrito += elemento.producto;
        precioCarrito += elemento.precio;
    }

    $("#divCarrito").html(`
            <ul class="carritoJavaScript">
                <li>
                Lleva los siguientes productos:
                \n ${productosCarrito}
                </li>
                <li>
                Por un total de $${precioCarrito}
                </li>
            </ul>`
            );
    }

    $("#counterCarritoSpan").append(`
    ${shoppingCart.length}
    `);





    const URLREMERAS = "https://matirg97.github.io/ProyectoIndumentaria/remeras.json";

    $.getJSON(URLREMERAS, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){

                if( dato.id === "Remera00B"){

                    $("#divRemeraBasica00").prepend(`
                    <h3>${dato.nombre}</h3>
                <img src="${dato.imagen}" alt="" class="imagenDelJson">
                <p>${dato.descripcion}</p>
                <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "Remera00R" ){

                    $("#divRemeraRayada00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                    }
                }
            }
        }
    );

    const URLPANTALONES = "https://matirg97.github.io/ProyectoIndumentaria/pantalones.json";

    $.getJSON(URLPANTALONES, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){
                if ( dato.id === "jean00" ){

                    $("#divJeanIndigo00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "chino00" ){

                    $("#divChinoBeige00").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                }
            }
        }
    });

    const URLZAPATILLAS = "https://matirg97.github.io/ProyectoIndumentaria/zapatillas.json";

    $.getJSON(URLZAPATILLAS, function(respuesta,estado){
        let misDatos = respuesta;

        if(estado === "success"){
            
            for(const dato of respuesta){
                if ( dato.id === "zapatillas00D" ){

                    $("#divZapatillas00D").append(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                } else if ( dato.id === "zapatillas00B" ){

                    $("#divZapatillas00B").prepend(`
                    <h3>${dato.nombre}</h3>
                    <img src="${dato.imagen}" alt="" class="imagenDelJson">
                    <p>${dato.descripcion}</p>
                    <p>Precio : $${dato.precio}</p>
                    `);

                }
            }
        }
    });

//Boton que pertenece al "eliminar elementos" del header.
$("#botonEliminarProductos").click(eliminarProductos);

//Boton que pertenece al carrito del header.
$("#botonCarritoHeader").click(muestraCarrito);

//Boton de pago perteneciente al header.
//$("#botonPagarPrendas").click(finalCompra);

//Boton de "Agregar al carrito" de los jeans.
$("#buttonJean").click(jeanAlCarrito);

//Boton de "Agregar al carrito" de los chinos:
$("#buttonChino").click(chinoAlCarrito);

//Boton de "Agregar al carrito" de las remeras Rayadas:
$("#buttonRemeraRayada").click(remeraRayadaAlCarrito);

//Boton de "Agregar al carrito" de las remeras Basicas:
$("#buttonRemeraBasica").click(remeraBasicaAlCarrito);

//Boton de "Agregar al carrito" de las zapatillas Bryan:
$("#buttonZapatillasBryan").click(zapatillasBryanAlCarrito);

//Boton de "Agregar al carrito" de las zapatillas Daddy Shoes:
$("#buttonZapatillasDaddyShoes").click(zapatillasDaddyShoesAlCarrito);