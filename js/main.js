$(document).ready(function () {
    let isUniSlidesPaused = false;
    let isMosdefSlidesPaused = false;
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

    $("#mosdefSlides").carousel({
        fullWidth: true,
        indicators: true
    });

    $("#colabUniversities").carousel();

    setInterval(() => {
        if (!isUniSlidesPaused) {
            $('#colabUniversities').carousel('next');
        }
    }, 5000);

    setInterval(() => {
        if (!isMosdefSlidesPaused) {
            $('#mosdefSlides').carousel('next');
        }
    }, 5000);

    $('#colabUniversities').hover(() => {
        isUniSlidesPaused = true;
    }, () => {
        isUniSlidesPaused = false;
    });

    $('#mosdefSlides').hover(() => {
        isMosdefSlidesPaused = true;
    }, () => {
        isMosdefSlidesPaused = false;
    });

});
