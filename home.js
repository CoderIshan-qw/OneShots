// ================================
// GET DATA FROM LOCAL STORAGE
// ================================

let full_name = localStorage.getItem("Name");

let full_dob = localStorage.getItem("DOB");

let full_location = localStorage.getItem("Country");

let life_exp = Number(localStorage.getItem("Totallife"));


// ================================
// SHOW COUNTRY
// ================================

document.getElementById("country").textContent =
    full_location || "your country";


// ================================
// SHOW LIFE EXPECTANCY
// ================================

if (life_exp) {

    document.getElementById("lifeExpectancy").textContent =
        life_exp.toFixed(1);

}


// ================================
// CONVERT DOB
// ================================

let [day, month, year] = full_dob.split("/");

let Day = Number(day);
let Month = Number(month);
let Year = Number(year);


// Birth date

let birthdate = new Date(
    Year,
    Month - 1,
    Day
);


// ================================
// COUNTDOWN FUNCTION
// ================================

function countdown() {

    let now = new Date();


    // Death / target date

    let target = new Date(birthdate);

    target.setFullYear(
        birthdate.getFullYear() + life_exp
    );


    // Difference

    let difference = target - now;


    // If countdown is finished

    if (difference <= 0) {

        document.getElementById("years").textContent = "00";
        document.getElementById("months").textContent = "00";
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    // ================================
    // CALCULATE TIME
    // ================================

    let totalSeconds =
        Math.floor(difference / 1000);


    let seconds =
        totalSeconds % 60;


    let totalMinutes =
        Math.floor(totalSeconds / 60);


    let minutes =
        totalMinutes % 60;


    let totalHours =
        Math.floor(totalMinutes / 60);


    let hours =
        totalHours % 24;


    let totalDays =
        Math.floor(totalHours / 24);


    let years =
        Math.floor(totalDays / 365.2425);


    let remainingDays =
        totalDays - Math.floor(years * 365.2425);


    let months =
        Math.floor(remainingDays / 30.436875);


    let days =
        Math.floor(
            remainingDays -
            months * 30.436875
        );


    // ================================
    // DISPLAY
    // ================================

    document.getElementById("years").textContent =
        years;

    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// ================================
// RUN
// ================================

countdown();


// Update every second

setInterval(countdown, 1000);