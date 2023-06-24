alert("Welcome");
function displayTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds(); 
    var period = "AM";
    var welcomeMessage = "";
    if (h == 0) {
        h = 12;
    }
    if(h > 12) {
       h = h - 12;
       period = "PM";
       welcomeMessage = "Good Evening"; 
       document.getElementById("myButton").style.visibility = "hidden";
       document.getElementById("MyTextDisplay").innerText = welcomeMessage;
       document.getElementById("MyTextDisplay").textContent = welcomeMessage;
    }
    else {
        welcomeMessage = "Good Morning";
        period = "AM";
        document.getElementById("myButton").style.visibility = "show";
        document.getElementById("MyTextDisplay").innerText = welcomeMessage;
        document.getElementById("MyTextDisplay").textContent = welcomeMessage;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var timeDescription = h + ":" + m + ":" + s + " " + period;

    document.getElementById("MyClockDisplay").innerText = timeDescription;
    document.getElementById("MyClockDisplay").textContent = timeDescription;

    setTimeout(displayTime, 1000);
}
displayTime();