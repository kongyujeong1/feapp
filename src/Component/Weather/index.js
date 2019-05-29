import React from 'react'
import { Switch, Route, withRouter } from 'react-router';
import CityList from './CityList';
import CurrentWeather from './CurrentWeather';
import './weather.css';

const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities';

class Weather extends React.Component {
    state = {
        city_list: []
    };

    async componentDidMount(){
        const city_list = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);

        console.log(city_list);

        this.setState({
            cities: city_list
        });
    }
    render(){
        const { match } = this.props;
        const { cities } = this.state;
        
        if(!cities){
            return <div>Loading...</div>
        }
        return(
            <div className="Weather">
                <Switch>
                    <Route path={`${match.path}/:cityId`} component={CurrentWeather} />
                    <Route exact path={match.path} render={() => <CityList cities={cities} />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Weather);