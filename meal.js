let weekPlan = null;

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
