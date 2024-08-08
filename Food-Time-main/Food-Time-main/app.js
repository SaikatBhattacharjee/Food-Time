$(document).ready(function() {
    // Toggle sidebar when clicking the hamburger icon
    $(".menu-toggle").click(function() {
        $(".sidebar").toggleClass("active");
    });

    // Close sidebar when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.sidebar').length && !$(event.target).closest('.menu-toggle').length) {
            $(".sidebar").removeClass("active");
        }
    });
});

$(document).ready(function() {
var step = 100; // Set the scroll step for normal movement
var stepFilter = 60; // Set the scroll step for filtered movement

$(".back").click(function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").click(function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

$(".back-menus").click(function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").click(function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});
});
