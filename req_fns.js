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
    makeOrder(name, tel, addr, order) {
        console.log("Sending", name, tel, addr, order);
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
