$(document).ready(function () {
    let isPaused = false;
    // get started button scrolling
    (function () {
        var btn = document.getElementById('get-started-btn');
        var tgtSection = document.getElementById('ecoSystem');
        if (btn != null) {
            btn.onclick = function () {
                // console.log('clicked', $('#ecoSystem').offset().top);
                $("body, html").animate({
                    'scrollTop': $('#ecoSystem').offset().top
                }, 500);
            };
        }
    })();

    $('.sidenav').sidenav({
        onOpenStart: () => {
            $('#main').toggleClass('push-left');
            $('#brandLogo').toggleClass('hidden');
        },
        onCloseStart: () => {
            $('#main').toggleClass('push-left');
            $('#brandLogo').toggleClass('hidden');
        }
    }); // Initialize the sidenav

    $('#close-sidenav').click(function () {
        $('.sidenav').sidenav('close'); // Close the sidenav

    });


    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    $('.carousel').carousel({
        duration: 200
    });

    setInterval(() => {
        if (!isPaused) {
            $('.carousel').carousel('next')
        }
    }, 5000);

    $('.carousel').hover(() => {
        isPaused = true;
    }, () => {
        isPaused = false;
    })

});
