$(document).ready(function () {
    const searchInput = $('#search-input');
    let hideResultsTimeout;
    let responseData;

    ajaxSearchCall();

    function ajaxSearchCall() {
        $.ajax({
            url: 'jsons/peliculas.json',
            method: 'GET',
            success: function (response) {
                responseData = response;
                displayData(responseData);
            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud:', status, error);
            }
        });
    }

    function displayData(data) {
        $('#resultados').empty();
        
        data.forEach(function (pelicula) {
            $('#resultados').append('<p>' + pelicula.nombre + '</p>');
        });
    }

    function filterAndDisplayData(searchItem) {
        const datosFiltrados = responseData.filter(function(pelicula) {
            return pelicula.nombre.toLowerCase().includes(searchItem);
        });

        displayData(datosFiltrados);
    }

    searchInput.on('keyup', function (e) {
        const searchItem = $(this).val().toLowerCase();

        if (searchItem === '') {
            displayData(responseData);
        } else {
            filterAndDisplayData(searchItem);
        }
    });

    searchInput.on('focus', function () {
        $('#resultados').removeClass('d-none');
    });

    searchInput.on('blur', function () {
        hideResultsTimeout = setTimeout(function () {
            $('#resultados').addClass('d-none');
        }, 200);
    });

    $('#resultados').on('click', function () {
        clearTimeout(hideResultsTimeout);
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#resultados, #search-input').length) {
            $('#resultados').addClass('d-none');
        }
    });    
});