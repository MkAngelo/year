document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos la barra de progreso y el elemento de texto
  var progressBar = document.getElementById("myBar");
  var progressText = document.getElementById("progressText");

  // Obtenemos la fecha de inicio del año actual
  var startDate = new Date(new Date().getFullYear(), 0, 1);

  // Obtenemos la fecha actual
  var currentDate = new Date();

  // Calculamos el progreso
  var progress = (currentDate - startDate) / (365 * 24 * 60 * 60 * 1000) * 100;

  // Actualizamos el ancho de la barra de progreso y el texto
  progressBar.style.width = progress + "%";
  progressText.innerHTML = progress.toFixed(2) + "% completado";
});
