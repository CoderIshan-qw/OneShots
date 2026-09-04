const full_name = localStorage.getItem("Name");

const Dob = localStorage.getItem("DOB");

const Location = localStorage.getItem("Country");

const life_exp = Number(
    localStorage.getItem("CountryValue")
);


// Display stored information

document.getElementById("userName").textContent = full_name;

document.getElementById("countryName").textContent = Location;

document.getElementById("lifeExpectancy").textContent = life_exp;


// Split DOB

const [day, month, year] = Dob.split("/");

const numDay = Number(day);

const numMonth = Number(month);

const numYear = Number(year);


// Create estimated target date

const deathDate = new Date(
    numYear + life_exp,
    numMonth - 1,
    numDay
);


function countdown() {

    const now = new Date();


    // If countdown has finished

    if (now >= deathDate) {

        document.getElementById("years").textContent = 0;
        document.getElementById("months").textContent = 0;
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;

        return;
    }


    let cursor = new Date(now);


    // YEARS

    let years =
        deathDate.getFullYear() -
        cursor.getFullYear();


    let test = new Date(cursor);

    test.setFullYear(
        cursor.getFullYear() + years
    );


    if (test > deathDate) {
        years--;
    }


    cursor.setFullYear(
        cursor.getFullYear() + years
    );


    // MONTHS

    let months =
        deathDate.getMonth() -
        cursor.getMonth();


    if (months < 0) {
        months += 12;
    }


    test = new Date(cursor);

    test.setMonth(
        cursor.getMonth() + months
    );


    if (test > deathDate) {
        months--;
    }


    cursor.setMonth(
        cursor.getMonth() + months
    );


    // DAYS

    let days = 0;


    while (true) {

        test = new Date(cursor);

        test.setDate(
            cursor.getDate() + 1
        );


        if (test > deathDate) {
            break;
        }


        cursor.setDate(
            cursor.getDate() + 1
        );

        days++;
    }


    // HOURS / MINUTES / SECONDS

    let remaining =
        deathDate - cursor;


    let hours = Math.floor(
        remaining / (1000 * 60 * 60)
    );


    remaining %= 1000 * 60 * 60;


    let minutes = Math.floor(
        remaining / (1000 * 60)
    );


    remaining %= 1000 * 60;


    let seconds = Math.floor(
        remaining / 1000
    );


    // Display countdown

    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;
}


countdown();

setInterval(countdown, 1000);