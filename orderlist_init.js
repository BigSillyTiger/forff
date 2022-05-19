const apiUrl = "https://d35d8006.au-syd.apigw.appdomain.cloud/fitnessfood";

const ffReq = {
    // retrieve the existing fitness food entries
    get() {
        return $.ajax({
            type: "GET",
            url: `${apiUrl}/orders`,
            dataType: "json",
        });
    },
    // add a single fitness food entry
    add(name, tel, addr, order) {
        console.log("Sending", name, email, comment);
        return $.ajax({
            type: "PUT",
            url: `${apiUrl}/orders`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                name,
                tel,
                addr,
                order,
            }),
            dataType: "json",
        });
    },
};

function loadEntries() {
    console.log("Loading entries...");
    //$("#entries").html("Loading entries...");

    $("#orders_container").empty();
    $("#orders_container").append(createLoading());
    ffReq
        .get()
        .done(function (result) {
            if (!result.entries) {
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
