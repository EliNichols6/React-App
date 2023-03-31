import React, { Component } from 'react';
import request from 'browser-request';

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: null,
      forecast: null,
      location: null,
    };
  }

  componentDidMount() {
    request('https://api.weather.gov/points/39.7456,-97.0892', (error, response, body) => {
      const data = JSON.parse(body);
      const forecastUrl = data.properties.forecast;
      const locationUrl = data.properties.observationStations;
      request(forecastUrl, (error, response, body) => {
        const forecastData = JSON.parse(body);
        request(locationUrl, (error, response, body) => {
          const locationData = JSON.parse(body);
          this.setState({
            timeZone: data.properties.timeZone,
            forecast: forecastData.properties.periods[0].detailedForecast,
            location: locationData.features[0].properties.name,
          });
        });
      });
    });
  }

  render() {
    const { timeZone, forecast, location } = this.state;
    return (
      <div>
        <h1>Api Call</h1>
        <p><a href="https://api.weather.gov/points/39.7456,-97.0892">API Link</a></p>
        <p>Time Zone: {timeZone}</p>
        <p>Forecast: {forecast}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default ApiCall;
