jQuery(document).ready(function () {
    $("svg").click(function () {
        var svg = $(this);
        Fancybox.show([
            {
                src: $(this).attr("data-src"),
                type: "iframe",
            },
        ]);
    });
});

