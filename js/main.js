
//Variables y constantes.

const valorPantalones = 8995;
const valorRemeras = 3995;
const valorZapatillas = 9995;


////////////////////////////////////////////////////////////Objetos para las prendas
class Prenda {
    constructor(id, producto, tamanio, color, stock, precio, img) {

        this.id = id;
        this.producto = producto;
        this.tamanio = tamanio;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.img = img;
    }

    restaDeStock() {
        this.stock = this.stock - 1;
    }
}

//Pantalones

const jean00 = new Prenda("jean00", "Jean Indigo", 30, "Azul", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/20708/0CNHB025025-1.jpg");
const jean01 = new Prenda("jean01", "Jean Indigo", 32, "Azul", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/20708/0CNHB025025-1.jpg");
const jean02 = new Prenda("jean02", "Jean Indigo", 34, "Azul", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/20708/0CNHB025025-1.jpg");
const jean03 = new Prenda("jean03", "Jean Indigo", 36, "Azul", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/20708/0CNHB025025-1.jpg");

const chino00 = new Prenda("chino00", "Pantalon Chino", 30, "Beige", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/23139/0ENHB602022-1.jpg");
const chino01 = new Prenda("chino01", "Pantalon Chino", 32, "Beige", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/23139/0ENHB602022-1.jpg");
const chino02 = new Prenda("chino02", "Pantalon Chino", 34, "Beige", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/23139/0ENHB602022-1.jpg");
const chino03 = new Prenda("chino03", "Pantalon Chino", 36, "Beige", 15, 8995, "https://www.penguinargentina.com/uploads/picture/image/23139/0ENHB602022-1.jpg");

let arrayPantalones = [jean00, jean01, jean02, jean03, chino00, chino01 ,chino02, chino03];

//Remeras

const remera01B = new Prenda("remera00B", "Remera Básica", "S", "Negro", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/21050/0ENHT284080-2.jpg");
const remera00B = new Prenda("remera01B", "Remera Básica", "M", "Negro", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/21050/0ENHT284080-2.jpg");
const remera02B = new Prenda("remera02B", "Remera Básica", "L", "Negro", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/21050/0ENHT284080-2.jpg");
const remera03B = new Prenda("remera03B", "Remera Básica", "XL", "Negro", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/21050/0ENHT284080-2.jpg");

const remera00R = new Prenda("remera00R" ,"Remera rayada", "S", "Blanca", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/22755/0FNHT089413-4.jpg");
const remera01R = new Prenda("remera01R" ,"Remera rayada", "M", "Blanca", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/22755/0FNHT089413-4.jpg");
const remera02R = new Prenda("remera02R" ,"Remera rayada", "L", "Blanca", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/22755/0FNHT089413-4.jpg");
const remera03R = new Prenda("remera03R" ,"Remera rayada", "XL", "Blanca", 15, 3995, "https://www.penguinargentina.com/uploads/picture/image/22755/0FNHT089413-4.jpg");

let arrayRemeras = [remera00B, remera01B, remera02B, remera03B, remera00R, remera01R, remera02R, remera03R];

//Zapatillas

const zapatillas00D = new Prenda("zapatillas00D" ,"Daddy shoes", 40, "Negro", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/22591/index_0ENHF240021-5.jpg");
const zapatillas01D = new Prenda("zapatillas01D" ,"Daddy shoes", 41, "Negro", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/22591/index_0ENHF240021-5.jpg");
const zapatillas02D = new Prenda("zapatillas02D" ,"Daddy shoes", 42, "Negro", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/22591/index_0ENHF240021-5.jpg");
const zapatillas03D = new Prenda("zapatillas03D" ,"Daddy shoes", 43, "Negro", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/22591/index_0ENHF240021-5.jpg");
const zapatillas04D = new Prenda("zapatillas04D" ,"Daddy shoes", 44, "Negro", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/22591/index_0ENHF240021-5.jpg");

const zapatillas00B = new Prenda("zapatilllas00B","Calzado Bryan", 40, "Verde", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/20955/0ENHF200010-2.jpg");
const zapatillas01B = new Prenda("zapatilllas01B","Calzado Bryan", 41, "Verde", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/20955/0ENHF200010-2.jpg");
const zapatillas02B = new Prenda("zapatilllas02B","Calzado Bryan", 42, "Verde", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/20955/0ENHF200010-2.jpg");
const zapatillas03B = new Prenda("zapatilllas03B","Calzado Bryan", 43, "Verde", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/20955/0ENHF200010-2.jpg");
const zapatillas04B = new Prenda("zapatilllas04B","Calzado Bryan", 44, "Verde", 15, 9995, "https://www.penguinargentina.com/uploads/picture/image/20955/0ENHF200010-2.jpg");

let arrayZapatillas = [zapatillas00D, zapatillas01D, zapatillas02D, zapatillas03D, zapatillas04D, zapatillas00B, zapatillas01B, zapatillas02B,zapatillas03B, zapatillas04B];


/////////////////////////////////////////////////////////////Funciones que evalúan la interaccion del usuario con las prendas

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
        contadorCarrito();

    } else if (valueJean0.value == "32"){

        shoppingCart.push(jean01);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueJean0.value == "34" ){

        shoppingCart.push(jean02);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueJean0.value == "36"){

        shoppingCart.push(jean03);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

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

//Boton de "Agregar al carrito" de los jeans.
$("#buttonJean").click(jeanAlCarrito);

//Función que agrega los chinos al carrito con sus respectivos talles/stock.
function chinoAlCarrito (){

    if (valueChino0.value == "30" ) {

        shoppingCart.push(chino00);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueChino0.value == "32"){

        shoppingCart.push(chino01);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueChino0.value == "34" ){

        shoppingCart.push(chino02);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueChino0.value == "36"){

        shoppingCart.push(chino03);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

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

//Boton de "Agregar al carrito" de los chinos:
$("#buttonChino").click(chinoAlCarrito);

//Función que agrega las remeras rayadas al carrito con sus respectivos talles/stock.
function remeraRayadaAlCarrito() {

    if (valueRemera0R.value == "S" ) {

        shoppingCart.push(remera00R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueRemera0R.value == "M"){

        shoppingCart.push(remera01R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueRemera0R.value == "L" ){

        shoppingCart.push(remera02R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueRemera0R.value == "XL"){

        shoppingCart.push(remera03R);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

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

//Boton de "Agregar al carrito" de las remeras Rayadas:
$("#buttonRemeraRayada").click(remeraRayadaAlCarrito);

//Función que agrega las remeras basicas al carrito con sus respectivos talles/stock.
function remeraBasicaAlCarrito(){

    if (valueRemera0B.value == "S" ) {

        shoppingCart.push(remera00B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();
        
    } else if (valueRemera0B.value == "M"){

        shoppingCart.push(remera01B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();
        
    } else if (valueRemera0B.value == "L" ){

        shoppingCart.push(remera02B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();
        
    } else if (valueRemera0B.value == "XL"){

        shoppingCart.push(remera03B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();
        
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

//Boton de "Agregar al carrito" de las remeras Basicas:
$("#buttonRemeraBasica").click(remeraBasicaAlCarrito);

//Función que agrega a las zapatillas bryan al carrito con sus respectivos talles/stock.
function zapatillasBryanAlCarrito(){

    if (valueZapatillas0B.value == "40" ) {

        shoppingCart.push(zapatillas00B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0B.value == "41"){

        shoppingCart.push(zapatillas01B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0B.value == "42" ){

        shoppingCart.push(zapatillas02B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0B.value == "43"){

        shoppingCart.push(zapatillas03B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if ( valueZapatillas0B.value == "44"){

        shoppingCart.push(zapatillas04B);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

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

//Boton de "Agregar al carrito" de las zapatillas Bryan:
$("#buttonZapatillasBryan").click(zapatillasBryanAlCarrito);

//Función que agrega a las zapatillas daddy shoes al carrito con sus respectivos talles/stock.
function zapatillasDaddyShoesAlCarrito() {

    if (valueZapatillas0D.value == "40" ) {

        shoppingCart.push(zapatillas00D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0D.value == "41"){

        shoppingCart.push(zapatillas01D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0D.value == "42" ){

        shoppingCart.push(zapatillas02D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if (valueZapatillas0D.value == "43"){

        shoppingCart.push(zapatillas03D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

    } else if ( valueZapatillas0D.value == "44"){

        shoppingCart.push(zapatillas04D);
        localStorage.setItem("carrito", JSON.stringify(shoppingCart));
        contadorCarrito();

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

//Boton de "Agregar al carrito" de las zapatillas Daddy Shoes:
$("#buttonZapatillasDaddyShoes").click(zapatillasDaddyShoesAlCarrito);

//Función de calculo de IVA
function calcularIva(producto) {
    let calculoIva = producto * iva + producto;

    return calculoIva;
}

//////////////////////////////////////////////////////////////// Proceso para eliminar los productos del carrito.

//Función para eliminar los productos del carrito.

function eliminarProductos() {

        localStorage.removeItem('carrito');
        contadorCarrito();

}
//Boton que pertenece al "eliminar elementos" del header.
$("#botonEliminarProductos").click(eliminarProductos);


///////////////////////////////////////////////////////////////Formularios de pago (Aplica al uso del boton verde en el header).

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
            console.log(`El ingreso del ${input.toString()} fue exitoso`);
            $(iconoSuccess).show();
            $(iconoError).hide();
        }else{
            console.log(`El ingreso del ${input.toString()} fue erroneo`);
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

        let inputNombre = document.querySelectorAll("#inputNombre")[0];
        let inputApellido = document.querySelectorAll("#inputApellido")[0];
        let inputDireccion = document.querySelectorAll("#inputDireccion")[0];
        let inputCity = document.querySelectorAll("#inputCity")[0];
        let inputLocalidad = document.querySelectorAll("#inputLocalidad")[0];
        let inputZip = document.querySelectorAll("#inputZip")[0];
        let inputMail = document.querySelectorAll("#inputMail")[0];
        let inputTarjetaDeCredito = document.querySelectorAll("#inputTarjetaDeCredito")[0];
        let inputVencimiento = document.querySelectorAll("#inputVencimiento")[0];

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
//Función que finaliza la compra("Evalúa" el cobro) y vacía el carrito.

function finalCompra(){

    $('main').replaceWith(`
    <main>
    <form id="paymentForm" class="row g-3">
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Compra realizada!</h5>
                    </div>
                    <div class="modal-body">
                        Muchas gracias! Su compra se realizó con éxito ! :).
                    </div>
                    <div class="modal-footer">
                        <a href="index.html">
                            <button id="botonVolverAlHome" type="button" class="btn btn-primary">Volver al home</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--Fin modal-->
        <div id="divError"></div>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Nombre</label>
            <svg id="iconCheckNombre" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationNombre" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input id="inputNombre" type="text" class="form-control" placeholder="Nombre de pila"
                aria-label="First name">
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Apellido</label>
            <svg id="iconCheckApellido" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationApellido" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input id="inputApellido" type="text" class="form-control" placeholder="Apellido"
                aria-label="Last name">
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Direccion</label>
            <svg id="iconCheckDireccion" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationDireccion" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input id="inputDireccion" type="text" class="form-control" placeholder="Av. Cabildo 2449">
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Provincia</label>
            <svg id="iconCheckProvincia" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationProvincia" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input type="text" class="form-control" id="inputCity" placeholder="Catamarca">
        </div>
        <div class="col-md-4">
            <label for="inputCity" class="form-label">Localidad</label>
            <svg id="iconCheckLocalidad" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationLocalidad" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input id="inputLocalidad" type="text" class="form-control" placeholder="Belgrano">
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Codigo Postal</label>
            <svg id="iconCheckZip" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationZip" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input type="text" class="form-control" id="inputZip" placeholder="1428">
        </div>
        <div class="col-12">
            <label for="inputEmail4" class="form-label">Mail</label>
            <svg id="iconCheckMail" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationMail" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input type="text" class="form-control" id="inputMail" placeholder="pepito@javascript.com">
        </div>
        <div class="col-md-10">
            <div class="form-label">
                <label for="inputAddress" class="form-label">Numero de tarjeta (16 números)</label>
                <svg id="iconCheckTarjetaNumeros" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
                <svg id="iconExclamationTarjetaNumeros" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                    <path
                        d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
                <input id="inputTarjetaDeCredito" type="text" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                    maxlength="16">
            </div>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Vencimiento</label>
            <svg id="iconCheckTarjetaVencimiento" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <svg id="iconExclamationTarjetaVencimiento" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path
                    d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path
                    d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
            <input type="text" class="form-control" id="inputVencimiento" placeholder="XX/XX" maxlength="5">
        </div>
        <div class="col-12">
            <button id="buttonSolapaPayment" type="button" class="btn btn-primary">Pagar</button>
        </div>
    </form>
</main>
    `);

    $("#buttonSolapaPayment").click(paymentMethod);

    }

//Boton de pago perteneciente al header.

$("#botonPagarPrendas").click(finalCompra);

////////////////////////////////////////////////////////////////////////////// Carrito (Aplica al botón azul).

//Elementos del carrito que se van a guardar

const carritoLocal = localStorage.getItem("carrito");
const shoppingCart = [];

if (carritoLocal != null) {
    const carritoLocalObject = JSON.parse(carritoLocal);
    for (const prod of carritoLocalObject) {
        shoppingCart.push(new Prenda(prod.id , prod.producto, prod.tamanio, prod.color, prod.stock, prod.precio, prod.img));
    }
}

//Funcion para mostrar el carrito.

    let productosCarrito = "";
    let nombreProducto = "";

    function indentificadorProductoPantalones(idProducto) {
        if( idProducto.toLowerCase() == "jean indigo" ){
            $("#listaShoppingCart").append(`
            <li>
                <p>
                Jean
                </p>

            </li>
            `)
        }
    }

        for (elemento of shoppingCart) {
            nombreProducto = elemento.producto;
            imgProducto = elemento.img;
            precioCarrito =+ elemento.precio;  

            $("#listaShoppingCart").append(`
            <li class="listaDelCarrito">
                <p class="pDelCarrito">
                ${nombreProducto}
                </p>
                <img src="${elemento.img}" alt="" class="imgDelCarrito">
                <p class="pDelCarrito">
                Precio : $${elemento.precio}
                </p>
            </li>
            `)
            function valorTotalCarrito(){
            $("#pDelValorTotalCarrito").replaceWith(`
            Precio total : $${precioCarrito}
            `)
            };


        }

    function contadorCarrito(){
        $("#counterCarritoSpan").replaceWith(`
        <span id="counterCarritoSpan" class='cart-counter'>${shoppingCart.length}</span>
        `);
    }
$("#botonCarritoHeader").click(valorTotalCarrito);
$("#counterCarritoSpan").replaceWith(`
<span  id="counterCarritoSpan" class='cart-counter'>${shoppingCart.length}
</span>
`)

//////////////////////////////////// Manipulando el HTML (principalmente descripciones) con los objetos instanciados en JSON.

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