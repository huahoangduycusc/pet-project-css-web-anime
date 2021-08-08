let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
$('.slides-top-news').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
        500: {
            items: 1
        },
        1280: {
            items: 2
        },
        1600: {
            items: 2
        }
    }
});
$('.slides-video-news').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
        500: {
            items: 2
        },
        1280: {
            items: 4
        },
        1600: {
            items: 5
        }
    }
});
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

});