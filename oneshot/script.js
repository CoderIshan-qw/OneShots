let data;

async function load() {

    let response = await fetch("countries.json");

    data = await response.json();

    let countrySelector = document.getElementById("getC");

    for (let country in data) {

        let option = document.createElement("option");

        option.value = country;
        option.textContent = country;

        countrySelector.appendChild(option);
    }
}


load();


async function sub() {

    // Make sure the JSON has loaded
    if (!data) {
        await load();
    }

    let name = document.getElementById("getName").value.trim();

    let dob = document.getElementById("getDob").value.trim();

    let country = document.getElementById("getC").value;


    // Check empty fields first
    if (name === "" || dob === "" || country === "") {

        alert("Please fill all details");

        return;
    }


    // Check DOB format
    if (
        dob.length !== 10 ||
        dob[2] !== "/" ||
        dob[5] !== "/" ||
        isNaN(dob[0]) ||
        isNaN(dob[1]) ||
        isNaN(dob[3]) ||
        isNaN(dob[4]) ||
        isNaN(dob[6]) ||
        isNaN(dob[7]) ||
        isNaN(dob[8]) ||
        isNaN(dob[9])
    ) {

        alert("Please enter DOB in DD/MM/YYYY format");

        return;
    }


    // Get country's life expectancy
    let country_value = data[country];


    console.log("Name:", name);
    console.log("DOB:", dob);
    console.log("Country:", country);
    console.log("Life expectancy:", country_value);


    // Store data
    localStorage.setItem("Name", name);

    localStorage.setItem("DOB", dob);

    localStorage.setItem("Country", country);

    localStorage.setItem("CountryValue", country_value);


    // Go to home
    window.location.href = "home.html";
}