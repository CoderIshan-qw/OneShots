let data;
async function load(){
    let responce = await fetch("countries.json");
    data = await responce.json();
    let countrySelector = document.getElementById("getC");

    for(let country in data ){
        option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelector.appendChild(option);
    }
}
load();
function sub(){
    let name = document.getElementById("getName").value;
    let dob = document.getElementById("getDob").value;
    let country = document.getElementById("getC").value;
    let total_life = data[country]

    // if any one of them is empty don't go ahead 
    if (name==""||dob==""||country==""){
        alert("Please fill all boxes ");
        return;
    }
    // dob conditions 
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

        alert("Please use DOB format: DD/MM/YYYY");

        return;
    }
    // local storage 
    localStorage.setItem("Name",name);
    localStorage.setItem("DOB",dob);
    localStorage.setItem("Country",country);
    localStorage.setItem("Totallife",total_life)

    window.location.href = "home.html"
}
