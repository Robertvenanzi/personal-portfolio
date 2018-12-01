
$(function () {
    // Enable scrollspy in navbar to show active section of page
    $("body").scrollspy({
        target: "#nav-dropdown",
        offset: 150
    });

    // Change speed of carousel
    $("#testimonial-carousel").carousel({
        interval: 5000
    });

    // Add smooth scroll to links
    $("a[href*='#']").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {

            let target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate(
                    {
                        scrollTop: target.offset().top
                    },
                    500
                );
                return false;
            }
        }
    });
});
