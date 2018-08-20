
function weather() {



  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {




      today = new Date();
      h = today.getHours();
      if(h>1 && h<12){
        document.getElementById('wish').innerHTML="GOOD MORNING";
      }
      if(h>=12 && h<16){
        document.getElementById('wish').innerHTML="GOOD AFTERNOON";
      }
      if(h>=16 && h<20){
        document.getElementById('wish').innerHTML="GOOD EVENING";
      }
      if(h>=20 && h<24){
        document.getElementById('wish').innerHTML="GOOD NIGHT";
      }




      var d = JSON.parse(this.response);

      var day = ["curr-day", "dayplusone", "dayplustwo", "dayplusthree", "dayplusfour", "dayplusfive", "dayplussix"];
      // weather = ["weather-img", "weather-img1", "weather-img2", "weather-img3", "weather-img4", "weather-img5", "weather-img6"];
      var weather = ["weather-img", "weather-img1", "weather-img2", "weather-img3", "weather-img4", "weather-img5", "weather-img6"];
      var templow = ["curr-ltemp", "curr-ltemp1", "curr-ltemp2", "curr-ltemp3", "curr-ltemp4", "curr-ltemp5", "curr-ltemp6"];
      var temphigh = ["curr-htemp", "curr-htemp1", "curr-htemp2", "curr-htemp3", "curr-htemp4", "curr-htemp5", "curr-htemp6"];
      var image_weather = ["image1", "image2", "image3", "image4", "image5", "image6", "image7"];
      for (var i = 0; i <= 6; i++) {
        var x = d.query.results.channel.item.forecast[i].day;
        var y = getday(x);
        document.getElementById(day[i]).innerHTML = y;
        var weatherday = d.query.results.channel.item.forecast[i].text;
        document.getElementById(weather[i]).innerHTML = weatherday;
        if (weatherday == "Breezy") {
          document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 65% 50%";
        }
        if (weatherday == "Partly Cloudy") {
          document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg')5% 50%";
        }
        if (weatherday == "Scattered Thunderstorms") {
          document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg')64% 88%";
        }
        if (weatherday == "Thunderstorms") {
          document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 65% 89%";
        }
        if (weatherday == "Cloudy") {
          var cur_day = document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 65% 12%";
        }
        if (weatherday == "Mostly Cloudy") {
          var cur_day = document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 36% 12%";
        }
        if (weatherday == "Sunny") {
          var cur_day = document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 10% 0%";
        }
        if (weatherday == "Mostly Sunny") {
          var cur_day = document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 94% 5%";
        }
        if (weatherday == "Scattered Showers") {
          var cur_day = document.getElementById(image_weather[i]).style.background = "url('images/weather.jpg') 11% 89%";
        }




        var low_temp=d.query.results.channel.item.forecast[i].low;
        var low_temp_deg=(low_temp-32)*5/9;
        document.getElementById(templow[i]).innerHTML=low_temp_deg.toFixed()+"&deg";
        // day high temp
        var high_temp=d.query.results.channel.item.forecast[i].high;
        var high_temp_deg=(high_temp-32)*5/9;
        document.getElementById(temphigh[i]).innerHTML=high_temp_deg.toFixed()+"&deg" + "|";

























        // console.log(d.query.results.channel.item.forecast);
      }

      // var image=document.getElementsByTagName("IMG")[0];
      // image.style.position="absolute";
      // image.style.left=65;
      // image.style.clip="rect(30px,200px,200px,60px)";

      // var image=document.getElementsByTagName("IMG")[1];
      // image.style.position="absolute";
      // image.style.width="200px";
      //    image.style.left="20px";
      // image.style.top="70px";
      // image.style.clip="rect(0px, 107px,53px, 46px)";

      // var image=document.getElementsByTagName("IMG")[2];
      // image.style.position="absolute";
      // image.style.width="150px";
      // image.style.left="10px";
      // image.style.top="70px";
      // image.style.clip="rect(0px, 110px, 39px, 66px)";

      // var image=document.getElementsByTagName("IMG")[3];
      // image.style.position="absolute";
      // image.style.width="110px";
      // image.style.left="5px";
      // image.style.top="80px";
      // image.style.clip="rect(0px, 120px, 32px, 76px)";

      // var image=document.getElementsByTagName("IMG")[4];
      // image.style.position="absolute";
      // image.style.width="160px";
      // image.style.left="70px";
      // image.style.top="40px";
      // image.style.clip="rect(33px, 51px, 79px, 0px)";

      // var image=document.getElementsByTagName("IMG")[5];
      // image.style.position="absolute";
      // image.style.width="150px";
      // image.style.left="40px";
      // image.style.top="50px";
      // image.style.clip="rect(33px, 76px, 82px, 33px)";

      // var image=document.getElementsByTagName("IMG")[6];
      // image.style.position="absolute";
      // image.style.width="150px";
      // image.style.left="10px";
      // image.style.top="45px";
      // image.style.clip="rect(33px, 110px, 81px, 71px";
    }
  };

  var place = document.getElementById("city").value;
  // alert(place);
  // var places=place1.options[place1.selectedIndex].value;

  xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + place + "%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
  xhttp.send();
}


function getday(x) {
  switch (x) {
    case 'Mon': return "MONDAY";
    case 'Tue': return "TUESDAY";
    case 'Wed': return "WEDNESDAY";
    case 'Thu': return "THURSDAY";
    case 'Fri': return "FRIDAY";
    case 'Sat': return "SATURDAY";
    case 'Sun': return "SUNDAY";

  }
}




