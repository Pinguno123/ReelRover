$(document).ready(function () {
    $('#resultados').on('click', '#peliculasEnlaces', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        cargarVideoPlayer(href);
    });


    function cargarVideoPlayer(href) {
        var url = 'videoPlayer.php';
        $.ajax({
            type: "GET",
            url: url,
            data: { href: href },
            dataType: "html",
            success: function (response) {
                $('main').html(response);
            },
            error: function () {
                console.log('Hubo un error con la solicitud');
            },
        });
    }

    $('#logoButton').click(function (e) {
        e.preventDefault();

        $.ajax({
            type: "GET",
            url: "index.html",
            dataType: "html",
            success: function (response) {
                $('body').html(response);
            }
        });
    });
});