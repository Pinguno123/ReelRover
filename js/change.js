var slider1 = document.getElementById("slider1");
var imagenes = slider1.querySelectorAll("img");
var indiceActual = 0;
var recomendadosUrl = "recursos/img/miniaturas/recomendado";


document.getElementById("botonSlider1").addEventListener("click", function() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].src = recomendadosUrl + ((indiceActual + i) % imagenes.length + 1) + ".jpg";
    }
});

document.getElementById("boton1Slider1").addEventListener("click", function() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    for (var i = 0; i < imagenes.length; i++) {
        var nuevoIndice = (indiceActual + i) % imagenes.length;
        imagenes[i].src = recomendadosUrl + (nuevoIndice + 1) + ".jpg";
    }
});