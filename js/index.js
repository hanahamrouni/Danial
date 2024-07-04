/// <reference types="../@types/jquery" />

/* ===============================Home Section============================ */

// navbar

let OuterHeigh = $('.Home').outerHeight();

$(document).on('scroll', function () {

    let DocumentScroll = $(document).scrollTop();

    if (DocumentScroll > OuterHeigh) {

        $('.navbar').css({ backgroundColor: 'white' });
        $('.navbar .nav-item .nav-link , .navbar-brand').css({ color: 'black' });
        $('.navbar').css({ position: 'Fixed' });
    }
    else {
        $('.navbar').css({ backgroundColor: 'transparent' });
        $('.navbar .nav-item .nav-link , .navbar-brand').css({ color: 'white' });
    }
})


// typed js

var typed = new Typed('#element', {
    strings: ['Developer', 'Designer', 'Larry Daniels'],
    typeSpeed: 40,
    loop: true,
    backSpeed: 40,
    backDelay: 1000,
    showCursor: true,
    cursorChar: '|',
});

/* ===============================Clients Section============================ */

$('.count').countUp();
















