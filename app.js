var avail = document.getElementById("avail");
var notavail = document.getElementById("notavail");
console.log("working")
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    console.log("Geolocation is not supported by this browser.");
    document.getElementById("notavail").innerHTML = 'Geolocation is not supported by this browser.'
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  " Longitude: " + position.coords.longitude);
  document.getElementById("avail").innerHTML = 'Ride Available'
}

function showError(error) {
  document.getElementById("notavail").innerHTML = 'An unexpected error has occured, please try again later.'
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.")
      break;
  }
}
