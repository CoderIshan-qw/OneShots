

function rtime(){
    const now = new Date();
 const target = new Date("2026-09-03T18:00:00");
   const difference = target-now;
// countdown 
   const hours = Math.floor(difference / 1000 / 60 / 60);

   const minutes = Math.floor((difference / 1000 / 60) % 60);

   const seconds = Math.floor((difference / 1000) % 60);

   const formattedTime = `${hours}hr ${minutes}mins ${seconds}seconds`;

   document.getElementById("getTime").innerHTML = formattedTime
}
setInterval(rtime,1000);
