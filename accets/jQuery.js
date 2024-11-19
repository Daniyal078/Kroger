
$(".tab-list li").on("click", function () {
    var tabId = ".tab-list li#" + $(this).attr("id");
    var tabDivId = ".tabs-content#content-" + $(this).attr("id");

    if (!$(this).hasClass("active")) {
        $(".tab-list li").removeClass("active");
        $(this).addClass("active");

        $(".tabs-content").removeClass("active");
        $(tabDivId).addClass("active");
    }
});


$(window).on("load", function () {
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowTop) {
                if ($(this).css("opacity") == 0) { $(this).fadeTo(1000, 10); }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});


$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});


$('.responsive-4').slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});


$('.responsive-3').slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    adaptiveHeight: true
});