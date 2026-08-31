function rtime() {
    const now = new Date();
    const target = new Date("2026-09-03T18:00:00");

    const difference = target - now;

    if (difference <= 0) {
        document.getElementById("getTime").innerHTML = "LAUNCHED!";
        return;
    }

    const hours = Math.floor(difference / 1000 / 60 / 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("getTime").innerHTML =
        `${hours}hr ${minutes}mins ${seconds}seconds`;
}


// Amazon Code
const amazonCode = "8MJY-3EYEYB-DVCU";
const codeElement = document.getElementById("c");

// Show code after 10 seconds
setTimeout(() => {
    codeElement.innerHTML = amazonCode;
    codeElement.style.display = "inline-block";

    // Hide after another 10 seconds
    setTimeout(() => {
        codeElement.style.display = "none";
    }, 10000);

}, 10000);


// Repeat every 20 seconds
setInterval(() => {

    codeElement.innerHTML =  amazonCode;
    codeElement.style.display = "inline-block";

    setTimeout(() => {
        codeElement.style.display = "none";
    }, 10000);

}, 20000);


// Start countdown
rtime();
setInterval(rtime, 1000);