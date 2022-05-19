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