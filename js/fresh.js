
$('.menu-icon').click(function() {
    $('#main-menu').velocity({
        translateX: ["0%", "100%"]
    }, {
        duration: 500
    });
});

$('#main-menu__close').click(function() {
    $('#main-menu').velocity({
        translateX: ["100%", "0%"]
    }, {
        duration: 500
    });
});

$('.main-menu__link').hover(function() {
    // mouse enter
    $(this).velocity({
        color: '#1FC5FF',
        translateZ: 1
    }, {
        duration: 250
    });
}, function() {
    // mouse exit
    $(this).velocity({
        color: '#FA5BA4',
        translateZ: 0
    }, {
        duration: 250
    });
});
