//navbar active
if (window.location.pathname == '/') {
    $("#home").addClass("active");
} else if (window.location.pathname == '/about') {
    $("#about").addClass("active");
} else if (window.location.pathname == '/login') {
    $("#login").addClass("active");
};

var useDark = false;
if (useDark) {
    $('body').addClass('dark');
}