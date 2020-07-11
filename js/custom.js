$(document).ready(function () {


    $('body').materialScrollTop();
    $('html').smoothScroll(999);




    $('.main-menu ul li a').click(function () {
        $('.main-menu ul li a').removeClass('.custom')
    });
    $(this).addClass('.custom');

    var typed = new Typed('.element', {
        strings: [
            "Font-End Developer.",
            "WordPress Theme Developer.",
            "UX/UI Designer.",
            "Graphis Designer.",
            

        ],
        typeSpeed: 50,
        startDelay: 5,
        backSpeed: 50,
        loop: true,


    });

    $('.chart').easyPieChart({

        barColor: '#7df2e2',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'circle'
    });


    var $grid = $('.grid').isotope({});

    $('.filter-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });






});
