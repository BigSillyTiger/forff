const breakfastPreset = {
    _id: { $oid: "61ee21689197f8be27e1fa5a" },
    meal_type: "brf",
    meals: [
        {
            name: "Healthier chicken chow mein",
            cal: 810,
            id: "b0",
            price: 12.49,
        },
        {
            name: "One-pot healthy Mexican beef mince",
            cal: 820,
            id: "b1",
            price: 11.59,
        },
        {
            name: "Mongolian chicken",
            cal: 830,
            id: "b2",
            price: 10.69,
        },
        {
            name: "One-pan butter chicken with rice",
            cal: 840,
            id: "b3",
            price: 13.15,
        },
        {
            name: "17-minute chicken pot pie",
            cal: 850,
            id: "b4",
            price: 13.55,
        },
        {
            name: "Mexican chicken and rice bowl",
            cal: 860,
            id: "b5",
            price: 14.88,
        },
        {
            name: "Slow-cooker Cambodian chicken curry",
            cal: 870,
            id: "b6",
            price: 13.88,
        },
    ],
};

const lunchPreset = {
    _id: { $oid: "61ee22159197f8be27e1fa5c" },
    meal_type: "lch",
    meals: [
        {
            name: "Potato gem nachos",
            cal: 910,
            id: "l0",
            price: 18.88,
        },
        {
            name: "One-pan creamy chicken pesto pasta bake",
            cal: 920,
            id: "l1",
            price: 19.98,
        },
        {
            name: "Raspberry and almond ricotta dessert cake",
            cal: 930,
            id: "l2",
            price: 17.89,
        },
        {
            name: "One-pan chicken with bocconcini and olives",
            cal: 940,
            id: "l3",
            price: 20.0,
        },
        {
            name: "Cauliflower cheese balls",
            cal: 950,
            id: "l4",
            price: 22.98,
        },
        {
            name: "Milkybar cheesecake",
            cal: 960,
            id: "l5",
            price: 21.55,
        },
        {
            name: "Honey and lemon chicken stir-fry",
            cal: 970,
            id: "l6",
            price: 23.08,
        },
    ],
};

const dinnerPreset = {
    _id: { $oid: "61ee22a89197f8be27e1fa5e" },
    meal_type: "din",
    meals: [
        {
            name: "Kung pao chicken",
            cal: 710,
            id: "d0",
            price: 18.88,
        },
        {
            name: "Best-ever slow-cooker bolognaise",
            cal: 720,
            id: "d1",
            price: 19.08,
        },
        {
            name: "Roasted pumpkin and bacon pasta with lemon ricotta",
            cal: 730,
            id: "d2",
            price: 20.2,
        },
        {
            name: "No-bake Tim Tam cheesecake",
            cal: 740,
            id: "d3",
            price: 22.98,
        },
        {
            name: "Homemade Mac and Cheese",
            cal: 750,
            id: "d4",
            price: 17.57,
        },
        {
            name: "Easy Meatloaf",
            cal: 760,
            id: "d5",
            price: 16.99,
        },
        {
            name: "Baked Chicken Schnitzel",
            cal: 770,
            id: "d6",
            price: 18.85,
        },
    ],
};

const planPreset = {
    _id: { $oid: "61ee237e9197f8be27e1fa5f" },
    day_order: {
        brf: -1,
        lch: -1,
        din: -1,
    },
    week_order: [
        {
            brf: 0,
            lch: 0,
            din: 0,
        },
        {
            brf: 1,
            lch: 1,
            din: 1,
        },
        {
            brf: 2,
            lch: 2,
            din: 2,
        },
        {
            brf: 3,
            lch: 3,
            din: 3,
        },
        {
            brf: 4,
            lch: 4,
            din: 4,
        },
        {
            brf: 5,
            lch: 5,
            din: 5,
        },
        {
            brf: 6,
            lch: 6,
            din: 6,
        },
    ],
};

const createLoading = () => {
    return `
        <div class="preloader-wrapper big active divCenter">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    `;
};

const createNavBar = () => {
    return `
        <nav>
            <div class="nav-wrapper indigo darken-4">
                <a href="#" class="brand-logo left">Logo</a>
                <ul id="nav-mobile" class="hide-on-med-and-down right">
                    <li><a href="/">Home</a></li>
                    <li><a href="./menu.html">Menu</a></li>
                    <li><a href="./meal.html">Meal</a></li>
                    <li><a href="./orderlist.html">Order</a></li>
                    <li><a href="./register.html">Register</a></li>
                    <li><a href="./login.html">Login</a></li>
                </ul>
            </div>
        nav>
    `;
};

const createFooter = () => {
    return `
        <div class="container center footerStyle">
            <a href="#nav_bar">Back to the Top</a>
            <div class="row">
                <div class="col s12 m4">
                    <p>FITNESS FOOD</p>
                </div>
                <div class="col s12 m4" style="text-align: left;">
                    <h5>HOURS</h5>
                    <b>Monday:</b> 11:00am - 10:00pm </p>
                    <p><b>Tuesday:</b> 11:00am - 10:00pm </p>
                    <p><b>Wednesday:</b> Closed </p>
                    <p><b>Thursday:</b> 11:00am - 10:00pm </p>
                    <p><b>Friday:</b> 11:00am - 10:00pm </p>
                    <p><b>S & S:</b> 12:00am - 8:00pm </p>
                </div>
                <div class="col s6 m2">
                    <h5>ADDRESS</h5>
                    <p>123 Day Rd, #1000</p>
                    <p>San Franksly, CA 1234321</p>
                </div>
                <div class="col s6 m2">
                    <h5>FOLLOW</h5>
                    <p>placeholder</p>
                </div>
            </div>
        </div>

        <div class="footer-copyright cprtStyle indigo darken-4" >
            <div class="container">
                @2022 Fitness Food Group
            <a class="grey-text text-lighten-4 right" href="https://github.com/taopan2007/Group_work.git">
                <i class="material-icons">
                    airline_seat_individual_suite
                </i>
            </a>
            </div>
        </div>
    `;
};

// checkout
const add = (n1, n2) => {
    let a1 = Number(n1.split(".")[0]);
    let a2 = Number(n1.split(".")[1] ? n1.split(".")[1] : "0");
    let b1 = Number(n2.split(".")[0]);
    let b2 = Number(n2.split(".")[1] ? n2.split(".")[1] : "0");
    let t1 = a1 + b1 + parseInt((a2 + b2) / 100);
    let t2 = (a2 + b2) % 100;
    return `${t1}.${t2}`;
};

const multi = (n1, q) => {
    let a1 = Number(n1.split(".")[0]);
    let a2 = Number(n1.split(".")[1] ? n1.split(".")[1] : "0");
    let t1 = a1 * q + parseInt((a2 * q) / 100);
    let t2 = (a2 * q) % 100;
    return `${t1}.${t2}`;
};

const checkoutPrice = (arr) => {
    let price = "0.0";
    arr.forEach((item) => {
        //price += item.total
        price = add(price, item.total);
    });
    return price;
};

const checkRepeat = (arr) => {
    let res = {};

    return arr.reduce((item, next) => {
        //res[next.id] ? '' : res[next.id] = true && item.push(next)
        if (res[next.id]) {
            //  repeated
            next.total = multi(next.price.toString(), ++next.qty);
        } else {
            // new
            next.qty = 1;
            next.total = next.price.toString();
            res[next.id] = true && item.push(next);
        }
        return item;
    }, []);
};
