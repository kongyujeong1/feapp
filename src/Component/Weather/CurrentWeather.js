import React from 'react';

const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';

class CurrentWeather extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    const cityId = this.props.match.params.cityId;
    const api = `${API_WEATHER}/${cityId}`;

    const weather = await fetch(api)
      .then(res => res.json())
      .then(data => data);
    
    console.log(weather);

    this.setState({
      weather
    });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    if(!weather){
        return <div>Loading...</div>
    }

    const celsius = (weather.main.temp - 273.15).toFixed(2);
    const weatherMain = weather.weather[0].main;
    const windSpeed = weather.wind.speed;
    const clouds = weather.clouds.all;

    return (
      <div className="current-weather">
        <h2 className="select-city">{cityId}</h2>

        <p className="weather-main">{weatherMain}</p>
        <p className="weather-celsius">{celsius}°</p>
        <div className="wind">
            <p className="a">풍속</p>
            <p className="b">{windSpeed}</p>
        </div>
        <div className="cloud">
            <p className="c">구름</p>
            <p className="d">{clouds}</p>
        </div>

      </div>
    );
  }
}

export default CurrentWeather;
