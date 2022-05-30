function loadEntries() {
    console.log("Loading entries...");
    //$("#entries").html("Loading entries...");

    $("#orders_container").empty();
    $("#orders_container").append(createLoading());
    ffReq
        .get()
        .done(function (result) {
            if (!result.entries || !result.entries.length) {
                $("#orders_container").empty();
                $("#orders_container").append(createEmptyOrder());
                return;
            }

            const context = {
                entries: result.entries,
            };
            console.log("---> get: ", context);
            //$("#entries").html(entriesTemplate(context));
            $("#orders_container").empty();
            $("#orders_container").append(createOrderCards(context.entries));
        })
        .error(function (error) {
            //$("#entries").html("No entries");
            console.log(error);
        });
}

$(document).ready(() => {
    $(".modal").modal();
    $(".scrollspy").scrollSpy();
    $("#nav_bar").append(createNavBar());
    $("#footer").append(createFooter());
    $("#hero_area").append(createOrderHero());
    loadEntries();
});
