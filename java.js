
const d = new Date();
document.getElementById("hora").innerHTML = d;

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(41.1431736903201, -8.607980432154392),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }