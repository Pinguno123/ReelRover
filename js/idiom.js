// Función para obtener el nombre de la página actual
function getCurrentPage() {
    // Obtener el nombre del archivo de la URL
    const currentPage = window.location.pathname.split('/').pop();
    return currentPage;
}

// Identificador de página
const currentPage = getCurrentPage();

// Event listener para el select con id 'idiom'
var idiom = document.getElementById('idiom');
idiom.addEventListener("change", (event) => {
    switch (currentPage) {
        case "landingPage.html":
            if (event.target.value === "espaniol") {
                window.location.href = "landingPage.html";
            } else if (event.target.value === "english") {
                window.location.href = "landingPageEnglish.html";
            }
            break;
        case "landingPageEnglish.html":
            if (event.target.value === "espaniol") {
                window.location.href = "landingPage.html";
            } else if (event.target.value === "english") {
                window.location.href = "landingPageEnglish.html";
            }
            break;            
        case "index.html":
            if (event.target.value === "espaniol") {
                window.location.href = "index.html";
            } else if (event.target.value === "english") {
                window.location.href = "indexEnglish.html";
            }
            break;
        // Agregar más casos según las páginas que tengas
        default:
            // Manejar el caso si la página no está contemplada
            console.error("Página no reconocida:", currentPage);
    }
});