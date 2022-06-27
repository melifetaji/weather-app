const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d3b34fd24c23881caa97ab20f8d63003&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". The temperature is " +
          body.current.temperature +
          " and it feels like " +
          body.current.feelslike +
          ". The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
