// Init weather object
const storage = new Storage();
const weather = new Weather(storage.getLocationData());
const ui = new UI;

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  weather.changeLocation(city);
  storage.setLocationData(city);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    //ui.paint(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}