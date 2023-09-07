// Obtener elementos HTML
var abrirPopup = document.getElementById('abrirPopup');
var popup = document.getElementById('popup');
var comboBox = document.getElementById('comboBox');
var aceptar = document.getElementById('aceptar');
var cancelar = document.getElementById('cancelar');
var invitado=  document.getElementById('mensaje').innerText;

// Función para abrir el popup cuando se hace clic en el enlace
abrirPopup.addEventListener('click', function() {
    popup.style.display = 'flex'; // Muestra el popup al hacer clic en el enlace
});

// Función para cerrar el popup
function cerrarPopupFunc() {
    popup.style.display = 'none'; // Oculta el popup al cerrarlo
}

cancelar.addEventListener('click', cerrarPopupFunc);

// Función para seleccionar un número y cerrar el popup
aceptar.addEventListener('click', function() {
    var numeroSeleccionado = comboBox.value;
    var urlPersonalizada = 'https://wa.me/+50683153937?text=Hola+quiero+confirmar+mi+asistencia:+'+invitado+'+'+numeroSeleccionado+'+espacios.';

// Redirige la página actual a la URL especificada
window.location.href = urlPersonalizada;

    cerrarPopupFunc(); // Cierra el popup
});





