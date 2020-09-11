$('.drop').on('click', function (e) {
    e.stopPropagation();
    $('nav ul ul').slideUp();
    $(this).next().is(":visible") || $(this).next().slideDown();
});
