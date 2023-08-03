document.addEventListener("DOMContentLoaded", function() {
    // Fecha objetivo de la boda (cambia la fecha a la de tu boda)
    var fechaObjetivo = new Date("2023-10-14 10:30").getTime();
  
    var intervalo = setInterval(function() {
      var fechaActual = new Date().getTime();
      var tiempoRestante = fechaObjetivo - fechaActual;
  
      // Cálculos para obtener días, horas, minutos y segundos restantes
      var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");;
      var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");;
      var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");;
      var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000).toString().padStart(2, "0");;
  
      // Mostrar la cuenta regresiva en el elemento con el ID "countdown"
      var countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = "Faltan " + dias + ":" + horas + ":" + minutos + ":" + segundos + " días";
  
      // Si la fecha objetivo ha pasado, mostrar un mensaje especial
      if (tiempoRestante < 0) {
        clearInterval(intervalo);
        countdownElement.innerHTML = "¡Nuestra boda ha llegado! ¡Gracias por celebrar con nosotros!";
      }
    }, 1000);
  });
  