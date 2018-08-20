var today, h, m, s;
function clock() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    console.log(h, m, s);
    h=180+h*30+m*0.5;
    m=180+m*6;
    document.getElementsByClassName("seconds_hand")[0].style.transform = "rotate("+ s + "deg)";
    document.getElementsByClassName("minute_hand")[0].style.transform = "rotate(" + m + "deg)";
    document.getElementsByClassName("hour_hand")[0].style.transform = "rotate("+ h  + "deg)";
    setInterval(second_hand, 1000);
    setInterval(hour_hand, 3600000);
    setInterval(minute_hand, 600000);
}


function second_hand() {
    var ref = document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform = "rotate(" + s + "deg)";
    ref.style.transformOrigin = "top left";
    s += 6;


}
function minute_hand() {
    var ref = document.getElementsByClassName("minute_hand")[0];
    ref.style.transform = "rotate(" + m + "deg)";
    ref.style.transformOrigin = "top left";
    m += 0.1;

}

function hour_hand() {
    var ref = document.getElementsByClassName("hour_hand")[0];
    ref.style.transform = "rotate(" + h + "deg)";
    ref.style.transitionOrigin = "top left";
    h += 0.001667;

}



