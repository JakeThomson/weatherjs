class Weather {
  constructor(city) {
    this.apiKey = "fe2b128429038ba9665dfd3a3a3b4dad";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city){
    this.city = city;
  }
}