let data = null;

const countrySelector = document.getElementById("getC");
const signupForm = document.getElementById("signupForm");
const continueBtn = document.getElementById("continueBtn");

async function load() {
    try {
        const response = await fetch("countries.json");

        if (!response.ok) {
            throw new Error("Could not load countries.json");
        }

        data = await response.json();

        countrySelector.innerHTML =
            '<option value="">Select your country</option>';

        for (const country in data) {
            const option = document.createElement("option");

            option.value = country;
            option.textContent = country;

            countrySelector.appendChild(option);
        }

        continueBtn.disabled = false;

    } catch (error) {
        console.error(error);

        countrySelector.innerHTML =
            '<option value="">Could not load countries</option>';

        continueBtn.disabled = true;
    }
}

function isValidDob(dob) {
    if (
        dob.length !== 10 ||
        dob[2] !== "/" ||
        dob[5] !== "/"
    ) {
        return false;
    }

    const [day, month, year] = dob.split("/").map(Number);

    if (
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year)
    ) {
        return false;
    }

    if (year < 1900 || year > new Date().getFullYear()) {
        return false;
    }

    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

async function sub(event) {
    if (event) {
        event.preventDefault();
    }

    if (!data) {
        await load();
    }

    const name = document.getElementById("getName").value.trim();
    const dob = document.getElementById("getDob").value.trim();
    const country = countrySelector.value;

    if (name === "" || dob === "" || country === "") {
        alert("Please fill all details.");
        return;
    }

    if (!isValidDob(dob)) {
        alert("Please enter a valid DOB in DD/MM/YYYY format.");
        return;
    }

    const countryValue = data[country];

    if (countryValue === undefined) {
        alert("Could not find life expectancy for this country.");
        return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("Country", country);
    localStorage.setItem("CountryValue", countryValue);

    window.location.href = "home.html";
}

signupForm.addEventListener("submit", sub);

load();
