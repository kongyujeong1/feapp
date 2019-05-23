import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './weather.css';

const CityList = props => {
  const { cities, match } = props;
  const { url } = match;

  return (
    <div className="city-list">
      <h2 className='city'>도시를 선택해주세요:</h2>
      <ul className="cities">
        {cities.map(item => (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(CityList);
