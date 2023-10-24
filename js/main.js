// menu mobile
const menu = $("#menu");

$("#icone-menu").click(function() {
    menu.fadeIn();
});

$("#fechar-menu").click(function() {
    menu.fadeOut();
});

// background dos inputs
$(".form-control").blur(function() {
    $(this).css("background-color", "#E8F0FD");
});


// whatsapp web vs whatsapp cel
const phones = document.querySelectorAll('a[fone="yes"]');
phones.forEach((ph) => {
    const numero = ph.getAttribute('number');
    const texto = (ph.getAttribute('text')) ? (ph.getAttribute('text')) : ('');
    (window.screen.width > 800) ? (ph.href = `//web.whatsapp.com/send?phone=+${numero}&text=${texto}`) : (ph.href = `//api.whatsapp.com/send?phone=+${numero}&text=${texto}`)
});

// $("#carousel").flickity({
//     cellAlign: 'center',
//     prevNextButtons: false,
// });
