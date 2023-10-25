// Abrindo menu mobile
$(".button-modal-form").click(function () {
    $(".form-mobile-modal").addClass("fixed");
});

// Fechando menu mobile
$(".box-close-button").click(function () {
    $(".form-mobile-modal").removeClass("fixed");
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
        $("#cabecalho-desktop-fixed").addClass("fixed");
    } else {
        $("#cabecalho-desktop-fixed").removeClass("fixed");
    }
});

// background dos inputs
$(".form-control").blur(function () {
    $(this).css("background-color", "#E8F0FD");
});

// $("#carousel").flickity({
//     cellAlign: 'center',
//     prevNextButtons: false,
// });
