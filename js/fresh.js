
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
