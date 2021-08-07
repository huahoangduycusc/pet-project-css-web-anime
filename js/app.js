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