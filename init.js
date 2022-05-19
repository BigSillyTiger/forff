const REQ_INIT = "/api/init";

//main
$(document).ready(() => {
    console.log("page ready");
    $("#nav_bar").append(createNavBar());
    $("#footer").append(createFooter());
});
