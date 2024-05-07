// Selecciona todos los contenedores de swiper
var swiperContainers = document.querySelectorAll(".swiper-slide");

// Itera sobre cada contenedor de swiper
swiperContainers.forEach(function(container) {
    // Obtiene la imagen y el video dentro de cada contenedor
    var img = container.querySelector("img");
    var video = container.querySelector("video");

    // Agrega eventos de mouseover y mouseout a la imagen dentro de cada contenedor
    img.addEventListener("mouseover", function() {
        container.style.transform = "scale(1.1)";
        container.style.transition = "transform 0.3s ease";
        img.style.opacity = "0";
        // video.style.opacity = "1";
    });

    img.addEventListener("mouseout", function() {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.3s ease";
        img.style.opacity = "1";
        video.style.opacity = "0";
    });
});