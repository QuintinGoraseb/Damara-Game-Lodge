$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
});