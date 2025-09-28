$(document).ready(function () {
    $(".show_nav").click(function () {
        $(".navbar").slideToggle();
    });

    // Reset nav when resizing to desktop
    $(window).resize(function () {
        if ($(window).width() > 767) {
            $(".navbar").removeAttr("style"); // clears inline display:none/flex
        }
    });
});
