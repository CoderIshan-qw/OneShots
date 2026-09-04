const full_name = localStorage.getItem("Name");
const Dob = localStorage.getItem("DOB");
const Location = localStorage.getItem("Country");
const life_exp = Number(localStorage.getItem("CountryValue"));

if (!full_name || !Dob || !Location || !life_exp) {
    window.location.href = "index.html";
}

document.getElementById("userName").textContent = full_name;
document.getElementById("countryName").textContent = Location;
document.getElementById("countryShort").textContent = Location.toUpperCase();
document.getElementById("lifeExpectancy").textContent = life_exp;

const [day, month, year] = Dob.split("/").map(Number);

const deathDate = new Date(
    year + life_exp,
    month - 1,
    day
);

function getCalendarDifference(start, end) {
    let cursor = new Date(start);

    let years = end.getFullYear() - cursor.getFullYear();

    let test = new Date(cursor);
    test.setFullYear(cursor.getFullYear() + years);

    if (test > end) {
        years--;
    }

    cursor.setFullYear(cursor.getFullYear() + years);

    let months = end.getMonth() - cursor.getMonth();

    if (months < 0) {
        months += 12;
    }

    test = new Date(cursor);
    test.setMonth(cursor.getMonth() + months);

    if (test > end) {
        months--;
    }

    cursor.setMonth(cursor.getMonth() + months);

    let days = 0;

    while (true) {
        test = new Date(cursor);
        test.setDate(cursor.getDate() + 1);

        if (test > end) {
            break;
        }

        cursor.setDate(cursor.getDate() + 1);
        days++;
    }

    let remaining = end - cursor;

    const hours = Math.floor(
        remaining / (1000 * 60 * 60)
    );

    remaining %= 1000 * 60 * 60;

    const minutes = Math.floor(
        remaining / (1000 * 60)
    );

    remaining %= 1000 * 60;

    const seconds = Math.floor(
        remaining / 1000
    );

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

function countdown() {
    const now = new Date();

    if (now >= deathDate) {
        document.getElementById("years").textContent = "0";
        document.getElementById("months").textContent = "0";
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const time = getCalendarDifference(now, deathDate);

    document.getElementById("years").textContent = time.years;
    document.getElementById("months").textContent = time.months;
    document.getElementById("days").textContent = time.days;
    document.getElementById("hours").textContent = String(time.hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(time.minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(time.seconds).padStart(2, "0");
}

countdown();
setInterval(countdown, 1000);
