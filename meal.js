let weekPlan = null;
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

let Meals = {
    breakfast: null,
    lunch: null,
    dinner: null,
};

$(document).ready(() => {
    $(".modal").modal();
    $(".scrollspy").scrollSpy();
    $("#hero_area").append(createHero("123"));
    $("#daily_area").append(createDailyTable(""));
    $("#weekly_area").append(createWeeklyTable(""));
    $("#nav_bar").append(createNavBar());
    $("#footer").append(createFooter());

    Meals.breakfast = {
        type: breakfastPreset.meal_type,
        sets: breakfastPreset.meals,
    };
    Meals.lunch = {
        type: lunchPreset.meal_type,
        sets: lunchPreset.meals,
    };
    Meals.dinner = {
        type: dinnerPreset.meal_type,
        sets: dinnerPreset.meals,
    };

    weekPlan = planPreset.week_order;
    createDayTr(weekPlan, Meals);
    createWeekTable(weekPlan, Meals);
    createMealModal(TYPE_D, Meals.breakfast);
    createMealModal(TYPE_W, Meals.breakfast);
    createMealModal(TYPE_D, Meals.lunch);
    createMealModal(TYPE_W, Meals.lunch);
    createMealModal(TYPE_D, Meals.dinner);
    createMealModal(TYPE_W, Meals.dinner);

    createCheckOutModal();
});
